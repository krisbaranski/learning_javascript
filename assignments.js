'use strict';

///////////////////////// Epoxidharz Calculator /////////////////////////////////////
const calcEpoxy = (h, w, d) => (h * w * d) / 900;

const howMuchEpoxy = calcEpoxy(90, 25, 0.1); //here you put data to calculate Epoxy!!

console.log(howMuchEpoxy);
////////////////////////////////////////////////////////////////////////////////////




/*
// Values and Variables
let country = 'Germany';
let continent = 'Europe';
let population = '80';

console.log(country);
console.log(continent);
console.log(population);
console.log(`I live in ${country} in  ${continent} and the population is ${population} million people`);



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

console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
);






///////////////////////////////////////////////////////////////
// fundamentals 2

// functions
// my first solution ( too long)
function describeCountry(country, population, capital) {
    const country1 = (`${country} has ${population} million people and its
    capital city is ${capital}`);
    return country1;
}
function describeCountry(country, population, capital) {
    const country2 = (`${country} has ${population} million people and its
    capital city is ${capital}`);
    return country2;
}
function describeCountry(country, population, capital) {
    const country3 = (`${country} has ${population} million people and its
    capital city is ${capital}`);
    return country3;
}

console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('Germany', 80, 'Berlin'));
console.log(describeCountry('Poland', 38, 'Warsaw'));


// right solution!
function describeCountry(country, population, capital) {
    return `${country} has ${population} million people and its
    capital city is ${capital}`;
}
const descFinland = describeCountry('Finland', 6, 'Helsinki');
const descGermany = describeCountry('Germany', 80, 'Berlin');
const descPoland = describeCountry('Poland', 38, 'Warsaw');
console.log(descFinland, descGermany, descPoland);
console.log(descFinland);
console.log(descGermany);
console.log(descPoland);



// declaration vs. expression
function percentageOfWorld1(population,) {

    const worldPolulation = 7900
    const country1 = population / worldPolulation * 100;
    return country1;
}
const population1 = percentageOfWorld1(1441);

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(80));
console.log(percentageOfWorld1(38));


const percentageOfWorld2 = function (population) {
    const worldPolulation = 7900;
    return population / worldPolulation * 100;
}
const population2 = percentageOfWorld2(80);

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(80));
console.log(percentageOfWorld1(38));


// right way to write thia example
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percChina = percentageOfWorld2(1441);
const percGermany = percentageOfWorld2(80);
const percPoland = percentageOfWorld2(38);
console.log(percChina, percGermany, percPoland);



// arrow function
const percentageOfWorld3 = population => (population / 7900) * 100;
const percChina = percentageOfWorld3(1441);
const percGermany = percentageOfWorld3(80);
const percPoland = percentageOfWorld3(38);
console.log(percChina, percGermany, percPoland);



// Functions Calling Other Functions

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million
    people, which is about ${percentage}% of the world.`;
    console.log(description);
}
const percentageOfWorld1 = population => (population / 7900) * 100;
const percChina = percentageOfWorld1(1441);
const percGermany = percentageOfWorld1(80);
const percPoland = percentageOfWorld1(38);
console.log(percChina, percGermany, percPoland);

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
*/



// Arrays
const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);

const percentageOfWorld1 = populations => (populations / 7900) * 100;
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);
