'use strict';

const express = require("express");
const clothesRouter = express.Router();
const { Clothes } = require('../models/index');

clothesRouter.get('/clothes', getAllClothes);
clothesRouter.get('/clothes/:id', getClothes);
clothesRouter.post('/clothes', addClothes);
clothesRouter.put('/clothes/:id', editClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);


async function getAllClothes (req,res){
    let clothes = await Clothes.findAll();
    res.status(200).json(clothes);
}

async function getClothes (req,res){
    let clothesId = parseInt(req.params.id);
    let clothes = await Clothes.findOne({ where: {id: clothesId}});
    res.status(200).send(clothes);
}

async function addClothes (req,res){
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).send(clothes);
}

async function editClothes (req,res){
    let clothesId = parseInt(req.params.id);
    let updateClothes = req.body;
    let foundClothes = await Clothes.findOne({where: {id: clothesId}});
    let updatedClothes = await foundClothes.update(updateClothes);
    res.status(201).send(updatedClothes);
}

async function deleteClothes (req,res) {
    let clothesId = parseInt(req.params.id);
    let deletedClothes = await Clothes.destroy({where: {id: clothesId}});
    res.status(204).json(deletedClothes);
}

module.exports = clothesRouter;