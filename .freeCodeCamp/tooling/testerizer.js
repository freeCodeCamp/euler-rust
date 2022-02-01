// Export functions affecting `/temp.html` dom.
const marked = require("marked");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const { PATH } = require("./env");

const util = require("util");
const execute = util.promisify(require("child_process").exec);

const temp = `${PATH}/output/temp.html`;

marked.setOptions({
  highlight: (code, lang) => {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

function parseMarkdown(markdown) {
  return marked.parse(markdown, { gfm: true });
}
let isUpdating = false;
function handleUpdate() {
  // Should only be needed for Gitpod
  if (!isUpdating && process.env.GITPOD_WORKSPACE_ID) {
    isUpdating = true;
    (async () => {
      await execute("gp preview http://127.0.0.1:8080");
      isUpdating = false;
    })();
  }
}

function updateProjectHeading(h1, h2, lessonNumber) {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const projectHeadingElement = document.querySelector("#project-heading");
  projectHeadingElement.innerHTML = `${h1} - ${h2} - Lesson ${lessonNumber}`;
  fs.writeFileSync(temp, document.documentElement.outerHTML);
  handleUpdate();
}

function updateDescription(markdown) {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync(temp, document.documentElement.outerHTML);
  handleUpdate();
}

function updateTests(markdown) {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync(temp, document.documentElement.outerHTML);
  handleUpdate();
}

function resetTests() {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = "";
  fs.writeFileSync(temp, document.documentElement.outerHTML);
  handleUpdate();
}

function toggleLoaderAnimation() {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const loaderElement = document.querySelector("#loader");
  loaderElement.classList.toggle("hidden");
  fs.writeFileSync(temp, document.documentElement.outerHTML);
  handleUpdate();
}

module.exports = {
  updateDescription,
  updateTests,
  resetTests,
  toggleLoaderAnimation,
  updateProjectHeading,
};
