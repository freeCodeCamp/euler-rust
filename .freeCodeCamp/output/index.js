function runTests() {
  makeRequest("/run-tests");
}
function resetProject() {
  makeRequest("/reset-project");
}
function goToNextLesson() {
  makeRequest("/go-to-next-lesson");
}
function goToPreviousLesson() {
  makeRequest("/go-to-previous-lesson");
}
function makeRequest(endpoint) {
  (async () => {
    try {
      const data = await fetch(endpoint);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  })();
}
