// IMPORTS
// These are used in the local scope of the `eval` in `runTests`
const assert = require("chai").assert;
const __helpers = require("./test-utils");

const { getLessonFromFile, getLessonHintsAndTests } = require("./parser.js");

const { t, LOCALE } = require("./t");
const { updateEnv, PATH } = require("./env.js");
const { updateTests, toggleLoaderAnimation } = require("./testerizer.js");
const runLesson = require("./lesson");
// const { setFileSystemToLessonNumber } = require("./gitterizer");

async function runTests(project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE;
  toggleLoaderAnimation();
  try {
    const answerFile = `${PATH}/tooling/locales/${locale}/${project}.md`;
    const lesson = getLessonFromFile(answerFile, lessonNumber);
    const hintsAndTestsArr = getLessonHintsAndTests(lesson);

    const testPromises = hintsAndTestsArr.map(async ([hint, test]) => {
      try {
        // console.log(hint, test);
        const _testOutput = await eval(`(async () => {${test}})();`);
        // console.log("TEST1: ", _testOutput);
      } catch (e) {
        // console.log("TEST2: ", e);
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
        // TODO: This works as expected, but breaks in Docker container, because of file structure being changed.
        // await setFileSystemToLessonNumber(lessonNumber);
      }
    } catch (e) {
      // console.log(e);
      updateTests(e);
    }
  } catch (e) {
    console.log(t("tests-error"));
    console.log(e);
  } finally {
    toggleLoaderAnimation();
  }
}

module.exports = runTests;
