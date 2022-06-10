const utils = require('../utils');

const getAll = async (_req, res, _next) => {
  try {
    const data = await utils.readFile();
    if (!data) return res.status(200).json([]);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getAll;