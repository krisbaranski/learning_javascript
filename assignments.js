/*
// Values and Variables
let country = 'Germany';
let continent = 'Europe';
let population = '80';

console.log(country);
console.log(continent);
console.log(population);


// Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// let const var
let language = 'german';
const country = 'germany';
const continent = 'europe';
const isIsland = false;
isIsland = true;

const language = 'portuguese';
const country = 'Portugal';
const continent = 'Europe';
let population = 11;
const isIsland = false;
*/
// basic operations

/* my way but compilcated...wrong
// const population = 80;
// let halfCountry = population / 2;
// halfCountry++;
// console.log(halfCountry);

// const germany = 80;
// const finnland = 6;
// const biggerCountry = germany > finnland;
// console.log(biggerCountry);

// const averagePopulation = 30;
// console.log(germany > averagePopulation);


console.log(population / 2);
// population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);



const description1 = country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description1);



const language = 'portuguese';
const country = 'Portugal';
const continent = 'Europe';
let population = 130;
const isIsland = false;

const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

// if else

if (population > 33) {
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} population is ${33 - population} million below average`);
}


// type conversion and coersion
'9' - '5'; // 4
'19' - '13' + '17'; // '617'
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // '1143'


// equality operators

const numNeighbours = Number(prompt("How many neighbour countries does your country have ?"));
console.log(numNeighbours);

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}



// logical operators

const country = 'Portugal';
const population = 11;
const language = 'english';
const isIsland = false;

const newLanguage = 'english';

if (newLanguage === language && population <= 50 && !isIsland) {
    console.log(`You should live in ${country}:) `);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


const country = 'Portugal';
const population = 13;

console.log(population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`);

console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
);
*/