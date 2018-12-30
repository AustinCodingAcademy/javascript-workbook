"use strict";

//Arguments

//input: a String of random words(lorem ipsum).

//Boilerplate

function upperCaser(input) {
  // SOLUTION GOES HERE
  return input.toUpperCase();
}

module.exports = upperCaser;

//Boilerplate

function repeat(operation, num) {
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
  }
  // SOLUTION GOES HERE
  return operation;
}

// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }

// Do not remove the line below
module.exports = repeat;

//Boilerplate
//Map higher order function

function doubleAll(numbers) {
  numbers.map(num => {
    num * 2;
  });
  return numbers;
}

// SOLUTION GOES HERE

module.exports = doubleAll;
