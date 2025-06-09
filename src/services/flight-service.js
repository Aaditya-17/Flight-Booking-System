const { StatusCodes } = require("http-status-codes");
const AppErrors = require("../utils/errors/app-errors");
const { FlightRepository } = require("../repositories");
const { Op } = require("sequelize");

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.log(error);
        if (error.name == "SequelizeValidationError") {
            let expalnation = [];
            error.errors.forEach((err) => {
                expalnation.push(err.message);
            });
            throw new AppErrors(expalnation, StatusCodes.BAD_REQUEST);
        }
        throw new AppErrors(
            "Cannot create Flight",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getAllFlights(query) {
    const filter = {};
    let sort = [];
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        filter.departureAirportId = departureAirportId;
        filter.arrivalAirportId = arrivalAirportId;
    }
    if (query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        filter.price = {
            [Op.between]: [minPrice, maxPrice ? maxPrice : 20000],
        };
    }
    if (query.travellers) {
        filter.totalSeats = {
            [Op.gte]: query.travellers,
        };
    }
    if (query.tripDate) {
        filter.departureTime = {
            [Op.between]: [
                `${query.tripDate}T00:00:00.000Z`,
                `${query.tripDate}T23:59:00.000Z`,
            ],
        };
    }
    if (query.sort) {
        const params = query.sort.split(",");
        const sortFilter = params.map((param) => param.split("_"));
        sort = sortFilter;
    }
    try {
        const flights = await flightRepository.getAllFlights(filter, sort);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppErrors(
            "Cannot fetch data of all flights",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getFlight(id) {
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        throw error;
    }
}
async function deleteFlight(id) {
    try {
        const response = await flightRepository.destory(id);
        return response;
    } catch (error) {
        throw error;
    }
}
async function updateFlight(id, data) {
    try {
        const response = await flightRepository.update(id, data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    deleteFlight,
    updateFlight,
};
