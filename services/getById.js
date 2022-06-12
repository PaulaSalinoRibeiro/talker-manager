const { readFile } = require('../utils');

const getById = async (req, res, _next) => {
  const { id } = req.params;
  
  try {
    const data = await readFile();
    const talker = data.find((item) => item.id === Number(id));
    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(talker);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getById;