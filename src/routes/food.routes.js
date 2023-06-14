'use strict';

const express = require("express");
const foodRouter = express.Router();
const { Food } = require('../models/index');

foodRouter.get('/food', getFoods);
foodRouter.get('/food/:id', getFood);
foodRouter.post('/food', addFood);
foodRouter.put('/food/:id', editFood);
foodRouter.delete('/food/:id', deleteFood);


async function getFoods (req,res){
    let foods = await Food.findAll();
    res.status(200).json(foods);
}

async function getFood (req,res){
    let foodId = parseInt(req.params.id);
    let food = await Food.findOne({ where: {id: foodId}});
    res.status(200).send(food);
}

async function addFood (req,res){
    let newFood = req.body;
    let food = await Food?.create(newFood);
    res.status(201).send(food);
}

async function editFood (req,res){
    let foodId = parseInt(req.params.id);
    let updateFood = req.body;
    let foundFood = await Food.findOne({where: {id: foodId}});
    let updatedFood = await foundFood.update(updateFood);
    res.status(201).send(updatedFood);
}

async function deleteFood (req,res) {
    let foodId = parseInt(req.params.id);
    let deletedFood = await Food.destroy({where: {id: foodId}});
    res.status(204).json(deletedFood);
}

module.exports = foodRouter;