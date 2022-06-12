const { readFile, writeFile } = require('../utils');

const updateTalker = async (req, res, _next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  
  try {
    const data = await readFile();
  } catch (err) {
    console.log(err);
  }
};

module.exports = updateTalker;