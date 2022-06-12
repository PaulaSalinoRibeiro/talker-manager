const express = require('express');
const { getAll, 
  getById, 
  createTalker, 
  createLogin, 
  updateTalker, 
  deleteTalker,
  searchTalker } = require('../services');

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

route.get('/talker/search', validateTokenMiddleware, searchTalker);

route.get('/talker/:id', getById);

route.delete('/talker/:id', validateTokenMiddleware, deleteTalker);

route.use(
  validateTokenMiddleware,
  validateNameMiddleware,
  validateAgeMiddleware, 
  validateTalkMiddleware,
  validateWatchedAtMiddleware,
  validateRateMiddleware,
);

route.post('/talker', createTalker);

route.put('/talker/:id', updateTalker);

module.exports = route;