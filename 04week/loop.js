// Create a new file called loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.

"use strict";

// for loop
// Use a for loop to console.log each item in the array carsInReverse.
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
// Use a for...in loop to console.log each key.
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
// while loop

const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// for (const i in persons) {
//   console.log(persons[i]);
// }

for (const i in persons) {
  if (i === "birthDate") {
    console.log(persons[i]);
  }
}

console.log(persons);

for (const i = 0; i < 0; i++) {
  console.log([i]);
}

// Use a for loop to console.log the numbers 1 to 1000.

// for (let i = 0; i < 1000; num++) {
//   console.log(num);
// }

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

// let num = 1;
// do {
//   num += 1;
//   console.log(num);
// } while (num < 1000);

// while loop
// let num = 1;
// while (num < 1000) {
//   num += 1;
//   console.log(num);
// }

// When is a for loop better than a while loop?
// a for loop is better than a while loop when you need to loop through a block of code a number of times and can't depend on the specified condtion being true.
// While loop is used in situations where we do not know how many times loop needs to be excuted beforehand. // For loop is used where we already know about the number of times loop needs to be excuted. Typically for a index used in iteration.

// How is the readability of the code affected?
// for each defines a variable [i] or [j] in most cases - to increment until a condition is met. This can appear a little confusing especially if there are nested for loops. While loop is a little easier to read but behaves slightly different - once the value of the "while" statement is met then the loop ends.

// What is the difference between a for loop and a for...in loop?
// for...in loop is used to loop through an object's properties.

// What is the difference between a while loop and a do...while loop?
// a do...while loop will always execute once, even if the condition is never true.
