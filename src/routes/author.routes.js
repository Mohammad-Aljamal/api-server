'use strict';

const express = require("express");
const authorRouter = express.Router();
const Collection = require('../models/lib/collection')
const { AuthorModel,BookModel } = require('../models/index');

authorRouter.get('/author', getAllAuthors);
authorRouter.get('/author/:id', getAuthor);
authorRouter.post('/author', addAuthor);
authorRouter.put('/author/:id', editAuthor);
authorRouter.delete('/author/:id', deleteAuthor);
////////
authorRouter.get('/authorBooks/:id', getAuthorBooks)
//////

async function getAllAuthors(req,res){
    let authors = await AuthorModel.read();
    res.status(200).json(authors); 
}

async function getAuthor(req,res){
    const authorId = parseInt(req.params.id)
    let author = await AuthorModel.read({authorId:authorId});
    res.status(200).json(author); 
}

async function addAuthor(req,res){
    const newAuthor = req.body;
    const author = await AuthorModel.add(newAuthor);
    res.status(201).json(author);
}

async function editAuthor(req,res){
    const authorId = parseInt(req.params.id);
    const updateAuthor = req.body;
    const updatedAuthor = await AuthorModel.update(updateAuthor, authorId)
    res.status(201).json(updatedAuthor);
}

async function deleteAuthor(req,res){
    const authorId = parseInt(req.params.id);
    let deletedAuthor = await AuthorModel.delete(authorId);
    res.status(204).json(deletedAuthor);
}


/////////////////////////////////////////////
async function getAuthorBooks(req,res){
    const authorId = parseInt(req.params.id);
    let authorBooks = await AuthorModel.findAuthorBooks(authorId,BookModel.model);
    res.status(200).json(authorBooks);
}

/////////////////////////////////////////////
module.exports = authorRouter;


