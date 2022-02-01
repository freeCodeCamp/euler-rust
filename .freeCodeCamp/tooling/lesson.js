// This file parses answer files for lesson content
const { getLessonFromFile, getLessonDescription } = require("./parser");
const { LOCALE } = require("./t");
const { updateDescription, updateProjectHeading } = require("./testerizer");
const { PATH } = require("./env");

async function runLesson(project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE ?? "english";
  const answerFile = `${PATH}/tooling/locales/${locale}/${project}.md`;
  const lesson = getLessonFromFile(answerFile, lessonNumber);
  const description = getLessonDescription(lesson);

  const h1 = "Rust";
  const h2 = project;
  updateProjectHeading(h1, h2, lessonNumber);
  updateDescription(description);
}

module.exports = runLesson;
