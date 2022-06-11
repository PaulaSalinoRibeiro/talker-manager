const express = require('express');
const { createLogin } = require('../services');
const { authoMiddleware, createTokenMiddleware } = require('../middlewares');

const routeLogin = express.Router();

routeLogin.post('/', authoMiddleware, createTokenMiddleware, createLogin);

module.exports = routeLogin;
