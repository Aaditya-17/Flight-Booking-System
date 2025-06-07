const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils");

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.data = city;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
async function getAllCities(req, res) {
    try {
        const cities = await CityService.getAllCities();
        SuccessResponse.data = cities;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
async function getCity(req, res) {
    try {
        const city = await CityService.getCity(req.params.id);
        if (city) {
            SuccessResponse.data = city;
        } else {
            SuccessResponse.data = "No City found";
        }
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function destoryCity(req, res) {
    try {
        const response = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function updateCity(req, res) {
    try {
        const response = await CityService.updateCity(req.params.id, {
            name: req.body.name,
        });
        console.log(response);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    getAllCities,
    getCity,
    destoryCity,
    updateCity,
};
