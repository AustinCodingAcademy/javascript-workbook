'use strict';
// Write a JavaScript program to display the current day and time.
// use function, return new date and transform it into a readable and local display
function dateAndTime() {
  return new Date().toLocaleString();
}
dateAndTime();


// Write a JavaScript program to convert a number to a string.
//  Use the method string() to turn whichever number into a string
function numberToString(num) {
  return num.toString();
}
numberToString();


// Write a JavaScript program to convert a string to the number.
// use js method number to convert it
function numberToString(num) {
  return Number(num);
}
numberToString();


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

// a function that evaluates the var using typeof
function whatType(vari) {
  return typeof vari;
}
whatType();


// Write a JavaScript program that adds 2 numbers together.

// use function to add the arguments together using +
function addTwo(num1, num2) {
  return num1 + num2;
}
addTwo();


// Write a JavaScript program that runs only when 2 things are true.

// function that receives to items, if those two things are true
// methods: function, 2 arguments, if/then statement

function twoTrue(arg1, arg2) {
  if (arg1 && arg2) {
    console.log('TIS TRUE');
  } else {
    console.log('TIS FALSE');
  }
}
twoTrue();

// Write a JavaScript program that runs when 1 of 2 things are true.
// same as before but with pipes ||

function oneTrue(arg1, arg2) {
  if (arg1 || arg2) {
    console.log('TIS TRUE');
  } else {
    console.log('TIS FALSE');
  }
}
oneTrue();

// Write a JavaScript program that runs when both things are not true.
// conditinal between arguments with &&
function noneTrue(arg1, arg2) {
  if (!arg1 && !arg2) {
    console.log('YAY WE RAN IT');
  } else {
    console.log('YOU FAILED');
  }
}
noneTrue();
