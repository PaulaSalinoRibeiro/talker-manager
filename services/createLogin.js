const utils = require('../utils');

const createLogin = (req, res, _next) => {
  const { email, password } = req.body;
  const newToken = utils.generateToken(email, password);
  res.status(200).json({ token: newToken });
};

module.exports = createLogin;