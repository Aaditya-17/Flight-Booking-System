const express = require("express");
const router = express.Router();
const airplaneroutes = require("./airplane-routes");
const cityroutes = require("./city-routes");
const airportroutes = require("./airport-routes");
const flightroutes = require("./flight-routes");

router.use("/airplane", airplaneroutes);
router.use("/cities", cityroutes);
router.use("/airports", airportroutes);
router.use("/flights", flightroutes);

module.exports = router;
