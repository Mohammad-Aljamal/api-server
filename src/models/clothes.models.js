'use strict';

const Clothes = (sequelize, DataTypes) => 
    sequelize.define("clothes", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        // ,
        // lastName: {
        //     type: DataTypes.STRING,
        // }
    })



module.exports = Clothes;