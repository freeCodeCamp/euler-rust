// IMPORTS
// These are used in the local scope of the `eval` in `runTests`
const assert = require("chai").assert;
const __helpers = require("./test-utils");

const { getLessonFromFile, getLessonHintsAndTests } = require("./parser.js");

const { t, LOCALE } = require("./t");
const { updateEnv } = require("./env.js");
const { updateTests } = require("./testerizer.js");
const runLesson = require("./lesson");
const { setFileSystemToLessonNumber } = require("./gitterizer");

async function runTests(project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE;
  try {
    const answerFile = `./tooling/locales/${locale}/${project}.md`;
    const lesson = getLessonFromFile(answerFile, lessonNumber);
    const hintsAndTestsArr = getLessonHintsAndTests(lesson);

    const testPromises = hintsAndTestsArr.map(async ([hint, test]) => {
      try {
        const _testOutput = await eval(`(async () => {${test}})();`);
        console.log("TEST: ", _testOutput);
      } catch (e) {
        console.log("TEST: ", e);
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
