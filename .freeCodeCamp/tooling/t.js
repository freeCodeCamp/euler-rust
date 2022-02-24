const { readEnv } = require('./env');

const LOCALE = readEnv('.meta').LOCALE;

function t(key, args = {}, forceLangToUse) {
  const loc = readEnv().LOCALE;
  // Get key from ./locales/{locale}/comments.json
  // Read file and parse JSON
  const locale = forceLangToUse ?? loc === 'undefined' ? 'english' : loc;
  const comments = require(`./locales/${locale}/comments.json`);

  // Get value from JSON
  const value = comments[key];
  // Replace placeholders in value with args
  const result =
    Object.values(args)?.length > 0
      ? value.replace(/\{\{(\w+)\}\}/g, (_, m) => args[m])
      : value;
  // Return value
  return result;
}

module.exports = { t, LOCALE };
