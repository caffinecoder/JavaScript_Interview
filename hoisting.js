//Hoisting: Hoisting is a Javascript mechanism where variables and functions,
//Declearation are moved to the top of their containing scope during the compilation phase.

//Varibale Hoisting: (when decleared with var keyword)
console.log(myVar);
var myVar = 10;
console.log(myVar);

//Function Hoisting
sayHello();
function sayHello() {
  return console.log("Hello");
}
//Hoisting let and const:
console.log(num); // Output: ReferenceError cannot access 'num' before initai
let num= 10;