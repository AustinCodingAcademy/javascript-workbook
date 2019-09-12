"use strict";
// Write a JavaScript program to display the current day and time.
function dispTime() {
  let date = new Date();
  let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  let newDate = new Date(utc + (3600000*'-5'));

  console.log("Today is "+ date.getMonth()+"/"+date.getDate() + "/"+date.getFullYear() + " and the time is "+ newDate.toLocaleString());
}
dispTime();

// Write a JavaScript program to convert a number to a string.
function stringify(item) {
  console.log("Changing "+ typeof item + " to string.")
  console.log(item.toString() + " is now a string.");
}
// stringify(1134);

// Write a JavaScript program to convert a string to the number.
function numbify(item) {
  console.log("Changing "+ typeof item + " to number.")
  console.log(Number(item) + " is now a number.");
}
// numbify("1134");

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
function wth(item) {
  console.log(item + " is a " + typeof item);
}
// wth(true);

// Write a JavaScript program that adds 2 numbers together.
function add(num1, num2) {
  console.log(Number(num1)+Number(num2));
}
// add(1651, 3543);

// Write a JavaScript program that runs only when 2 things are true.
function allTrue(item1, item2) {
  if (item1 == true && item2 == true) {
    console.log("Program ran. Both things are true.");
  }
}
// allTrue(true, true);
// allTrue(true, false);
// allTrue(false, false);

// Write a JavaScript program that runs when 1 of 2 things are true.
function halfsies(item1, item2) {
  if (item1 == true || item2 == true) {
    console.log("Program ran. Something is true.");
  }
}
// halfsies(true, true);
// halfsies(true, false);
// halfsies(false, false);

// Write a JavaScript program that runs when both things are not true.
function allFalse(item1, item2) {
  if (item1 == false && item2 == false) {
    console.log("Program ran. Both things are false.");
  }
}
// allFalse(true, true);
// allFalse(true, false);
// allFalse(false, false);