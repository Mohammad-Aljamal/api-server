'use strict';

const Book = (sequelize, DataTypes) =>
sequelize.define("book", {
    bookName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Book;