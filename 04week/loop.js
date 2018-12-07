"use strict";

// Create a new file called loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.

// for loop
// Use a for loop to console.log each item in the array cars.
const cars = ["porsche", "ferrari", "lamborghini", "lotus"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// Use a for...in loop to console.log each key.
for (let key in persons) {
  console.log(key);
}

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (let key in persons) {
  if (key === "birthDate") {
    console.log(persons[key]);
  }
}

// while loop
// Use a for loop to console.log the numbers 1 to 1000.
let i = 1;
while (i < 1001) {
  console.log(i);
  i++;
}
// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let j = 0;
do {
  j++;
  console.log(j);
} while (j < 1000);

// When is a for loop better than a while loop?
// When you are trying to perform a repeatable action for all elements of an iterable data structure
// (typically array or string).

// How is the readability of the code affected?
// For loops are more concise and readable for iterating.

// What is the difference between a for loop and a for...in loop?
// For loops are often used to repeat an action for each index of an array or string. For...in loops are used
// to repeat an action for each key in an object.

// What is the difference between a while loop and a do...while loop?
// A while loop evaluates a condition before running a block of code. A do...while loop performs the block
// of code once before evaluating the condition. In both case, if the condition evaluates to true, the block
// is repeated.
