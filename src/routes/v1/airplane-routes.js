const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");
const router = express.Router();

router.post(
    "/",
    AirplaneMiddleware.validateAirplane,
    AirplaneController.createAirplane
);
router.get("/", AirplaneController.getAllAirplanes);
router.get("/:id", AirplaneController.getAirplane);
router.delete("/:id", AirplaneController.destoryAirplane);
router.patch("/:id", AirplaneController.updateAirplane);

module.exports = router;
