'use strict';

// //////////////////////////
// Scoping in practice
// //////////////////////////

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       // Creating new variable with same name as outher scopes variable
//       const firstName = "Steven";

//       // Reassigning outer scopes variable
//       output = "New output";
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(add(1, 2)); //without strict mode it works! doesn't see the bug
//     console.log(output);
//     console.log(millenial);
//   }

//   printAge();
//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);
// // console.log(age);
// // printAge();

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = " Jonas"; // undefined
// let job = "teacher"; // cannot access before initialisation
// const year = 1991;

// functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCard();

// var numProducts = 10; //will become undefined

// function deleteShoppingCard() {
//   console.log("All products deleted!");
// }

////////////////////////////////////////////
// this. keyword in practice
// /////////////////////////////////////
// console.log(this); // here it is in global scope

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // needs an owner, otherwise undefined
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this); // arrow function have no this key, uses global/parent scope or points to window object
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1979,
//   calcAge: function () {
//     console.log(this); // jonas is owner of this key, it shows jonas object
//     console.log(2021 - this.year); // calculates jonas.year
//   },
// };

// jonas.calcAge(1991);

// const mathilda = {
//   year: 2017,
// };

// mathilda.calcAge = jonas.calcAge; // in this method this key points to mathilda, mathilda is calling this object
// mathilda.calcAge();

// const f = jonas.calcAge; // it copies calcAge to f
// f();

////////////////////////////////////////////
// Regular function vs. Arrow function
///////////////////////////////////////////

// var firstName = "Mathilda"; // global scope!

// const jonas = {
//   firstName: "Jonas",
//   year: 1979,
//   calcAge: function () {
//     // Solution one
//     // // console.log(this); // jonas is owner of this key, it shows jonas object
//     // console.log(2021 - this.year); // calculates jonas.year

//     // const self = this; // makes this to a values
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1977 && self.year <= 1996);
//     // };

//     // Solution two
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1977 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`), // this here is undefined unless taking var as global/parent scope
// };
// jonas.greet(); // greet as arrow function is not in the jonas object!!!
// jonas.calcAge();

// // example
// const obj = {
//   a: "foo",
//   b() {
//     return this.a;
//   },
// };
// console.log(obj.b()); // returns 'foo'

// //
// // arguments keyword
// //
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5); // exists and works in a regular function
// addExpr(2, 5, 8, 12); // arguments can be added as an array, more than in parameters

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 7); // gives error of not defined

////////////////////////////////////////////
// Primitives, objects and js engine
////////////////////////////////////////////

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age, oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// console.log(me, friend);

// friend.age = 27;
// console.log('friend:', friend);
// console.log('me', me);

////////////////////////////////////////////
// Primitives, objects in practice
////////////////////////////////////////////

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const merriedJessica = jessica;
merriedJessica.lastName = 'Davis';
// console.log('Before merriage:', jessica);
// console.log('After merriage:', merriedJessica);

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Anna', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Steven', 'Mike');
console.log('Before merriage:', jessica2);
console.log('After merriage:', jessicaCopy);
