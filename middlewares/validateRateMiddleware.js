const MIN_RATE = 1;
const MAX_RATE = 5;

const validateRateMiddleware = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (!rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  if (rate < MIN_RATE || rate > MAX_RATE) {
    res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};

module.exports = validateRateMiddleware;