"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Seats", [
            {
                airplaneId: 1,
                row: 1,
                col: "A",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                airplaneId: 1,
                row: 2,
                col: "B",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                airplaneId: 1,
                row: 12,
                col: "C",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                airplaneId: 1,
                row: 16,
                col: "A",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                airplaneId: 1,
                row: 19,
                col: "B",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                airplaneId: 1,
                row: 14,
                col: "C",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Seats");
    },
};
