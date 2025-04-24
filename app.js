// ts vs. js : ts is much more safer and defines types that are robust
// to compile ts to js "transpile" use command (tsc FILE_NAME.ts) in the terminal
// to run the transpiled js file use command (node FILE_NAME.js) in the terminal
// console.log("Hello World");
// logs the massage from my script
var x = 57;
//  using "let" assigns a value to a variable and declare a variable
var username = "finz";
var age = 100;
var isStudent = true;
var description = " my name is ".concat(username, ", and my age is ").concat(age);
// `` backtick lets me combine strings and other variables in one variable no need to cat
console.log(description);
var lastName = "finz z";
var num = 6;
var verify = true;
// enforcing different variable types
console.log(lastName);
// using : will enforce a type on js so it can be more secure idk but this token will enforce a type when declaring a variable
var newStudent = "wow";
// this is a constant variable and cannot be changed upon declaration
console.log(newStudent);
var firstName = "fatma";
