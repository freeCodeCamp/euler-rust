// This file contains the parser for the markdown lessons
const fs = require("fs");

const DESCRIPTION_MARKER = "### --description--";
const TEST_MARKER = "### --tests--";
const SEED_MARKER = "### --seed--";
const NEXT_MARKER = "### --";
const CMD_HIDDEN_MARKER = "#### --cmd-hidden--";
const CMD_MARKER = "#### --cmd--";
const FILE_MARKER_REG = '#### --"([^"]+)"--';

/**
 * Gets all content within a lesson
 * @param {string} file - The relative path to the english locale file
 * @param {number} lessonNumber - The number of the lesson
 * @returns {string} The content of the lesson
 */
function getLessonFromFile(file, lessonNumber) {
  const fileContent = fs.readFileSync(file, "utf8");
  const lesson = fileContent.match(
    new RegExp(`## ${lessonNumber}\n(.*?)\n## ${lessonNumber + 1}`, "s")
  )?.[1];
  return lesson;
}

/**
 * Gets the description of the lesson
 * @param {string} lesson - The lesson content
 * @returns {string} The description of the lesson
 */
function getLessonDescription(lesson) {
  const description = lesson.match(
    new RegExp(`${DESCRIPTION_MARKER}\n(.*?)\n(?=${NEXT_MARKER})`, "s")
  )?.[1];
  return description;
}

/**
 * Gets the hints and tests of the lesson
 * @param {string} lesson - The lesson content
 * @returns {[string, string]} An array of [hint, test]
 */
function getLessonHintsAndTests(lesson) {
  // Ensure there is a NEXT_MARKER to match, in the case where there is no seed
  const testsString = `${lesson}\n${NEXT_MARKER}`.match(
    new RegExp(`${TEST_MARKER}\n(.*?)${NEXT_MARKER}`, "s")
  )?.[1];
  const hintsAndTestsArr = [];
  console.log(testsString);
  const hints = testsString?.match(/^(.*?)$\n+```js/gm);
  const tests = testsString
    .replace(/^([^(```)\n]+)$\n+```js/gm, "")
    .split(/```js\n(.*?)\n```/s);
  if (hints?.length) {
    for (let i = 0; i < hints.length; i++) {
      hintsAndTestsArr.push([hints[i], tests[i]]);
    }
  }
  return hintsAndTestsArr;
}

/**
 * Gets the seed of the lesson. If none is found, returns `null`.
 * @param {string} lesson - The lesson content
 * @returns {string|null} The seed of the lesson
 */
function getLessonSeed(lesson) {
  const seed = lesson.match(new RegExp(`${SEED_MARKER}\n(.*)`, "s"))?.[1];
  return seed ?? null;
}

/**
 * Gets any commands of the lesson seed. If none is found, returns an empty array.
 * @param {string} seed - The seed content
 * @returns {string[]} The commands of the lesson in order
 */
function getCommands(seed) {
  const cmds = seed.match(new RegExp(`${CMD_MARKER}\n(.*?\`\`\`\n)`, "gs"));
  const commands = cmds?.map((cmd) => extractStringFromCode(cmd)?.trim());
  return commands ?? [];
}

/**
 * Gets any hidden commands of the lesson seed. If none is found, returns an empty array.
 * @param {string} seed - The seed content
 * @returns {string[]} The hidden commands of the lesson in order
 */
function getHiddenCommands(seed) {
  const cmds = seed.match(
    new RegExp(`${CMD_HIDDEN_MARKER}\n(.*?\`\`\`\n)`, "gs")
  );
  const commands = cmds?.map((cmd) => extractStringFromCode(cmd)?.trim());
  return commands ?? [];
}

/**
 * Gets any seed for specified files of the lesson seed. If none is found, returns an empty array.
 * @param {string} seed - The seed content
 * @returns {[string, string][]} [[filePath, fileSeed]]
 */
function getFilesWithSeed(seed) {
  const files = seed.match(new RegExp(`${FILE_MARKER_REG}\n`, "s"));
  // console.log("getFilesWithSeed: ", files);
  return files ?? [];
}

/**
 * Returns a string stripped from the input codeblock
 * @param {string} code - The codeblock to strip
 * @returns {string} The stripped codeblock
 */
function extractStringFromCode(code) {
  return code.replace(/.*?```[a-z]+\n([^(\n```)]+)\n```.*?/s, "$1");
}

// ----------------
// MARKED PARSING
// ----------------
const marked = require("marked");
const prism = require("prismjs");

require("prismjs/components/prism-markup-templating");
require("prismjs/components/prism-css");
// require("prismjs/components/prism-html");
require("prismjs/components/prism-json");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-yaml");
require("prismjs/components/prism-toml");
require("prismjs/components/prism-rust");

marked.setOptions({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

function parseMarkdown(markdown) {
  return marked.parse(markdown, { gfm: true });
}

// ----------------
// EXPORT
// ----------------
module.exports = {
  getLessonFromFile,
  getLessonDescription,
  getLessonHintsAndTests,
  parseMarkdown,
  getLessonSeed,
  getCommands,
  getHiddenCommands,
  getFilesWithSeed,
};
