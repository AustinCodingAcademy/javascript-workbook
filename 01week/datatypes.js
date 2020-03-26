'use strict'

// Write a JavaScript program to display the current day and time.
let myDate = new Date();
console.log(myDate);

// Write a JavaScript program to convert a number to a string.
const myNumber = 5;
console.log(myNumber.toString());

// Write a JavaScript program to convert a string to the number.
const myString = "11";
const theOtherNumber = parseInt(myString, 10);
console.log(theOtherNumber);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
const myBoolean = true;
console.log(typeof (myBoolean));

// * Null
const myNull = null;
console.log(typeof (myNull));

// * Undefined
const notDefined = undefined;
console.log(typeof (notDefined));

// * Number
const myNum = 123;
console.log(typeof (myNum));

// * NaN
const notNumber = NaN;
console.log(typeof (notNumber));

// * String
const myOtherString = "Hello World!"
console.log(typeof (myString));

// Write a JavaScript program that adds 2 numbers together.
function addTwoNum (num1, num2) {
  const mySum = num1 + num2;
  console.log(mySum);
}
addTwoNum(1, 5);

// Write a JavaScript program that runs only when 2 things are true.
function twoAreTrue (thing1, thing2) {
  if (thing1 === true && thing2 === true) {
    console.log("This program runs");
  } else {
    console.log("This program DOES NOT run");
  }
}
twoAreTrue(true,true);

// Write a JavaScript program that runs when 1 of 2 things are true.
function oneIsTrue (myThing1, myThing2) {
  if (myThing1 !== true && myThing2 !== true) {
    console.log("This program DOES NOT run");
  } else if (myThing1 === true && myThing2 === true) {
    console.log("This program DOES NOT run");
  } else {
    console.log("This program runs");
  }
}
oneIsTrue(true,false);



// Write a JavaScript program that runs when both things are not true.  
function noneAreTrue (ourThing1, ourThing2) {
  if (ourThing1 !== true && ourThing2 !==true) {
    console.log("This program runs");
  } else {
    console.log("This program DOES NOT run");
  }
}
noneAreTrue(false, false);



