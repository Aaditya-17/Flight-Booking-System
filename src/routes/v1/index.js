const express = require("express");
const router = express.Router();
const airplaneroutes = require("./airplane-routes");
const cityroutes = require("./city-routes");
const airportroutes = require("./airport-routes");

router.use("/airplane", airplaneroutes);
router.use("/cities", cityroutes);
router.use("/airports", airportroutes);
module.exports = router;
