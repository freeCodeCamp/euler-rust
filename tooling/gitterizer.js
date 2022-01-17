// This file handles the fetching/parsing of the Git status of the project
const fs = require("fs");
const util = require("util");
const execute = util.promisify(require("child_process").exec);

function getCommitHashByNumber(number) {
  try {
    const { stdout, stderr } = execute(`git log --oneline --grep="${number}"`);
    const hash = stdout.match(/\w+/)?.[0];
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  getCommitHashByNumber,
};
