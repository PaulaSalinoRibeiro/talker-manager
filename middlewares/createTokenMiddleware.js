const { generateToken } = require('../utils');

const createTokenMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  const newToken = generateToken(email, password);

  req.user = { newToken };

  next();
};

module.exports = createTokenMiddleware;