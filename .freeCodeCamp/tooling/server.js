// This might not be necessary for every course, but is needed for the preview window to interact with the test environment
const root = require("child_process").execSync("npm root -g").toString().trim();
const liveServer = require(`${root}/live-server`);
const runTests = require("./test");
const { readEnv, updateEnv } = require("./env");

const options = {
  port: 8080,
  // root: "/workspace/external-project/.freeCodeCamp/output",
  file: "output/index.html",
  mount: [["/", "output"]],
  open: false,
  middleware: [testM],
};

liveServer.start(options);

function testM(req, res, next) {
  console.log(req.url, req.method);
  routes[req.method]?.[req.url]?.(req, res, next);
  next();
}

const routes = {
  GET: {
    "/run-tests": handleRunTests,
    "/reset-project": handleResetProject,
    "/go-to-next-lesson": handleGoToNextLesson,
    "/go-to-previous-lesson": handleGoToPreviousLesson,
  },
  POST: {},
};

function handleRunTests(req, res, next) {
  const { CURRENT_PROJECT, CURRENT_LESSON } = readEnv();
  runTests(CURRENT_PROJECT, Number(CURRENT_LESSON));
}

function handleResetProject(req, res, next) {}

function handleGoToNextLesson(req, res, next) {
  const { CURRENT_LESSON } = readEnv();
  const nextLesson = Number(CURRENT_LESSON) + 1;
  updateEnv({ CURRENT_LESSON: nextLesson });
}

function handleGoToPreviousLesson(req, res, next) {
  const { CURRENT_LESSON } = readEnv();
  const prevLesson = Number(CURRENT_LESSON) - 1;
  updateEnv({ CURRENT_LESSON: prevLesson });
}
