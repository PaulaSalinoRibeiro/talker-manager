const express = require('express');
const services = require('../services');

const routeTalkker = express.Router();

routeTalkker.get('/', services.getAll);

routeTalkker.get('/:id', services.getById);

module.exports = routeTalkker;