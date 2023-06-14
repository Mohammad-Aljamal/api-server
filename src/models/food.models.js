'use strict';

const Food = (sequelize, DataTypes) => 
    sequelize.define("food", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        // ,
        // lastName: {
        //     type: DataTypes.STRING,
        // }

    })



module.exports = Food;