// This file handles the watching of the /curriculum folder for changes
// and executing the command to run the tests for the next (current) lesson
const { readEnv } = require("./env");
const runLesson = require("./lesson");
const runTests = require("./test");
const { resetTests } = require("./testerizer");
const chokidar = require("chokidar");
const { TEST_POLLING_RATE } = readEnv();
const curriculumFolder = process.env.ACTOR === "dev" ? "../curriculum" : "../";
const { RUN_TESTS_ON_WATCH } = readEnv();
console.log(`Watching for file changes on ${curriculumFolder}`);

reset();

let isWait = false;
let isClearConsole = false;

// TODO: refresh watcher on button pushing
chokidar
  .watch(curriculumFolder, { ignored: ".freecodecamp/.temp.log" })
  .on("all", (event, name) => {
    // TODO: event and name can be easily used for tests
    if (name) {
      if (isWait) return;
      isWait = setTimeout(() => {
        isWait = false;
      }, TEST_POLLING_RATE);

      const { CURRENT_PROJECT, CURRENT_LESSON } = readEnv();
      if (isClearConsole) {
        console.clear();
      }
      runLesson(CURRENT_PROJECT, Number(CURRENT_LESSON));
      console.log(`Watcher: ${event} - ${name}`);
      if (RUN_TESTS_ON_WATCH === "true") {
        runTests(CURRENT_PROJECT, Number(CURRENT_LESSON));
      }
    }
  });

function reset() {
  const { CURRENT_LESSON, CURRENT_PROJECT } = readEnv();
  runLesson(CURRENT_PROJECT, Number(CURRENT_LESSON));
  resetTests();
}
