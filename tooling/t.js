const fs = require("fs");

const LOCALE = readAsEnv(".meta").LOCALE;

function t(key, args = {}, forceLangToUse) {
  const loc = readAsEnv(".meta").LOCALE;
  // Get key from ./locales/{locale}/comments.json
  // Read file and parse JSON
  const locale = forceLangToUse ?? loc === "undefined" ? "en" : loc;
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

function readAsEnv(file) {
  let meta = {
    CURRENT_PROJECT: "calculator",
    LOCALE: "english",
    TEST_POLLING_RATE: "1000",
  };
  try {
    const META = fs.readFileSync(file, "utf8");
    const metaArr = META.split("\n").filter(Boolean);
    const new_meta = metaArr.reduce((meta, line) => {
      const [key, value] = line.split("=");
      return { ...meta, [key]: value };
    }, "");
    meta = { ...meta, ...new_meta };
  } catch (err) {
    console.log(`${t("file-error", { file })}`);
    console.error(err);
  }
  return meta;
}

module.exports = { t, LOCALE, readAsEnv };
