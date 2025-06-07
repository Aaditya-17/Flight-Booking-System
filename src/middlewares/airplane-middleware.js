const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils");
function validateAirplane(req, res, next) {
    if (!req.body.modelNumber) {
        ErrorResponse.message = "Model no not given properly";
        ErrorResponse.data = req.body;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateAirplane,
};
