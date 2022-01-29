// Export functions affecting `/temp.html` dom.
const marked = require("marked");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const { PATH } = require("./env");

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

function updateProjectHeading(h1, h2, lessonNumber) {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const projectHeadingElement = document.querySelector("#project-heading");
  projectHeadingElement.innerHTML = `${h1} - ${h2} - Lesson ${lessonNumber}`;
  fs.writeFileSync(temp, document.documentElement.outerHTML);
}

function updateDescription(markdown) {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync(temp, document.documentElement.outerHTML);
}

function updateTests(markdown) {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync(temp, document.documentElement.outerHTML);
}

function resetTests() {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = "";
  fs.writeFileSync(temp, document.documentElement.outerHTML);
}

function toggleLoaderAnimation() {
  const document = new JSDOM(fs.readFileSync(temp, "utf8")).window.document;
  const loaderElement = document.querySelector("#loader");
  loaderElement.classList.toggle("hidden");
  fs.writeFileSync(temp, document.documentElement.outerHTML);
}

module.exports = {
  updateDescription,
  updateTests,
  resetTests,
  toggleLoaderAnimation,
  updateProjectHeading,
};
