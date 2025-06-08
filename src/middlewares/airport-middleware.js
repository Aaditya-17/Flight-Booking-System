const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils");
function validateAirport(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = "name not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.code) {
        ErrorResponse.message = "code not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.address) {
        ErrorResponse.message = "address not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.cityId) {
        ErrorResponse.message = "cityId not found !!!";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateAirport,
};
