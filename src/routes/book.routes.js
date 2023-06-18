'use strict';

const express = require("express");
const bookRouter = express.Router();
const Collection = require('../models/lib/collection')
const { BookModel } = require('../models/index');

bookRouter.get('/book', getAllBooks);
bookRouter.get('/book/:id', getBook);
bookRouter.post('/book', addBook);
bookRouter.put('/book/:id', editBook);
bookRouter.delete('/book/:id', deleteBook);

async function getAllBooks(req,res){
    let books = await BookModel.read();
    res.status(200).json(books); 
}

async function getBook(req,res){
    const bookId = parseInt(req.params.id)
    let book = await BookModel.read(bookId);
    res.status(200).json(book); 
}

async function addBook(req,res){
    const newBook = req.body;
    console.log(newBook);
    const book = await BookModel.add(newBook);
    res.status(201).json(book);
}

async function editBook(req,res){
    const bookId = parseInt(req.params.id);
    const updateBook = req.body;
    const updatedBook = await BookModel.update(updateBook, bookId)
    res.status(201).json(updatedBook);
}

async function deleteBook(req,res){
    const bookId = parseInt(req.params.id);
    let deletedBook = await BookModel.delete(bookId);
    res.status(204).json(deletedBook);
}

module.exports = bookRouter;


