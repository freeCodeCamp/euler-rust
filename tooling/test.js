// IMPORTS
const fs = require("fs");
const util = require("util");
// This is used in the local scope of the `eval` in `runTests`
const assert = require("chai").assert;
const __helpers = require("./test-utils");

const {
  getLessonFromFile,
  getLessonHintsAndTests,
  // log,
} = require("./parser.js");

const execute = util.promisify(require("child_process").exec);
const readFile = util.promisify(fs.readFile);
const { t, LOCALE } = require("./t");
const { updateEnv } = require("./env.js");
const { updateTests } = require("./testerizer.js");
const runLesson = require("./lesson");
const { setFileSystemToLessonNumber } = require("./gitterizer");

// HELPER FUNCTIONS
const getCommandOutput = async function (command) {
  let output = "";
  try {
    const { stdout } = await execute(command, {
      cwd: ".",
      shell: "/bin/bash",
    });
    output = stdout;
  } catch (err) {
    console.log(output);
  }
  return output;
};

const getFileContents = async (file) => {
  const fileContents = await readFile(file);
  return fileContents.toString();
};

async function runTests(project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE;
  try {
    const answerFile = `./tooling/locales/${locale}/${project}.md`;
    const lesson = getLessonFromFile(answerFile, lessonNumber);
    const hintsAndTestsArr = getLessonHintsAndTests(lesson);

    const testPromises = hintsAndTestsArr.map(async ([hint, test]) => {
      try {
        const _testOutput = await eval(`(async () => {${test}})();`);
      } catch (e) {
        // console.log(
        //   `${t("testFailed")} ${testName}: ${test} ${t("testOutput")}`
        // );
        return Promise.reject(`- ${hint}\n`);
      }
      return Promise.resolve();
    });

    try {
      const passed = await Promise.all(testPromises);
      if (passed) {
        console.log(t("lesson-correct", { lessonNumber }));
        updateEnv({ CURRENT_LESSON: lessonNumber + 1 });
        runLesson(project, lessonNumber + 1);
        updateTests("");
        // Current lesson number is used because commit contains expected answer for lesson
        await setFileSystemToLessonNumber(lessonNumber);
      }
    } catch (e) {
      console.log(e);
      updateTests(e);
    }
  } catch (e) {
    console.log(t("tests-error"));
    console.log(e);
  }
}

module.exports = runTests;
