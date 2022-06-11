const express = require('express');
const { getAll, getById, createTalker, createLogin } = require('../services');
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

route.get('/talker', getAll);

route.get('talker/:id', getById);

route.post('/login', authoMiddleware, createTokenMiddleware, createLogin);

route.use(validateTokenMiddleware, 
  validateNameMiddleware, 
  validateAgeMiddleware, 
  validateTalkMiddleware,
  validateWatchedAtMiddleware, 
  validateRateMiddleware);

route.post('/talker', createTalker);

module.exports = route;