const express = require('express');
const { getAll, getById, createTalker, createLogin, updateTalker } = require('../services');
const {
  authoMiddleware,
  createTokenMiddleware,
  validateTokenMiddleware,
  validateNameMiddleware,
  validateAgeMiddleware,
  validateTalkMiddleware,
  validateWatchedAtMiddleware,
  validateRateMiddleware,
} = require('../middlewares');

const route = express.Router();

route.post('/login', authoMiddleware, createTokenMiddleware, createLogin);

route.get('/talker', getAll);

route.get('/talker/:id', getById);

route.post('/talker', 
  validateTokenMiddleware,
  validateNameMiddleware,
  validateAgeMiddleware, 
  validateTalkMiddleware,
  validateWatchedAtMiddleware,
  validateRateMiddleware,
  createTalker);

route.put('/talker/:id', updateTalker);

module.exports = route;