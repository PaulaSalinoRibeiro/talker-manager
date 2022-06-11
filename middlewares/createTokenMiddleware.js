const utils = require('../utils');

const creteTokenMiddleware = (req, _res, next) => {
  const { email, password } = req.body;
  const newToken = utils.generateToken(email, password);

  req.user = newToken;

  next();
};

module.exports = creteTokenMiddleware;