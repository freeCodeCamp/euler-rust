# freeCodeCamp - External Project Template

Shaun is having fun testing a minimal way to run courses locally.

## Shaun's TODO:

- [x] Init repo with a whole bunch of boilerplate
- [x] Refactor files to follow a more specific pattern for structure and pattern
- [x] Change parser to accept tests in the form of Node/JS codeblocks
- [x] Change parser to read seed from Git?
  - [x] Probably need to load commit `4` + all previous commits
- [x] Add ability to automatically run tests on file save/change
- [x] ~Style terminal to look interactive~ Use `Simple Browser`
- [x] ~Add Markdown to terminal~ Use `Simple Browser`
- [x] Add button to ~terminal~ to run/reset?
- [x] Seed should come from Git with matching lesson name/number
- [x] Add Chai.js for tests
- [x] Add Prism for syntax highlighting
- [x] Add helpers for testing files/folders
- [ ] Add logs for terminal input/output
- [x] Re-enable more use of Dockerfile
- [ ] Integrate with `freeCodeCamp Courses` extension
- Spruce up `temp.html`:
  - [x] Use logic for toggling loader animation
  - [x] Separate CSS from HTML file
- [ ] Refactor tooling/file names and structure to something that makes sense
- [x] Remove unused/old logic from tooling
- [ ] Add workflow for translations to Crowdin
- [x] Refactor Markdown to use new seed syntax
- [ ] Fix `package.json` issue with script `$PWD` in `.bashrc`
- [x] Hack to refresh
- [x] Add lesson number to html
- [ ] `Go to Next Lesson` button?

## How To Run the Course

### In Gitpod!

