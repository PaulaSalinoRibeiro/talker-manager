const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('./talker.json', { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = readFile;
