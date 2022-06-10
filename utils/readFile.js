const fs = require('fs/promises');

const path = '../talker.json';

async function readFile() {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = readFile;
