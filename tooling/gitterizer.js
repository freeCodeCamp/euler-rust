// This file handles the fetching/parsing of the Git status of the project
const fs = require("fs");
const util = require("util");
const execute = util.promisify(require("child_process").exec);

async function getCommitHashByNumber(number) {
  try {
    const { stdout, stderr } = await execute(
      `git log curriculum --oneline --grep="${number}"`
    );
    if (stderr) {
      throw new Error(stderr);
    }
    const hash = stdout.match(/\w+/)?.[0];
    return hash;
  } catch (e) {
    console.error(e);
  }
}

async function ensureNoUnfinishedGit() {
  try {
    const { stdout, stderr } = await execute(`git merge --abort`);
    if (stderr) {
      throw new Error(stderr);
    }
  } catch (e) {
    console.error(e);
  }
}

// TODO:
async function setFileSystemToLessonNumber(lessonNumber) {
  await ensureNoUnfinishedGit();
  const hash = await getCommitHashByNumber(lessonNumber);
  try {
    const { stdout, stderr } = await execute(`git merge --no-commit ${hash}`);
    if (stderr) {
      throw new Error(stderr);
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  getCommitHashByNumber,
  setFileSystemToLessonNumber,
};
