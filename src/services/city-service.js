const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppErrors = require("../utils/errors/app-errors");

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
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
            "Cannot create City",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getAllCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppErrors(
            "Cannot fetch data of all cities",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        throw error;
    }
}
async function deleteCity(id) {
    try {
        const cityDeleted = await cityRepository.destory(id);
        return cityDeleted;
    } catch (error) {
        throw error;
    }
}
async function updateCity(id, data) {
    try {
        const updatedCity = await cityRepository.update(id, data);
        return updatedCity;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCity,
    getAllCities,
    getCity,
    deleteCity,
    updateCity,
};
