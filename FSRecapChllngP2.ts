// recap cahllenge part 2 from notion

/**
 * greet(name):
 * - Accepts a "name" parameter of type "string"
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(Name: string) {
  console.log(`Hello ${Name}`);
}
greet("finz");

/**
 * isOdd(n):
 * - Accepts a "n" parameter of type "number"
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

function isOdd(n: number): boolean {
  let checker: number = n % 2;
  if (checker === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isOdd(7));
console.log(isOdd(10));

/**
 * oddsSmallerThan(n):
 * - Accepts a "n" parameter of type "number"
 * - returns the number of ODD numbers smaller than "n"
 *
 * e.g.
 * oddsSmallerThan(7) -> 3; // the odd numbers being 1, 3, 5
 * oddsSmallerThan(15) -> 7; // the odd numbers being 1, 3, 5, 7, 9, 11, 13
 */

function oddsSmallerThan(n: number): number {
  return n;
}
let result = oddsSmallerThan(7);
console.log(result);
// n = 2
// n = 1   y = true  return 1

// n = 1
// 0

// n = 7
// n = 6 y = false
// n = 5 true return 5
