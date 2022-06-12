const { readFile } = require('../utils');

const searchTalker = async (req, res, _next) => {
  const { q } = req.query;
  try {
    const data = await readFile();
    const search = data.filter((item) => item.name.includes(q));
    res.status(200).json(search);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = searchTalker;