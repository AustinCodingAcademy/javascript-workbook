'use strict';


// 1. Write a JavaScript program to display the current day and time.
// ------------------------------------------------------------------
// I'm going to declare a variable to store an instance of the Date() object
// and then I'll use the .toLocaleString method to make the result pretty
// I'll console.log the result
function displayDayAndTime() {
  var currentDate = new Date();
  return currentDate.toLocaleString();
}
displayDayAndTime();



// 2. Write a JavaScript program to convert a number to a string.
// ------------------------------------------------------------------
// I'm going to write a function that accepts a number as its argument
// I'll use a conditional to run isNaN on the argument, and String(arg) to convert it
// There are at least 2 other options I could use:
// http://2ality.com/2012/03/converting-to-string.html
function convertNumToString(arg) {
  return (isNaN(arg))
    ? 'error: argument provided was not a number'
    : String(arg);
}
convertNumToString('foo'); // returns an error
convertNumToString(7); // returns '7'



// 3. Write a JavaScript program to convert a string to a number.
// ------------------------------------------------------------------
// I'm going to write a function that accepts one argument
// then uses parseInt to compute the result and return it
// If it can't be parsed as a number, the function will log an error
function convertStringToNum(arg) {
  var ret = parseInt(arg);
  return (isNaN(ret))
    ? 'error, the provided argument cannot be parsed to a number'
    : ret;
}
convertStringToNum('asdf'); // returns an error
convertStringToNum('44'); // returns 44



// 4. Write a JavaScript program that takes in different datatypes and prints out their type
// ------------------------------------------------------------------
// I'm writing a function that accepts an argument and uses
// typeof to output the argument's type
function outputType(arg) {
  return typeof arg;
}
outputType(7); // returns 'number'
outputType(true); // returns 'boolean'
outputType([5,6,7]); // returns 'object'



// 5. Write a JavaScript program that adds 2 numbers together.
// ------------------------------------------------------------------
// I'm going to write a function that accepts two arguments,
// tries to ensure they are both numbers, and adds them together
function addTwoNumbers(arg1, arg2) {
  if (isNaN(arg1) || isNaN(arg2)) {
    return 'error: one of more of your arguments was not a number';
  } else {
    return parseInt(arg1) + parseInt(arg2);
  }
}
addTwoNumbers(5, 9); // returns 14
addTwoNumbers(5, '9'); // returns 14
addTwoNumbers(5, 'asdf'); // returns an error


// 6. Write a JavaScript program that runs only when 2 things are true.
// ------------------------------------------------------------------
// I'm going to write a function that accepts two arguments
// and uses a conditional statement with an && operator to check if they are true
// note: I'm not checking that they literally === true, just if they are truthy
function checkIfBothTrue(arg1, arg2) {
  return (arg1 && arg2)
    ? 'both true'
    : 'error';
}
checkIfBothTrue(5, {}); // returns 'both true'
var foobar = true;
checkIfBothTrue(foobar, [1,2,3]); // returns 'both true'
var whatever = null;
checkIfBothTrue(whatever, 9); // returns 'error'



// 7. Write a JavaScript program that runs when 1 of 2 things are true.
// ------------------------------------------------------------------
// I'm going to write a function that accepts two arguments and uses conditionals 
// to test the criteria that only one is true, using parentheses and && || ! operators
// note: I'm not checking that they literally === true, just if they are truthy
function checkIfOneofTwo(arg1, arg2) {
  return (arg1 || arg2) 
    ? 'success: 1 of 2 arguments true'
    : 'error';
}
checkIfOneofTwo('some string', false); // returns 'success'
checkIfOneofTwo(false, false); // returns 'error'



// 8. Write a JavaScript program that runs when both things are not true.
// ------------------------------------------------------------------
// I'm going to write a function that accepts two arguments
// It will use a conditional statement, with the && and ! operators
// note: I'm not checking that they literally === true or false, just if they are truthy
function checkIfBothFalse(arg1, arg2) {
  return (!arg1 && !arg2)
    ? 'success: both arguments are not true'
    : 'error';
}
checkIfBothFalse(false, false); // returns 'success'
checkIfBothFalse('Lorem ipsum', false); // returns 'error'
checkIfBothFalse(true, true); // returns 'error'
var testA = false, testB = null;
checkIfBothFalse(testA, testB); // returns 'success'