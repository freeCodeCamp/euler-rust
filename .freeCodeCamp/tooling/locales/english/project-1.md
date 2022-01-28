# freeCodeCamp - Rust in Replit - Image Combiner

## 1

### --description--

The main tools within the Rust ecosystem are:

- rustc The compiler which takes your Rust code and compiles it into binary (machine readable code)
- rustup The command line utility to install and update Rust
- cargo The Rust build system and package manager (you will work with this)

Task: Create a new Rust project by running the following command in the prompt:

```bash
cargo new calculator
```

### --tests--

You can use the command `cargo new calculator` to create the project.

```js
const files = await __helpers.getDirectory(".");
console.log("Test 1: ", files);
assert.include(files ?? "", "calculator");
```

## 2

### --description--

You have just created a new Rust project within the `calculator/` directory.

Cargo has created the boilerplate for a 'Hello World'.

Task: Change directory into `calculator/`.

### --tests--

You should run `cd calculator` to change directory.

```js
const lastCommand = await __helpers.getTerminalOutput();
console.log("Test 2: ", lastCommand);
assert.match(lastCommand, /cd calculator/);
```

## 3

### --description--

This file contains a function declaration with the handle `main`.
By default, rustc calls the `main` function first whenever the executable is run.

`println` is a built-in macro.

A macro is similar to a function, but can be thought of as a piece of code which writes other code.
For now, the main differences between a function and a macro to keep in mind are:

    - Macros are called using a bang (!)
    - Macros can take a variable number of arguments; functions in Rust cannot

Task: Run your code, using the following command:

```bash
cargo run
```

### --tests--

Your code should output the following: `Hello, world!`

```js
const terminalOutput = await __helpers.getTerminalOutput();
console.log("Test 3: ", terminalOutput);
assert.match(terminalOutput ?? "", /Hello, world!/);
```

## 4

### --description--

Variables are declared using the `let` keyword.

```rust
let variable_name = value
```

Task: Within the `main` function, declare a new variable, and name it `firstName` and give it a value of `"<your_name>"`. Ensure to declare it before the `println!` call, and place your name within double quotes.

_NOTE:_ Variables can also be declared using the const or static keywords.

Task: Run your code to see what the compiler says:

```bash
cargo run
```

_HINT:_ If you get stuck, try to follow the compiler's helpful advice.

### --tests--

You should declare a variable `firstName` and give it a value of your first name within double quotes.

```js
const code = await __helpers.getFile("calculator/src/main.rs");
console.log("Test 4: ", code);
assert.match(code, /let\s+firstName\s*=\s*\"\w+\"\s*/);
```

You should follow the compiler's advice to add a semi-colon at the end.

```js
const code = await __helpers.getFile("calculator/src/main.rs");
console.log("Test 4.2: ", code);
assert.match(code, /let\s+firstName\s*=\s*\"\w+\"\s*;/);
```

## 5

### --description--

Above, you might notice the rustc compiler is giving two suggestions for your code.

Task: Follow the compiler's advice to convert the variable name into snake_case.

It is convention in Rust to use snake_case for:

- Variable names
- Function names
- File names

SCREAMING_SNAKE_CASE is used for constants and statics. Lastly, PascalCase is used for types, traits, and enums (we will cover these later).

### --tests--

You should have a variable `first_name` and give it a value of your first name within double quotes.

```js
const code = await __helpers.getFile("calculator/src/main.rs");
console.log("Test 5: ", code);
assert.match(code, /let\s+first_name\s*=\s*"\w+"\s*;/);
```

## 6

### --description--

End of course! Well done, Tom!

If you struggled to understand any of this, we can add _Simplified English_ to the translations.

### --tests--

This always fails. 😆

```js
assert(false);
```

## 7

### --description--

Notice how lesson 7 needs to be here, even though 5 is the last lesson. _Lesson 6 still is shown_

### --tests--

Another fail - I do not know if this is necessary 🤷‍♂️

```js
assert(false);
```
