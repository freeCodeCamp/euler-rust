// TODO: This file has some helper functions to make testing FUN!
const fs = require("fs");

async function getDirectory(path) {
  const files = await fs.promises.readdir(`./curriculum/${path}`);
  return files;
}

const __helpers = {
  getDirectory,
};

module.exports = __helpers;
