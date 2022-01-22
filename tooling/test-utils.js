// TODO: This file has some helper functions to make testing FUN!
const fs = require("fs");

async function getDirectory(path) {
  const files = await fs.promises.readdir(`./curriculum/${path}`);
  return files;
}

/**
 * Checks if file is open in VSCode editor
 * @param {string} path Path to file
 * @returns {boolean}
 */
async function isFileOpen(path) {
  // TODO: Probably not possible
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return true;
}

async function getTerminalOutput() {
  // TODO
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return "Hello, world!";
}

async function getFile(path) {
  const file = await fs.promises.readFile(`./curriculum/${path}`, "utf8");
  return file;
}

const __helpers = {
  getDirectory,
  isFileOpen,
  getFile,
  getTerminalOutput,
};

module.exports = __helpers;
