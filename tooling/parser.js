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
    new RegExp(`${DESCRIPTION_MARKER}\n(.*)\n${SEED_MARKER}`, "s")
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
 * Gets the tests of the lesson
 * @param {string} lesson - The lesson content
 * @returns {string} The tests of the lesson
 */
function getLessonTests(lesson) {
  const tests = lesson.match(new RegExp(`${TEST_MARKER}\n(.*)`, "s"))?.[1];
  return tests;
}

module.exports = {
  getLessonFromFile,
  getLessonDescription,
  setLessonToGitSeed,
  removeMarkdownFromSeed,
  getLessonTests,
};
