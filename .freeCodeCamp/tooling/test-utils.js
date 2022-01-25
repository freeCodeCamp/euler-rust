// TODO: This file has some helper functions to make testing FUN!
const fs = require("fs");
const util = require("util");
const path = require("path");
const execute = util.promisify(require("child_process").exec);

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
  // TODO: Pipe output to a file and terminal
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return "Hello, world!";
}

/**
 * Returns stdout of a command called from a given path
 * @param {string} command
 * @param {string} path Path relative to curriculum folder
 * @returns
 */
async function getCommandOutput(command, path = "") {
  const { stdout } = await execute(command, {
    cwd: `curriculum/${path}`,
    shell: "/bin/bash",
  });
  return stdout;
}

async function getLastCommand(howManyBack = 0) {
  const pathToBashLogs = path.join("~/.bash_history");
  const bashLogs = await fs.promises.readFile(pathToBashLogs, "utf8");

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split("\n");
  const lastLog = logs[logs.length - howManyBack - 2];

  return lastLog;
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
  getCommandOutput,
  getLastCommand,
};

module.exports = __helpers;
