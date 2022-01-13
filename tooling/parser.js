// This file contains the parser for the markdown lessons
const fs = require("fs");
const util = require("util");
const execute = util.promisify(require("child_process").exec);

const DESCRIPTION_MARKER = "### --description--";
// const SEED_MARKER = "### --seed--"; // No seed with .git
const TEST_MARKER = "### --tests--";

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
    new RegExp(`${DESCRIPTION_MARKER}\n(.*)\n${TEST_MARKER}`, "s")
  )?.[1];
  return description;
}

/**
 * Sets `/curriculum` to match the lesson seed
 * @param {number} lessonNumber - The lesson number
 */
function setLessonToGitSeed(lessonNumber, done) {
  // Reset /curriculum folder to match the git history based on the lessonNumber
  // TODO(TOM): Get help reading/using Node to execute `git reset` command?
  // TODO: done error, if git reset fails
  // TODO: done success, if git reset succeeds
}

/**
 * Removes the Markdown from the seed
 * @param {string} seed - The seed content
 * @returns {string} The seed without the markdown
 */
function removeMarkdownFromSeed(seed) {
  const seedWithoutMarkdown = seed.replace(/\n```rust\n/g, "");
  return seedWithoutMarkdown.replace(/```/g, "");
}

/**
 * Gets the hints and tests of the lesson
 * @param {string} lesson - The lesson content
 * @returns {[string, string]} An array of [hint, test]
 */
function getLessonHintsAndTests(lesson) {
  const testsString = lesson.match(
    new RegExp(`${TEST_MARKER}\n(.*)`, "s")
  )?.[1];
  const hintsAndTestsArr = [];
  testsString
    .split(/```\n/)
    .slice(0, -1)
    .forEach((x) => {
      if (x.length < 1) {
        return;
      }
      const test = x.replace(/.*?```js/s, "").trim();
      const hint = x.replace(/\n```js.*/s, "").trim();
      hintsAndTestsArr.push([hint, test]);
    });
  return hintsAndTestsArr;
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

function createTempHTMLFile(html, done) {
  const htmlTop = fs.readFileSync("./assets/top.html", "utf8");
  const htmlBottom = fs.readFileSync("./assets/bottom.html", "utf8");
  fs.writeFile("temp.html", htmlTop + html + htmlBottom, done);
}

async function printTempHTMLFile() {
  console.log("Updated temp.html");
}

function log(markdown) {
  createTempHTMLFile(parseMarkdown(markdown), printTempHTMLFile);
}

function updateHTMLTests(markdown) {}

function updateHTMLDescription(markdown) {}

// ----------------
// EXPORT
// ----------------
module.exports = {
  getLessonFromFile,
  getLessonDescription,
  getLessonHintsAndTests,
  log,
  parseMarkdown,
  removeMarkdownFromSeed,
  setLessonToGitSeed,
};
