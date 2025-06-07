const express = require("express");
const { CityController } = require("../../controllers");
const router = express.Router();

router.get("/", CityController.getAllCities);
router.post("/", CityController.createCity);
router.get("/:id", CityController.getCity);
router.patch("/:id", CityController.updateCity);
router.delete("/:id", CityController.destoryCity);

module.exports = router;