1. Ensure you have the Gitpod extension. _Otherwise [click here](https://gitpod.io/#https://github.com/ShaunSHamilton/external-project)_
2. Once Gitpod opens, ensure it is done doing its stuffs
3. Open Command Palette, run `freeCodeCamp: Develop Course`

**Notes**

- When doing the course, ensure you are in the `curriculum/` directory
- The preview window does not automatically refresh :sad: - do this manually

### Locally

1. Create an empty directory:

```bash
mkdir course
cd course
```

2. Download/Install `freeCodeCamp Courses` extension in VSCode.

```bash
wget https://github.com/ShaunSHamilton/courses-plus/raw/main/freecodecamp-courses-patch.vsix
code --install-extension freecodecamp-courses-patch.vsix
```

3. Open VSCode

```bash
code .
```

4. `Ctrl + Shift + P` and select `freeCodeCamp: Open Course`

5. Choose the course you want to run

6. `Ctrl + Shift + P` and select `Remote-Containers: Rebuild and Reopen in Container`

7. `Ctrl + Shift + P` and select `freeCodeCamp: Run Course`

## Ideal Dev Setup

1. Create an empty directory:

```bash
mkdir course
cd course
```

2. Download/Install `freeCodeCamp Courses` extension in VSCode.

```bash
wget https://github.com/ShaunSHamilton/courses-plus/raw/main/freecodecamp-courses-patch.vsix
code --install-extension freecodecamp-courses-patch.vsix
```

3. Open VSCode

```bash
code .
```

4 `Ctrl + Shift + P` -> `freeCodeCam: Develop New Course`

5. Follow development steps in [Creating a Course](#creating-a-course)

## Creating a Course (_In Progress_)

### General Information

- You should not need to make any changes other than to the following files:
  - `.freeCodeCamp/tooling/locales/english/project-1.md`
  - `curriculum/`
  - Edit this `README.md` to include information about the course

### Adding the Course to the `freeCodeCamp Courses` Extension

1. Go to the [freeCodeCamp/freecodecamp-course repo](https://github.com/freeCodeCamp/freecodecamp-course)
2. Open a PR adding to the [resources/courses.json](https://github.com/freeCodeCamp/freecodecamp-course/blob/master/resources/courses.json) file.

## Making and Undoing Changes

1. Ensure you are on the `curriculum` branch:

```bash
git checkout curriculum
```

2. Navigate into the `curriculum` directory:

```bash
cd curriculum
```

3. Make changes as the project requires:

```bash
# Example Instruction: Create a `src` directory
mkdir source
# Use `.gitkeep` to save file to Git
touch source/.gitkeep
```

4. Commit changes with message equalling the lesson number:

```bash
# Example
git add .
git commit -m "1"
```

5. Make another change as required:

```bash
# Example Instruction: Create a `source/index.js` file
touch source/index.js
```

6. Commit changes with message equalling the lesson number:

```bash
# Example
git add .
git commit -m "2"
```

7. Actually, you wanted the folder to be named `src` instead of `source`:

```bash
# Example: Find commit hash before lesson 1
$ git log --oneline
c2316bb (HEAD -> curriculum) 2
9feab3e 1
a1b92d7 (origin/main, origin/HEAD, main) chore: add .gitpod.yml because Shaun likes to

$ git rebase -i a1b92d7

# Change `pick` to `edit`
hint: Waiting for your editor to close the file...

edit 9feab3e 1
pick c2316bb 2

# Save file
Stopped at 9feab3e...  1
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue

# Make Changes: Rename folder
gitpod /workspace/external-project/curriculum $ mv source src
gitpod /workspace/external-project/curriculum $ git add .
gitpod /workspace/external-project/curriculum $ git commit -m "1"
[detached HEAD 0e8de1b] 1
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename curriculum/{source => src}/.gitkeep (100%)
gitpod /workspace/external-project/curriculum $ git rebase --continue
Successfully rebased and updated refs/heads/curriculum.

gitpod /workspace/external-project/curriculum $ git log --oneline
3287942 (HEAD -> curriculum) 2
1fc0ffb 1
a1b92d7 (origin/main, origin/HEAD, main) chore: add .gitpod.yml because Shaun likes to
```

## Appendix

```bash
gitpod /workspace/external-project $ git checkout -b "curriculum"
Switched to a new branch 'curriculum'
gitpod /workspace/external-project $ cd curriculum
gitpod /workspace/external-project/curriculum $ mkdir source
gitpod /workspace/external-project/curriculum $ touch source/.gitkeep
gitpod /workspace/external-project/curriculum $ git add .
gitpod /workspace/external-project/curriculum $ git commit -m "1"
[curriculum 9feab3e] 1
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 curriculum/source/.gitkeep
gitpod /workspace/external-project/curriculum $ touch source/index.js
gitpod /workspace/external-project/curriculum $ git add .
gitpod /workspace/external-project/curriculum $ git commit -m "2"
[curriculum c2316bb] 2
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 curriculum/source/index.js
gitpod /workspace/external-project/curriculum $ git log --oneline

c2316bb (HEAD -> curriculum) 2
9feab3e 1
a1b92d7 (origin/main, origin/HEAD, main) chore: add .gitpod.yml because Shaun likes to

gitpod /workspace/external-project/curriculum $ git rebase -i a1b92d7
hint: Waiting for your editor to close the file...

edit 9feab3e 1
pick c2316bb 2

gitpod /workspace/external-project/curriculum $ git rebase -i a1b92d7
Stopped at 9feab3e...  1
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue

gitpod /workspace/external-project/curriculum $ mv source src
gitpod /workspace/external-project/curriculum $ git commit --amend -m "1"
[detached HEAD 1fc0ffb] 1
 Date: Mon Jan 17 14:13:46 2022 +0000
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 curriculum/source/.gitkeep

gitpod /workspace/external-project/curriculum $ git rebase --continue
You must edit all merge conflicts and then
mark them as resolved using git add
gitpod /workspace/external-project/curriculum $ git add .
gitpod /workspace/external-project/curriculum $ git commit -m "1"
[detached HEAD 0e8de1b] 1
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename curriculum/{source => src}/.gitkeep (100%)
gitpod /workspace/external-project/curriculum $ git rebase --continue
Successfully rebased and updated refs/heads/curriculum.

gitpod /workspace/external-project/curriculum $ git log --oneline
3287942 (HEAD -> curriculum) 2
0e8de1b 1
1fc0ffb 1
a1b92d7 (origin/main, origin/HEAD, main) chore: add .gitpod.yml because Shaun likes to
```

## Markdown Syntax

### Headers

- `## <number>` - Lesson number heading _(required)_
- `### --description--` - Lesson description _(required)_
- `### --tests--` - Tests for lesson _(required)_
- `### --seed--` - Seed for lesson _(optional)_
- `#### --cmd--` - Command for lesson seed (Camper will see) _(optional)_
- `#### --cmd-hidden--` - Command for lesson seed (Hidden from Camper) _(optional)_
- `#### --"<string>"--` - File name and seed heading _(optional)_

### Example

````markdown
## 1

### --description--

Teach Campers amazing things here...

### --tests--

At least one line as a hint in the tests

```js
assert("Chai.js tests with async code");
```

### --seed--

#### --cmd--

```bash
cd somewhere
```

#### --cmd-hidden--

```bash
echo Campers should not see this
```

#### --"somewhere/index.rs"--

```rust
let seed_for_file = "I am what the 'somewhere/index.rs' file should start with'";
```

#### --cmd--

```bash
echo "All seed is run in order"
```

## 2
````

### Notables

-
