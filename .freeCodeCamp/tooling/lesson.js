// This file parses answer files for lesson content
const {
  getLessonDescription,
  getProjectTitle,
  getLessonSeed,
  isForceFlag,
  getLessonFromDirectory,
} = require("./parser");
const { LOCALE } = require("./t");
const { PATH, readEnv } = require("./env");
const { seedLesson } = require("./seed");
const { updateProjectHeading, updateDescription } = require("./client-socks");

async function runLesson(ws, project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE ?? "english";
  const projectDir = `${PATH}/tooling/locales/${locale}/${project}`;
  const lesson = getLessonFromDirectory(projectDir, lessonNumber);
  const description = getLessonDescription(lesson);

  const projectHeading = await getProjectTitle(lesson);
  updateProjectHeading(ws, projectHeading, lessonNumber);
  updateDescription(ws, description);

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
