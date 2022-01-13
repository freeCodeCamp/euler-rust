// TODO: This file has some helper functions to make testing FUN!
const fs = require("fs");

async function getDirectory(path) {
  return fs.readdir(path, (err, files) => {
    return files;
  });
}

const __helpers = {
  getDirectory,
};

module.exports = __helpers;
