// arrays small excersie
// arrays are not static there are push and pop methods to dynamically change the length of the array by adding/removing values
// there are different methods to dynamically manipulate an arrays

let favMovies: string[] = [
  "Avengers",
  "Avengers: age of ultron",
  "Avengers: infinity war",
  "Avengers: endgame",
  "iron man",
];
let kuwaitWeeklyTemp: number[] = [34, 32, 33, 36, 36, 38, 36];

console.log(favMovies.length);

favMovies.push("Iron man 2");

console.log(favMovies.length);

// .push, .pop, .length, .unshift, .shift
// be mindful of what each methods returns if I want to utilize the return value
// .includes(""): it's like a search function for array elemnts, it is case sensitive though
