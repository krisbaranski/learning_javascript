// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = '23';
const calcAge = birthYear => 2021 - birthYear;
console.log(calcAge(1979));

// let arrayOfNumbers = [4, 12, 62, 71, -10];
// console.log(Math.max.apply(Math, arrayOfNumbers)); // returns 70

const temperatures = [4, 12, 62, 71, -10];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);



// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console


*/
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
const arr3 = arr1.concat(arr2);

const temp = arr3;
const days = arr1.length - 1;

// const printForecast = function ([arr1, arr2, arr3]) {
//   temp.push(arr1[i]);
//   day.push(arr1.length[i]);

//   for (let temp = 0; temp < arr1.length; temp++) {}
//   console.log();
// };
// console.log(printForecast);

const point = "...";
console.log(`${point}`);

for (let rep = 0; rep <= temp.length - 1; rep++) {
  console.log(`... ${temp[rep]}ºC in ${[rep + 1]} days ... `);
}
// i did loop of forecast, wrong!
//
//
//

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

// transforming array to string
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
printForecast(data2);
