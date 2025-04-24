// Menu task

const RestuarantName: string = "Coded Cafe";

let Intro: string = `Welcome to ${RestuarantName}! please look through the menu and call us when you are ready!`;
console.log(Intro);
// appetizer
const MenuCatOne: string = "Appetizer";
let ApptzDishOne: string = "Green Salad";
let ApptzDishTwo: string = "Truffle Fries";
// main
const MenuCatTwo: string = "Main";
let MainDishOne: string = "Pizza";
let MainDishTwo: string = "Burger";
// drinks
const MenuCatThree: string = "Drinks";
let DrnksDishOne: string = "Water";
let DrnksDishTwo: string = "Juice";
// dessert
const MenuCatFour: string = "Dessert";
let DssrtDishOne: string = "Cheesecake";
let DssrtDishTwo: string = "Tiramisu";

// diplay menu options to user
console.log(
  `A- ------${MenuCatOne}------\n1- ${ApptzDishOne}\n2- ${ApptzDishTwo}\nB- ------${MenuCatTwo}------\n1- ${MainDishOne}\n2- ${MainDishTwo}\nC- ------${MenuCatThree}------\n1- ${DrnksDishOne}\n2- ${DrnksDishTwo}\nD- ------${MenuCatFour}------\n1- ${DssrtDishOne}\n2- ${DssrtDishTwo}\n`
);
