const utils = require('../utils');

const createTalker = async (req, res, _next) => {
  const { name, age, talk } = req.body;
  try {
    const data = await utils.readFile();
    const newTalker = {
      name,
      age,
      id: data.length + 1,
      talk,
    };
    const newData = [...data, newTalker];
    await utils.writeFile(newData);
    res.status(202).json(newTalker);
  } catch (err) {
    console.log(err);
  }
};

module.exports = createTalker;