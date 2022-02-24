const fs = require('fs');

const PATH = '.';

function readEnv() {
  let meta = {
    CURRENT_PROJECT: 'project-euler',
    LOCALE: 'english',
    TEST_POLLING_RATE: '1000',
    LAST_KNOWN_LESSON_WITH_HASH: '1',
    RUN_TESTS_ON_WATCH: 'false',
    CURRENT_LESSON: '1'
  };
  try {
    const META = fs.readFileSync(`${PATH}/.env`, 'utf8');
    const metaArr = META.split('\n').filter(Boolean);
    const new_meta = metaArr.reduce((meta, line) => {
      const [key, value] = line.split('=');
      return { ...meta, [key]: value };
    }, '');
    meta = { ...meta, ...new_meta };
  } catch (err) {
    console.error(err);
  }
  return meta;
}

function updateEnv(obj) {
  // TODO: Maybe not completely overwrite the file?
  const env = { ...readEnv(), ...obj };
  fs.writeFileSync(
    `${PATH}/.env`,
    Object.entries(env).reduce((acc, [key, value]) => {
      return `${acc}\n${key}=${value}`;
    }, '')
  );
}

module.exports = { readEnv, updateEnv, PATH };
