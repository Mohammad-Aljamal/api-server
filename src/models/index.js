'use strict';

require("dotenv").config();
const { Sequelize, DataTypes } = require ("Sequelize");

const POSTGRES_URI = process.env.NODE_ENV === "test"?"sqlite::memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

    new sequelize = new Sequelize (POSTGRES_URI, sequelizeOptions);

    //lmlmlmlm;lm