const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils");
function validateFlight(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = "flightNumber not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.airplaneId) {
        ErrorResponse.message = "airplaneId not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = "arrivalAirportId not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.departureAirportId) {
        ErrorResponse.message = "departureAirportId not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.arrivalTime) {
        ErrorResponse.message = "arrivalTime not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.price) {
        ErrorResponse.message = "price not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.totalSeats) {
        ErrorResponse.message = "totalSeats not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateFlight,
};
