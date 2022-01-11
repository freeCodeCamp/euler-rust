# freeCodeCamp - External Project Template

Shaun is having fun testing a minimal way to run courses locally.

## Shaun's TODO:

- [x] Init repo with a whole bunch of boilerplate
- [x] Refactor files to follow a more specific pattern for structure and pattern
- [ ] Change parser to accept tests in the form of Node/JS codeblocks
- [ ] Change parser to read seed from Git?
- [ ] Add ability to automatically run tests on file save/change
- [ ] Style terminal to look interactive
- [ ] Add Markdown to terminal
- [ ] Add button to terminal to run/reset?
- [ ] Seed should come from Git with matching lesson name/number
- [ ] Add Chai.js for tests
- [ ] Add Prism for syntax highlighting
- [ ] Add helpers for testing files/folders

## Guide

1. Clone the repo with the course name you want:

```bash
# Once the repo is transferred. For now, use Gitpod
git clone https://github.com/freeCodeCamp/external-courses rust-in-replit
```

2. Navigate into the directory, and open VSCode:

```bash
cd rust-in-replit
code .
```

3. Press `Ctrl / Cmd + Shift + P` and enter `Remote-Containers: Rebuild Container and Reopen in Container`
4. A new VSCode window will open and begin building the Docker image. It will take several minutes to build the first time.
5. Add content to `tooling/locales/english` folder following the example structure provided
6. For the _seed_ content, commit the _seed_ within the `curriculum` folder as you want the Camper to see it
