// This file handles the fetching/parsing of the Git status of the project
const fs = require("fs");
const util = require("util");
const execute = util.promisify(require("child_process").exec);

async function getCommitHashByNumber(number) {
  try {
    const { stdout, stderr } = await execute(
      `git log --oneline --grep="${number}"`
    );
    const hash = stdout.match(/\w+/)?.[0];
    return hash;
  } catch (e) {
    console.error(e);
  }
}

async function setFileSystemToLessonNumber(lessonNumber) {
  const hash = await getCommitHashByNumber(lessonNumber);
  try {
    const { stdout, stderr } = await execute(`git checkout ${hash}`);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  getCommitHashByNumber,
  setFileSystemToLessonNumber,
};
