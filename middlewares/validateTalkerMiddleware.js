const MIN_LENGTH = 16;
const MIN_NAME = 3;
// const MIN_AGE = 18;

const validateTalkerMiddleware = (req, res, next) => {
  const { token } = req.headers;
  const { name, age, talk } = req.body;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (token.length !== MIN_LENGTH) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });

  if (name.length < MIN_NAME) return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });

  // if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });

  // if (age < MIN_AGE) return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });

  // if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório'});

  // if(!talk.watchedAt) return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });

  next();
};

module.exports = validateTalkerMiddleware;