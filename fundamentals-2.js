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
*/

function logger() {
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
const appleJuice = fruitProccesor(5, 0);
console.log(appleJuice);
console.log(fruitProccesor(5, 0));
