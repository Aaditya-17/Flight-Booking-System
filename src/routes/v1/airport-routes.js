const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddleware } = require("../../middlewares");
const router = express.Router();

// URL: /api/v1/airports

router.post(
    "/",
    AirportMiddleware.validateAirport,
    AirportController.createAirport
);
router.get("/", AirportController.getAllAirports);
router.get("/:id", AirportController.getAirport);
router.delete("/:id", AirportController.destoryAirport);
router.patch("/:id", AirportController.updateAirport);

module.exports = router;
