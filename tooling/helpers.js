import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import { ROOT } from "@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/env.js";
import { join } from "path";

let wasm = {};

const PROJECT_DIR = join(ROOT, getCurrentProject());
const wasmDir = await readdir(join(PROJECT_DIR, "pkg"));

const wasmFilePath = wasmDir.find((p) => p.endsWith(".wasm"));
const wasmBuffer = readFileSync(join(PROJECT_DIR, "pkg", wasmFilePath));

const wasmModule = await WebAssembly.instantiate(wasmBuffer);
wasm = wasmModule.instance.exports;
Object.entries(wasm).forEach(([id, func]) => {
  global[id] = func;
});

function getCurrentProject() {
  const stateFile = readFileSync(join(ROOT, "config/state.json"), "utf-8");
  const state = JSON.parse(stateFile);
  return state.currentProject;
}
