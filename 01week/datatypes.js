'use strict';

// Write a JavaScript program to display the current day and time.
function showDate () {
  return new Date();
}

showDate();

// Write a JavaScript program to convert a number to a string.
function convertNumtoString (num) {
  return num.toString();
}

convertNumtoString(8);

// Write a JavaScript program to convert a string to the number.
function convertStringtoNum (stringInput) {
  return parseInt(stringInput);
}

convertStringtoNum('8');

/* Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String */
function identifyType (input) {
  return typeof input;
}

identifyType(true);

// Write a JavaScript program that adds 2 numbers together.
function addition (a, b) {
  return a + b;
}

addition (2, 100);

// Write a JavaScript program that runs only when 2 things are true.
function twoTruths (a, b) {
  if (a > 0 && b > 0) {
    return 'they\'re both true!';
  }
  return 'function failed';
}

twoTruths(10, 1);

// Write a JavaScript program that runs when 1 of 2 things are true.
function oneTruth (a, b) {
  if (a > 0 || b > 0) {
    return 'one of these things is true!';
  }
  return 'function failed';
}

oneTruth(0, 1);

// Write a JavaScript program that runs when both things are not true.
function noTruths (a, b) {
  if ((a > 0 && b > 0) || (a > 0 || b > 0)) {
    return 'function failed';
  }
  return 'none of these things are true!';
}

noTruths(-1, 1);
