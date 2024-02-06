//! Transforms the multi-file lessons in `curriculum/project-euler/` to a single file with the correct format for freecodecamp-os in `curriculum/locales/english/project-euler.md`.
import { readFile, readdir, writeFile } from "fs/promises";
import { join } from "path";

const INPUT_DIRECTORY = "./curriculum/project-euler/";
const OUTPUT_DIRECTORY = "./curriculum/locales/english/";

async function main() {
  await addMeta();
  await addLessons();
}

async function addMeta() {
  const blocks = await readdir(INPUT_DIRECTORY);
  for (const block of blocks) {
    const [_, start, end] = block.match(/(\d+)-to-(\d+)/);
    const meta = `# Project Euler in Rust: ${start} to ${end}
    
Complete the freeCodeCamp Project Euler problems in the Rust programming language using WebAssembly.

`;
    await writeFile(join(OUTPUT_DIRECTORY, `${block}.md`), meta, "utf-8");
  }
}

async function addLessons() {
  const blocks = await readdir(INPUT_DIRECTORY);
  for (const block of blocks) {
    const lessonFiles = await readdir(join(INPUT_DIRECTORY, block));
    const sortedLessonFiles = lessonFiles.sort(
      (a, b) => Number(a.match(/\d+/)) - Number(b.match(/\d+/))
    );
    let lessonNumber = 0;
    for (const lessonFile of sortedLessonFiles) {
      // Read file
      const lesson = await readFile(
        join(INPUT_DIRECTORY, block, lessonFile),
        "utf-8"
      );
      // Replace yaml with lesson number
      const lessonSansYaml = lesson.replace(
        /^---$.*?^---$/ms,
        `## ${lessonNumber++}`
      );
      // Change headings
      const lessonWithDescription = lessonSansYaml.replace(
        "# --description--",
        "### --description--"
      );
      const lessonWithTests = lessonWithDescription.replace(
        "# --hints--",
        "### --tests--"
      );
      const lessonSansSeed = lessonWithTests.slice(
        0,
        lessonWithTests.indexOf("# --seed--")
      );
      // Append to file
      await writeFile(join(OUTPUT_DIRECTORY, `${block}.md`), lessonSansSeed, {
        encoding: "utf-8",
        flag: "a",
      });
    }

    const ending = `## --fcc-end--
    `;
    await writeFile(join(OUTPUT_DIRECTORY, `${block}.md`), ending, {
      encoding: "utf-8",
      flag: "a",
    });
  }
}

try {
  main();
} catch (e) {
  console.error(e);
}
