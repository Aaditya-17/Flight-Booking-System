const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppErrors = require("../utils/errors/app-errors");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
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
            "Cannot create Airplane",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getAllAirplane() {
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppErrors(
            "Cannot fetch data of all airplanes",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        throw error;
    }
}
async function deleteAirplane(id) {
    try {
        const airplane = await airplaneRepository.destory(id);
        return airplane;
    } catch (error) {
        throw error;
    }
}
async function updateAirplane(id, data) {
    try {
        const airplane = await airplaneRepository.update(id, data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane,
    getAllAirplane,
    getAirplane,
    deleteAirplane,
    updateAirplane,
};
