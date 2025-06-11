"use strict";
const { SEAT_TYPE } = require("../utils/common");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Seats", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            class_type: {
                type: Sequelize.ENUM,
                values: [
                    SEAT_TYPE.BUSINESS,
                    SEAT_TYPE.ECONOMY,
                    SEAT_TYPE.PREMIUM_ECONOMY,
                    SEAT_TYPE.FIRST_CLASS,
                ],
                defaultValue: SEAT_TYPE.ECONOMY,
                allowNull: false,
            },
            row: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            col: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            airplaneId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Airplanes",
                    key: "id",
                },
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Seats");
    },
};
