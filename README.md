# freeCodeCamp - External Project Template

Shaun is having fun testing a minimal way to run courses locally.

## Shaun's TODO:

- [x] Init repo with a whole bunch of boilerplate
- [x] Refactor files to follow a more specific pattern for structure and pattern
- [x] Change parser to accept tests in the form of Node/JS codeblocks
- [ ] Change parser to read seed from Git?
- [x] Add ability to automatically run tests on file save/change
- [x] ~Style terminal to look interactive~ Use `Simple Browser`
- [x] ~Add Markdown to terminal~ Use `Simple Browser`
- [x] Add button to ~terminal~ to run/reset?
- [x] Seed should come from Git with matching lesson name/number
- [ ] Add Chai.js for tests
- [x] Add Prism for syntax highlighting
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

3. Install tooling:

```bash
npm ci
```

4. Copy `sample.env` to a new `.env` file:

```bash
cp sample.env .env
```

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
cp sample.env .env
```

3. Press `Ctrl / Cmd + Shift + P` and enter `Remote-Containers: Rebuild Container and Reopen in Container`

4. Press `Ctrl + Shift + P` and type `Tasks: Run Task`

5. Select `Start`

## Ideal Dev Setup

1. Clone Template Repo:

```bash
git clone https://github.com/ShaunSHamilton/external-project
```

2. Navigate into directory:

```bash
cd external-project
```

3. Open VSCode:

```bash
code .
```

4. Press `Ctrl / Cmd + Shift + P` and enter `Remote-Containers: Rebuild Container and Reopen in Container`.

This should do the following:

- [ ] Install necessary tooling for container
- [ ] Install necessary libraries for project
- [ ] Copy `sample.env` to `.env`

5. `Ctrl + Shift + P` and type `Start`

This should do the following:

- [ ] Run `hot-reload.js` script
- [ ] Run `live-server` for browser view
- [ ] Open `Simple Browser` at `http://127.0.0.1:8080`

From here, you are able to navigate to `tooling/locales/english/project-1.md` and start developing the first lesson.
