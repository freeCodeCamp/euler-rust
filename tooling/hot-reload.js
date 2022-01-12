// This file handles the watching of the /curriculum folder for changes
// and executing the command to run the tests for the next (current) lesson
const fs = require("fs");
const { readEnv } = require("./env");
const runTests = require("./test");
const { TEST_POLLING_RATE } = readEnv("../.env");
const curriculumFolder = "./curriculum";

console.log(`Watching for file changes on ${curriculumFolder}`);

let isWait = false;
let isClearConsole = true;
fs.watch(curriculumFolder, (event, name) => {
  // TODO: event and name can be easily used for tests
  if (name) {
    if (isWait) return;
    isWait = setTimeout(() => {
      isWait = false;
    }, TEST_POLLING_RATE);
    if (isClearConsole) {
      console.clear();
    }
    // console.log(`${name} Changed`);
    const { CURRENT_PROJECT, CURRENT_LESSON } = readEnv("../.env");
    runTests(CURRENT_PROJECT, Number(CURRENT_LESSON));
  }
});
