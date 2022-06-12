const { readFile, writeFile } = require('../utils');

const deleteTalker = async (req, res, _next) => {
  const { id } = req.params;

  try {
    const data = await readFile();
    const newData = data.filter((item) => item.id !== Number(id));
    await writeFile(newData);

    res.status(204).end();
  } catch (err) {
    console.log(err);
  }
};

module.exports = deleteTalker;