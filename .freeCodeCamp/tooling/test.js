/* eslint-disable no-unused-vars */
// IMPORTS
const fs = require('fs');
// These are used in the local scope of the `eval` in `runTests`
const assert = require('chai').assert;
const __helpers = require('./test-utils');

let wasm = {};

const {
  getLessonHintsAndTests,
  getLessonFromDirectory
} = require('./parser.js');

const { t, LOCALE } = require('./t');
const { updateEnv, PATH } = require('./env.js');
const runLesson = require('./lesson');
const { toggleLoaderAnimation, updateTests } = require('./client-socks');

async function runTests(ws, project, lessonNumber) {
  const wasmBuffer = fs.readFileSync('../pkg/curriculum_bg.wasm');
  WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
    // Exported function live under instance.exports
    wasm = wasmModule.instance.exports;
    Object.entries(wasm).forEach(([id, func]) => {
      global[id] = func;
    });
  });
  const locale = LOCALE === 'undefined' ? 'english' : LOCALE;
  toggleLoaderAnimation(ws);
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
        console.log(t('lesson-correct', { lessonNumber }));
        updateEnv({ CURRENT_LESSON: lessonNumber + 1 });
        runLesson(ws, project, lessonNumber + 1);
        updateTests(ws, '');
      }
    } catch (e) {
      // console.log(e);
      updateTests(ws, e);
    }
  } catch (e) {
    console.log(t('tests-error'));
    console.log(e);
  } finally {
    toggleLoaderAnimation(ws);
  }
}

module.exports = runTests;
