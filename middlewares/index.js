const authoMiddleware = require('./authoMiddleware');
const createTokenMiddleware = require('./createTokenMiddleware');
const validateTokenMiddleware = require('./validateTokenMiddleware');
const validateNameMiddleware = require('./validateNameMiddleware');
const validateAgeMiddleware = require('./validateAgeMiddleware');
const validateTalkMiddleware = require('./validateTalkMiddleware');

module.exports = {
  authoMiddleware,
  createTokenMiddleware,
  validateTokenMiddleware,
  validateNameMiddleware,
  validateAgeMiddleware,
  validateTalkMiddleware,
};