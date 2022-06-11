const express = require('express');
const { getAll, getById, createTalker } = require('../services');
const { validateTokenMiddleware } = require('../middlewares');

const routeTalkker = express.Router();

routeTalkker.get('/', getAll);

routeTalkker.get('/:id', getById);

routeTalkker.use(validateTokenMiddleware);

routeTalkker.post('/', createTalker);

module.exports = routeTalkker;