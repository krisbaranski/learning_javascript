'use strict';

/*
//////////////////////////////////////
//Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; 'interface' reserved as defined variables and can't be used
// const private = 345;      'private' reserved as defined variables and can't be used
// const if;            'if' reserved as defined variables and can't be used

//////////////////////////////
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
*/
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

