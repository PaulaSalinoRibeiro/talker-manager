const express = require('express');
const services = require('../services');

const routeLogin = express.Router();

routeLogin.post('/', services.createLogin);

module.exports = routeLogin;
