const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");
const router = express.Router();

// URL: /api/v1/flights

router.post(
    "/",
    FlightMiddleware.validateFlight,
    FlightController.createFlight
);

// /api/v1/flights?trips=DEL-KPM&price=1000&travellers=2&sort=departureTime_DESC,price_ASC
router.get("/", FlightController.getAllFlights);

router.get("/:id", FlightController.getFlight);
router.delete("/:id", FlightController.destoryFlight);
router.patch("/:id", FlightController.updateFlight);

module.exports = router;
