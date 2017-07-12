'use strict';

// Return Current Date
function getDate () {
  return new Date();
}

// convert num to string
function convertToString (num) {
  return num.toString();
}

// Convert string to num
function convertToNum (string1) {
  return parseInt(string1);
}

// Print Data Type
function printDatatype (data) {
  return typeof data;
}

// Add two nums
function addNum (num1, num2) {
  return num1 + num2;
}

// Both conditions equate to true
function bothTrue () {
  var doughnut = 2;
  var shark = 2;
  var ranger = 2;
  if (doughnut === shark && shark === ranger) {
    console.log('Both conditions are true!');
  }
  return;
}

// One condition equates to true
function oneTrue () {
  var pepsi = 50;
  var coke = 100;
  var water = 50;
  if (pepsi === coke || water === pepsi) {
    console.log('At least one of your conditions equate to true!');
  }
  return;
}

// Both conditions equate to false
function bothFalse () {
  var pizza = 33;
  var sandwich = 23;
  if (pizza === 35 && sandwich === 24) {
    console.log('Both conditions are true!');
  } else {
    console.log('Both conditions are NOT true!');
  }
  return;
}

getDate();
convertToString(108);
convertToNum('768');
printDatatype(false);
addNum(4, 78);
bothTrue();
oneTrue();
bothFalse();
