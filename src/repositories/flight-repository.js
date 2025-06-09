const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");
const { Op } = require("sequelize");

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
    async getAllFlights(customFilter, sortfilter) {
        console.log("📦 Filter received in repository:", customFilter); // ✅ Add this
        const flights = Flight.findAll({
            where: customFilter,
            order: sortfilter,
        });
        return flights;
    }
}
module.exports = FlightRepository;
