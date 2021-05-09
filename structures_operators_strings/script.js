'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    // console.log(
    //   `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    // );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Passing object into the function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sol',
  starterIndex: 1,
});
//
//
//
//
///////////////////////////////////////
// Looping arrays for-of
///////////////////////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const items of menu) console.log(items);
//
//
//
//
///////////////////////////////////////
// Coding Challenge #1
///////////////////////////////////////

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Coding challenge
// //
// // 1.
// const [players1, players2] = game.players; // object.element extracted/created two new arrays out of one array element
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1; // first element separated from ...rest elements
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2]; // adding two object.elements together
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // adding new elements to end of existing array
// console.log(players1Final);

// // 5.
// const { team1, x: draw, team2 } = game.odds; // changing name of element inside an object
// console.log(game.odds);
// // or
// // const {
// //     odds: { team1, x: draw, team2 },
// //   } = game;
// //   console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals  were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // is printing message with number of goals (4)
// printGoals('Davies', 'Muller');
// // is printing message with number of goals (2)
// printGoals(...game.scored);
// // is printing number of goals and array of players
// //

// // printGoals: function (players = [], scored = []) {
// //     console.log(game.players);
// //     console.log(game.scored);
// //   },
// // const playersScored = [...allPlayers, ...game.scored];
// // console.log(playersScored);
// // game.printGoals(...game.players, ...game.scored);

// // 7. // short circuiting instead of if/else
// // if team1 is smaller than team2 && is more likely to win, so if both is true, clg will print message
// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win');

//
//
//
//
// //
// // // ////////////////////////
// // // NULLISH (??)
// // // ////////////////////////
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // NULLISH values: undefined, null, but NOT (0, '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//
//
// // ////////////////////////
// // && and ||, short-circuiting
// // ////////////////////////
// they can use ANY data type, return ANY data type, use short-circuiting
//
// console.log('----- OR ----');
// //
// console.log(3 || 'Jonas'); //takes first truthy value (3)
// console.log('' || 'Jonas'); //takes first truthy value ('Jonas')
// console.log(true || 0); //takes first truthy value (true)
// console.log(undefined || null); //no truthy, takes last falsy value (null), undefined is also  falsy
// console.log(undefined || null || 0 || 'Hello' || 23 || null); //takes first truthy value ('Hello')

// // long version
// restaurant.numGuests = 23; // if set property then 23, doesnt work with value 0 ( falsy!!!!)
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // if not set then 10
// console.log(guests1);
// // short circuiting
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// //
// //
// //
// console.log('----- AND ----');
// console.log(0 && 'Jonas'); // if any false then takes falsy
// console.log(7 && 'Jonas'); // if all truthy takes last value

// console.log('Hello' && 23 && null && 'Jonas'); // not al truthy, then takes  first falsy

// // practical example
// long way
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // short way
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//
//
//
// // ////////////////////////
// // Rest Pattern
// // ////////////////////////

// // Spread because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // Rest because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Rest in objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); //created a new object with rest "weekdays"

// // Functions
// const add = function (...numbers) {
//   //   console.log(numbers); // put values into arrays
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(3, 5, 8, 9, 1);
// add(1, 2, 3, 4, 5, 6, 7);
// add(5, 3, 2);

// const x = [23, 5, 7];
// add(...x); // spread operator

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach'); // only mushrooms are mainIngredient, rest is i new array
// restaurant.orderPizza('mushrooms'); // will give main ingredient and empty array

//
//
//
// ////////////////////////
// Spread Operator (...)
// ////////////////////////

// old bad method
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // new method
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// // spreading/adding elements to existing objects array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(...newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Merge two arrays
// const mergedArrays = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(mergedArrays);

// // Iterables: arrays, strings, maps, sets, BUT NOT OBJECTS
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // every letter become individual element
// console.log(...str); //is same as clg('j', 'o','n', 'a', 's')
// // console.log(`${...str} Schmedtmann`); doesn't work!!!

//
// real-world example for spread
//
// const ingredience = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(ingredience[0], ingredience[1], ingredience[2]);
// restaurant.orderPasta(...ingredience);

// // spreading on objects since 2018
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// // copy and change elements
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// //
//
//
//
// ////////////////////////
// // Destructuring objects
// ////////////////////////
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// renaming elements
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 25, b: 12, c: 4 };
// ({ a, b } = obj); // overwriten variables let a,b with values from object (obj), works only!!! with ()
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//
//
//
//
////////////////////////////
// Destructuring arrays
////////////////////////////

// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// /////////////////////////////
// // simple destructuring
// // let [x, y, z] = arr;
// // [z, y, x] = [x, y, z];
// // console.log(x, y, z);
// // console.log(arr);

// let [main, , secondary] = restaurant.categories;
// // console.log(first, second);
// console.log(main, secondary);

// /////////////////////////////
// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// // receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8, 9]; // in this case values become 1 if they are not in array
// console.log(p, q, r);
