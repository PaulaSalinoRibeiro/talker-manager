const fs = require('fs/promises');

const path = '../talker.json';

async function writeFile(text) {
  try {
    await fs.writeFile(path, JSON.stringify(text));
  } catch (err) {
    console.log(err);
  }
}

module.exports = writeFile;