const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppErrors = require("../utils/errors/app-errors");

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
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
            "Cannot create Airport",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getAllAirport() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppErrors(
            "Cannot fetch data of all airports",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        throw error;
    }
}
async function deleteAirport(id) {
    try {
        const response = await airportRepository.destory(id);
        return response;
    } catch (error) {
        throw error;
    }
}
async function updateAirport(id, data) {
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirport,
    getAllAirport,
    getAirport,
    deleteAirport,
    updateAirport,
};
