const express = require('express');
const services = require('../services');
// const middlewares = require('../middlewares');

const routeTalkker = express.Router();

routeTalkker.get('/', services.getAll);

routeTalkker.get('/:id', services.getById);

routeTalkker.post('/', services.createTalker);

module.exports = routeTalkker;