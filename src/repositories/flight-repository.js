const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport, City } = require("../models");
const { Op } = require("sequelize");

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
    async getAllFlights(customFilter, sortfilter) {
        const flights = await Flight.findAll({
            where: customFilter,
            order: sortfilter,
            include: [
                {
                    model: Airplane,
                    as: "airplane",
                    required: true, // optional: forces INNER JOIN
                },
                {
                    model: Airport,
                    as: "departureAirport",
                    required: false, // or true, based on your use case
                    include: {
                        model: City,
                        as: "city",
                    },
                },
                {
                    model: Airport,
                    as: "arrivalAirport",

                    required: false,
                    include: { model: City, as: "city" },
                },
            ],
        });
        return flights;
    }
}
module.exports = FlightRepository;
