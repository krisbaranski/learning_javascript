// Linking a JavaScript File
// Using browser to test JavaScript
/*alert("Hello World!")

let js = "amazing";

if (js === 'amazing') alert('JavaScript is FUN!')

js = 'boring'

console.log(40 + 8 + 23 - 10);


////////////////////////////////////
// Values and Variables
console.log("Kris");
console.log(41);

let firstName = "Kris";
console.log(firstName);

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Kris');

javascriptIsFun = 'YES!';

let year;
console.log(year);
console.log(typeof year);

year = 1979;
console.log(typeof year);

// falsy defined typeof
console.log(typeof null);


////////////////////////////////////
// let const var

let age = 41;
age = 42;

const birthYear = 1979;
// birthYear = 1980; changing const doesnt work!!!
//  const job;  empty const also doesnt work!!!

var job = 'programmer';
job = 'teacher';

lastName = 'Baranski';
console.log(lastName);

//////////////////////////////////////
// Basic Operators

// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName = 'Kris';
const lastName = 'Baranski';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5; // 15
x += 10;  // x = x+10, 15+10 = 25
x *= 4; // x * 4 = 100
x++; // x +1 = 101
x--; // x - 1 = 100;

console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=,
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


//////////////////////////////////////////////////
// Operators Precedence
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



/////////////////////////////////////////////////
// Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


////////////////////////////////////////////
// Strings
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('Just a regular string...');

console.log('String with\n\
multiple \n\
lines' );

console.log(`String with
multiple
lines`);

//////////////////////////////////////
// Taking decisions IF/ELSE Statements

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start a driving license ');
// }

// this next is more common
const age = 15;

if (age >= 18) {
    console.log('Sarah can start a driving license ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. She has to wait ${yearsLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)


////////////////////////////////////
// Coding Chellange #2

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

console.log(`Mark's BMI ${BMIMark} is lower than John´s ${BMIJohn}`);


/////////////////////////////////////////
// Type Conversion and Coersion

// type conversion
// const inputYear = '1991';
// console.log(inputYear + 18);
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));


// type coersion
console.log('I am ' + 23 + ' years old'); // number to string
console.log('23' - '10' - 3);  // string to number
console.log('23' / 2);  // string to number
console.log('23' > '18');  //string to boolean

let n = '1' + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);

2 + 3 + 4 + '5' // 9 '5' = "95"
'10' - '4' - '3' - 2 + '5' // 1 + '5' = '15'
*/

////////////////////////////////////////
// Falsy and truthy Values

