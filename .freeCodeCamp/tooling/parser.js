// This file contains the parser for the markdown lessons
const fs = require("fs");

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

// ----------------
// EXPORT
// ----------------
module.exports = {
  getLessonFromFile,
  getLessonDescription,
  getLessonHintsAndTests,
  parseMarkdown,
  removeMarkdownFromSeed,
};
