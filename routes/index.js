const express = require('express');
const services = require('../services');

const route = express.Router();

route.get('/', services.getAll);

route.get('/:id', services.getById);

module.exports = route;