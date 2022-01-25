// This file parses answer files for lesson content
const { getLessonFromFile, getLessonDescription } = require("./parser");
const { LOCALE } = require("./t");
const { updateDescription } = require("./testerizer");

async function runLesson(project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE ?? "english";
  const answerFile = `./tooling/locales/${locale}/${project}.md`;
  const lesson = getLessonFromFile(answerFile, lessonNumber);
  const description = getLessonDescription(lesson);

  updateDescription(description);
}

module.exports = runLesson;
