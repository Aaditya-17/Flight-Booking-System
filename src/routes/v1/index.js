const express = require("express");
const router = express.Router();
const airplaneroutes = require("./airplane-routes");
const cityroutes = require("./city-routes");
router.use("/airplane", airplaneroutes);
router.use("/cities", cityroutes);
//router.post("/addUser", userController.addUser);
module.exports = router;
