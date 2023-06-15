'use strict';

const Author = (sequelize, DataTypes) =>
sequelize.define("author" , {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    // ,
    // lastName: {
    //     type: DataTypes.STRING,
    // }

})

module.exports = Author;