// IMPORTS
const fs = require("fs");
// These are used in the local scope of the `eval` in `runTests`
const assert = require("chai").assert;
const __helpers = require("./test-utils");

let wasm = {};
const wasmBuffer = fs.readFileSync("../curriculum/pkg/curriculum_bg.wasm");
WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
  // Exported function live under instance.exports
  wasm = wasmModule.instance.exports;
  Object.entries(wasm).forEach(([id, func]) => {
    global[id] = func;
  });
});

const {
  getLessonHintsAndTests,
  getLessonFromDirectory,
} = require("./parser.js");

const { t, LOCALE } = require("./t");
const { updateEnv, PATH } = require("./env.js");
const { updateTests, toggleLoaderAnimation } = require("./testerizer.js");
const runLesson = require("./lesson");
// const { setFileSystemToLessonNumber } = require("./gitterizer");

async function runTests(project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE;
  toggleLoaderAnimation();
  try {
    const projectDir = `${PATH}/tooling/locales/${locale}/${project}`;
    const lesson = getLessonFromDirectory(projectDir, lessonNumber);
    const hintsAndTestsArr = getLessonHintsAndTests(lesson);

    const testPromises = hintsAndTestsArr.map(async ([hint, test]) => {
      try {
        const _testOutput = await eval(`(async () => {${test}})();`);
      } catch (e) {
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
