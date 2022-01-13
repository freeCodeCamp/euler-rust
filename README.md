# freeCodeCamp - External Project Template

Shaun is having fun testing a minimal way to run courses locally.

## Shaun's TODO:

- [x] Init repo with a whole bunch of boilerplate
- [x] Refactor files to follow a more specific pattern for structure and pattern
- [x] Change parser to accept tests in the form of Node/JS codeblocks
- [ ] Change parser to read seed from Git?
- [x] Add ability to automatically run tests on file save/change
- [ ] Style terminal to look interactive
- [ ] Add Markdown to terminal
- [ ] Add button to terminal to run/reset?
- [x] Seed should come from Git with matching lesson name/number
- [ ] Add Chai.js for tests
- [ ] Add Prism for syntax highlighting
- [ ] Add helpers for testing files/folders
- [ ] Add logs for terminal input/output

## Guide

1. Clone the repo with the course name you want:

```bash
# Once the repo is transferred. For now, use Gitpod
git clone https://github.com/freeCodeCamp/external-project rust-in-replit
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

```bash
git checkout -b "curriculum"
# Example
mkdir curriculum/src
git add .
# Commit message must match lesson name/number
git commit -m "1"
```

7. _Oh, no! You have updated the lessons, and need to change the first lesson_ **Have no fear!**

```bash
# The latest commit matching the lesson number is used
mv curriculum/src curriculum/source
git add .
git commit -m "1"
# Much Wow! Super wooper!
```

## How To Run the Course

1. Clone the repo:

```bash
git clone https://github.com/freeCodeCamp/external-project
```

2. Navigate into the directory, and open VSCode:

```bash
cd external-project
code .
```

3. Press `Ctrl / Cmd + Shift + P` and enter `Remote-Containers: Rebuild Container and Reopen in Container`

4. Open `Simple Browser` (`Ctrl + Shift + P` and enter `Simple Browser: Show`)

5. Within `Simple Browser`, navigate to `http://127.0.0.1:8080`

6. Start `live-server`:

```bash
live-server --entry-file=temp.html
```

7. Start the actual course in a new terminal:

```bash
./fcc start
```
