"use strict";
const assert = require("assert");
// console.log(assert);

//____________________________________________________________________________________________________________
// Write a JavaScript program to display the current day and time.
function displayCurrentDayAndTime() {
  let today = new Date();
  console.log(today);
}
displayCurrentDayAndTime();

//____________________________________________________________________________________________________________
// Write a JavaScript program to convert a number to a string.

// solution
function numberToString(num) {
  let str = num.toString();
  return str;
}

// tests
describe("numberToString", () => {
  it("should take any number and turn it into a string", () => {
    assert.equal(typeof numberToString(12345), "string");
  });
  it("the string returned should be the same as the number inputted", () => {
    assert.strictEqual(numberToString(12345), "12345");
    assert.notStrictEqual(numberToString(12345), "54321");
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program to convert a string to the number.

//____________________________________________________________________________________________________________
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

//____________________________________________________________________________________________________________
// Write a JavaScript program that adds 2 numbers together.

//____________________________________________________________________________________________________________
// Write a JavaScript program that runs only when 2 things are true.

//____________________________________________________________________________________________________________
// Write a JavaScript program that runs when 1 of 2 things are true.

//____________________________________________________________________________________________________________
// Write a JavaScript program that runs when both things are not true.
