// Export functions affecting `/index.html` dom.
const marked = require("marked");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const { PATH } = require("./env");

const util = require("util");
const execute = util.promisify(require("child_process").exec);

const indexHTML = `${PATH}/output/index.html`;

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

let latestLessonNumber = 0;
function updateProjectHeading(projectHeading, lessonNumber) {
  if (lessonNumber !== latestLessonNumber) {
    const document = new JSDOM(fs.readFileSync(indexHTML, "utf8")).window
      .document;
    const projectHeadingElement = document.querySelector("#project-heading");
    projectHeadingElement.innerHTML = `${projectHeading} - Lesson <span id="lesson-number">${lessonNumber}</span>`;
    projectHeadingElement.querySelector("span").classList.toggle("sparkle");
    fs.writeFileSync(indexHTML, document.documentElement.outerHTML);
    handleUpdate();
    latestLessonNumber = lessonNumber;
  }
}

function updateDescription(markdown) {
  const document = new JSDOM(fs.readFileSync(indexHTML, "utf8")).window
    .document;
  const descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync(indexHTML, document.documentElement.outerHTML);
  handleUpdate();
}

function updateTests(markdown) {
  const document = new JSDOM(fs.readFileSync(indexHTML, "utf8")).window
    .document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync(indexHTML, document.documentElement.outerHTML);
  handleUpdate();
}

function resetTests() {
  const document = new JSDOM(fs.readFileSync(indexHTML, "utf8")).window
    .document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = "";
  fs.writeFileSync(indexHTML, document.documentElement.outerHTML);
  handleUpdate();
}

function toggleLoaderAnimation() {
  const document = new JSDOM(fs.readFileSync(indexHTML, "utf8")).window
    .document;
  const loaderElement = document.querySelector("#loader");
  loaderElement.classList.toggle("hidden");
  fs.writeFileSync(indexHTML, document.documentElement.outerHTML);
  handleUpdate();
}

module.exports = {
  updateDescription,
  updateTests,
  resetTests,
  toggleLoaderAnimation,
  updateProjectHeading,
};
