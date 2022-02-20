const fs = require("fs");
let wasm = {};
const wasmBuffer = fs.readFileSync("../curriculum/pkg/curriculum_bg.wasm");
WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
  // Exported function live under instance.exports
  module.exports = wasmModule.instance.exports;
});

function importAll() {
  Object.keys(this).forEach((id) => {
    console.log(id);
    if (id === "importAll") {
      return;
    }

    global[id] = this[id];
  });
}
