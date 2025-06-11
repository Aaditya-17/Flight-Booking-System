"use strict";
const { SEAT_TYPE } = require("../utils/common");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Seat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Airplane, {
                foreignKey: "airplaneId",
                onDelete: "CASCADE",
            });
        }
    }
    Seat.init(
        {
            class_type: {
                type: DataTypes.ENUM,
                values: [
                    SEAT_TYPE.BUSINESS,
                    SEAT_TYPE.ECONOMY,
                    SEAT_TYPE.PREMIUM_ECONOMY,
                    SEAT_TYPE.FIRST_CLASS,
                ],
                defaultValue: SEAT_TYPE.ECONOMY,
            },
            row: { type: DataTypes.INTEGER, allowNull: false },
            col: { type: DataTypes.STRING, allowNull: false },
            airplaneId: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            sequelize,
            modelName: "Seat",
        }
    );
    return Seat;
};
