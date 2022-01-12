// This file switches the alias of `fcc='node ./tooling/fcc.js <project>'`

const { updateEnv } = require("./env");
const { t } = require("./t");

// Set alias based on project argv
async function switchAlias(project) {
  try {
    updateEnv({ CURRENT_PROJECT: project });
    console.log(
      `${t("switch-success", { project })}\n\n${t(
        "access-lessons"
      )}\n\t$ fcc 1\n`
    );
  } catch (error) {
    console.log(`\n${t("switch-error")}\n`);
    console.log(
      `${t("switch-navigate", {
        location: ".env",
      })}\n\tCURRENT_PROJECT=<${t("valid-project")}>\n\n${t(
        "access-lessons"
      )}\n\t$ fcc 1\n`
    );
  }
}

module.exports = switchAlias;
