const { readFile, writeFile } = require('../utils');

const updateTalker = async (req, res, _next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  
  try {
    const data = await readFile();
    const findTalk = data.findIndex((item) => item.id === Number(id));

    data[findTalk] = { ...data[findTalk], name, age, talk };

    await writeFile(data);

    res.status(200).json(data[findTalk]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = updateTalker;