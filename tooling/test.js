// IMPORTS
const fs = require("fs");
const util = require("util");
// This is used in the local scope of the `eval` in `runTests`
const assert = require("assert");

const { getLessonFromFile, getLessonHintsAndTests } = require("./parser.js");

const execute = util.promisify(require("child_process").exec);
const readFile = util.promisify(fs.readFile);
const { t, LOCALE } = require("./t");

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

    // const numTests = hintsAndTestsArr.length / 2;
    let numFailed = 0;
    hintsAndTestsArr.forEach(([hint, test]) => {
      try {
        // TODO: I do not know if the return is ever useful?
        const _result = eval(test);
      } catch (e) {
        numFailed++;
        console.log(hint);
        if (e.actual !== undefined && e.expected !== undefined) {
          // TODO: This is optional, and can be easily improved
          // console.log(`Expected ${e.expected}, got ${e.actual}`);
        }
        return;
      }
    });
    if (numFailed === 0) {
      console.log(t("lesson-correct", { lessonNumber }));
    }
  } catch (e) {
    console.log(t("tests-error"));
    console.error(e);
  }
}

module.exports = runTests;
