"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Flights", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            FlightNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            airplaneId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Airports",
                    key: "id",
                },
                onDelete: "CASCADE",
                allowNull: false,
            },
            arrivalAirportId: {
                type: Sequelize.STRING,
                references: {
                    model: "Airports",
                    key: "code",
                },
                allowNull: false,
                onDelete: "CASCADE",
            },
            departureAirportId: {
                type: Sequelize.STRING,
                references: {
                    model: "Airports",
                    key: "code",
                },
                onDelete: "CASCADE",
                allowNull: false,
            },
            arrivalTime: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            departureTime: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            boardingGate: {
                type: Sequelize.STRING,
            },
            totalSeats: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Flights");
    },
};
