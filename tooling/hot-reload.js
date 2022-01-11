// This file handles the watching of the /curriculum folder for changes
// and executing the command to run the tests for the next (current) lesson
const fs = require("fs");
const { readAsEnv } = require("./t");
const { TEST_POLLING_RATE } = readAsEnv("../.env");
const curriculumFolder = "./curriculum";

console.log(`Watching for file changes on ${curriculumFolder}`);

let fsWait = false;
fs.watch(curriculumFolder, (event, name) => {
  if (name) {
    if (fsWait) return;
    fsWait = setTimeout(() => {
      fsWait = false;
    }, TEST_POLLING_RATE);
    console.log(`${name} Changed`);
  }
});
