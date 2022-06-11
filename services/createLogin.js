const createLogin = (req, res, _next) => {
  const { newToken } = req.user;
  res.status(200).json({ token: newToken });
};

module.exports = createLogin;