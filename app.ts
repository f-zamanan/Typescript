// ts vs. js : ts is much more safer and defines types that are robust
// to compile ts to js "transpile" use command (tsc FILE_NAME.ts) in the terminal
// to run the transpiled js file use command (node FILE_NAME.js) in the terminal
// console.log("Hello World");
// logs the massage from my script

let x = 57;
//  using "let" assigns a value to a variable and declare a variable

let username = "finz";
let age = 100;
let isStudent = true;
let description = ` my name is ${username}, and my age is ${age}`;
// `` backtick lets me combine strings and other variables in one variable no need to cat
console.log(description);

let lastName: string = "finz z";
let num: number = 6;
let verify: boolean = true;
// enforcing different variable types
console.log(lastName);
// using : will enforce a type on js so it can be more secure idk but this token will enforce a type when declaring a variable

const newStudent: string = "wow";
// this is a constant variable and cannot be changed upon declaration
console.log(newStudent);

let firstName: string = "fatma";
