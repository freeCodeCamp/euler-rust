// This file parses answer files for lesson content
const {
  getLessonFromFile,
  getLessonDescription,
  getProjectTitle,
  isForceFlag,
} = require("./parser");
const { LOCALE } = require("./t");
const { updateDescription, updateProjectHeading } = require("./testerizer");
const { PATH, readEnv } = require("./env");
const { seedLesson } = require("./seed");

async function runLesson(project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE ?? "english";
  const answerFile = `${PATH}/tooling/locales/${locale}/${project}.md`;
  const lesson = getLessonFromFile(answerFile, lessonNumber);
  const description = getLessonDescription(lesson);

  const projectHeading = await getProjectTitle(answerFile);
  updateProjectHeading(projectHeading, lessonNumber);
  updateDescription(description);

  const { SEED_EVERY_LESSON } = readEnv();
  const seed = getLessonSeed(lesson);
  const isForce = isForceFlag(seed);
  // force flag overrides seed flag
  if (
    (SEED_EVERY_LESSON === "true" && !isForce) ||
    (SEED_EVERY_LESSON !== "true" && isForce)
  ) {
    await seedLesson(seed);
  }
}

module.exports = runLesson;
