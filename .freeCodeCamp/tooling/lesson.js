// This file parses answer files for lesson content
const {
  getLessonDescription,
  getProjectTitle,
  getLessonFromDirectory
} = require('./parser');
const { LOCALE } = require('./t');
const { PATH } = require('./env');
const { updateProjectHeading, updateDescription } = require('./client-socks');

async function runLesson(ws, project, lessonNumber) {
  const locale = LOCALE === 'undefined' ? 'english' : LOCALE ?? 'english';
  const projectDir = `${PATH}/tooling/locales/${locale}/${project}`;
  const lesson = getLessonFromDirectory(projectDir, lessonNumber);
  const description = getLessonDescription(lesson);

  const projectHeading = await getProjectTitle(lesson);
  updateProjectHeading(ws, projectHeading, lessonNumber);
  updateDescription(ws, description);
}

module.exports = runLesson;
