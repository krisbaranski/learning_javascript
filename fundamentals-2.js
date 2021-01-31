'use strict';
//Activating Strict Mode



/*
//////////////////////////////////////
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; 'interface' reserved as defined variables and can't be used
// const private = 345;      'private' reserved as defined variables and can't be used
// const if;            'if' reserved as defined variables and can't be used



/////////////////////////////////////////////////////
// FUNCTIONS

function logger() { // logger is a name of function
    console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProccesor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProccesor(5, 0);   // this is one
console.log(appleJuice);                   // possibility;
console.log(fruitProccesor(5, 0));    //this is another posibility

const appleOrangeJuice = fruitProccesor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// declarations vs. experssions

// Fuction declaration
function calcAge1(birthYeah) {
    // const age = 2037 - birthYeah;
    // return age;
    return 2037 - birthYeah; // easier "shorter" way
}
const age1 = calcAge1(1991);


// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}



// Arrow Function!!
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1988, 'Bob'));



// function calling other functions
const cutPieces = function (fruit) {
    return fruit * 4;
}
const fruitProccesor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProccesor(2, 3));



const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`); // .log before return works!!!!
        return retirement; // .log after return is not possible
    } else {
        return `${firstName} is retired already`;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));




// Coding Challenge #1
const calcAverage = score => score;
// const scoreD = (44 + 23 + 71) / 3;
// const scoreK = (65 + 54 + 49) / 3;
const scoreD = (85 + 54 + 41) / 3;
const scoreK = (23 + 34 + 27) / 3;

console.log(calcAverage(scoreD));
console.log(calcAverage(scoreK));

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= (2 * avgDolphins)) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    } else {
        return `Nobody wins`;
    }
}
checkWinner(scoreD, scoreK);
checkWinner(524, 111);



//right solution
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71); // !!const changed to let
let scoreKoalas = calcAverage(65, 54, 49);   // !!const changed to let
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody wins`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(541, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41); // !!const changed to let but not overwrite (let) only change value
scoreKoalas = calcAverage(23, 34, 27);   // !!const changed to let but not overwrite (let) only change value
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/


///////////////////////////////////////////
// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['MIchael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1992, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']   this is not valid!!!!!!!

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Exercise
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1992, 1984, 2008, 2020];

// console.log(calcAge2(years));   wrong!!!!!
const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years.length - 1);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years.length - 1)];
console.log(ages);





