// Export functions affeting `/temp.html` dom.
const marked = require("marked");
const fs = require("fs");
const { JSDOM } = require("jsdom");
// console.log(marked, Prism);

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

function updateDescription(markdown) {
  const document = new JSDOM(fs.readFileSync("temp.html", "utf8")).window
    .document;
  const descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync("temp.html", document.documentElement.outerHTML);
}

function updateTests(markdown) {
  const document = new JSDOM(fs.readFileSync("temp.html", "utf8")).window
    .document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = parseMarkdown(markdown);
  fs.writeFileSync("temp.html", document.documentElement.outerHTML);
}

function resetTests() {
  const document = new JSDOM(fs.readFileSync("temp.html", "utf8")).window
    .document;
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = "";
  fs.writeFileSync("temp.html", document.documentElement.outerHTML);
}

module.exports = { updateDescription, updateTests, resetTests };
