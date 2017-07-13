'use strict';
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.www.w3schools.com

//  Write a JavaScript program to display the current day and time
function getDate() {
  return new Date();
}

new Date();

// Write a JavaScript program to convert a number to a string
function numberToString() {
  return num.toString();
}

num.toString();


// Write a JavaScript program to convert a string to the number
function stringToNumber() {
  return parseInt();
}

parseInt();

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  //  Boolean
function getType(data) {
  return typeof(data);
  console.log(getType(true));
}
  //  Null
function getType(data) {
  return typeof(data);
  console.log(getType(null));
}
  //  NaN
function getType(data) {
  return typeof(data);
  console.log(getType(''));
}
//  String
function getType(data) {
  return typeof(data);
  console.log(getType('String'));
}
//  Undefined
function getType(data) {
  return typeof(data);
  console.log(getType());
}
//  Number
function getType(data) {
  return typeof(data);
  console.log(getType(10));
}
//  Write a JavaScript program that adds 2 numbers together
function addTwoNumbers(x, y) {
  return x + y;
  }

  addTwoNumbers (5, 5);

//Write a JavaScript program that runs only when 2 things are true
function twoThingsAreTrue(thing1, thing2) {
  if (thing1 && thing2) {
  return 'twoThingsAreTrue';
  }
}

twoThingsAreTrue (true, true);

//Write a JavaScript program that runs when 1 of 2 things are true
function oneTrueOneFalse(thing1, thing2) {
  if (!thing1 || !thing2) {
  return 'oneTrueOneFalse';
  }
}

oneTrueOneFalse (true, false);

//Write a JavaScript program that runs when both things are not true
function notTrue(thing1, thing2) {
  if (!thing1 && !thing2) {
  return 'bothFalse';
  }
}

notTrue (false, false);
