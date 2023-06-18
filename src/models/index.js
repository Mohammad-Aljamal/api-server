'use strict';

require("dotenv").config();
const { Sequelize, DataTypes} = require ("sequelize");
const Food = require("./food.models");
const Clothes = require("./clothes.models");
const AuthorSchema = require('./author.models');
const BookSchema = require('./book.models');
const Collection = require('./lib/collection')

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;

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

    let sequelize = new Sequelize (POSTGRES_URI, sequelizeOptions);
    
    const AuthorTable = AuthorSchema(sequelize, DataTypes);
    const BookTable = BookSchema(sequelize, DataTypes);

    const AuthorCollection = new Collection (AuthorTable);
    const BookCollection = new Collection (BookTable);

    AuthorTable.hasMany(BookTable , {
        foreignKey: 'authorId',
        sourceKey: 'id',
    })

    BookTable.belongsTo(AuthorTable, {
        foriegnKey: 'authorId',
        targetKey: 'id',
    })

    module.exports = {
        db: sequelize,
        Food: Food(sequelize,DataTypes),
        Clothes: Clothes(sequelize,DataTypes),
        AuthorModel: AuthorCollection,
        BookModel: BookCollection,
    }

