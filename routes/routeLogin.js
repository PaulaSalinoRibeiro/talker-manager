const express = require('express');
const services = require('../services');
const middlewares = require('../middlewares');

const routeLogin = express.Router();

routeLogin.post('/', middlewares.authoMiddleware, services.createLogin);

module.exports = routeLogin;
