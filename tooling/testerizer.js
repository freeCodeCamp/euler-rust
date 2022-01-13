// Export functions affeting `/temp.html` dom.
// import marked from 'marked';

const marked = require("marked");
const prism = require("prismjs");

require("prismjs/components/prism-markup-templating");
require("prismjs/components/prism-css");
// require("prismjs/components/prism-html");
require("prismjs/components/prism-json");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-yaml");
require("prismjs/components/prism-toml");
require("prismjs/components/prism-rust");

marked.setOptions({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

function parseMarkdown(markdown) {
  return marked.parse(markdown, { gfm: true });
}

function updateDescription(markdown) {
  const descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = parseMarkdown(markdown);
}

function updateTests(markdown) {
  const testsElement = document.querySelector("#tests");
  testsElement.innerHTML = parseMarkdown(markdown);
}

module.exports = { updateDescription, updateTests };
