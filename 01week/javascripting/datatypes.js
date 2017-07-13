'use strict'

// Find Date
const currentDate = new Date();
console.log(currentDate);

// Number To String
const ntsNumber = 22;
const numToString = ntsNumber.toString();
console.log(numToString)

// String To Number
const stringToNum = parseInt("22 bottles");
console.log(stringToNum)

// Identify data type
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof 98)
console.log(typeof NaN)
console.log(typeof "this is a string")

//Add two numbers together
console.log(28+12)

//Runs if both are true
if (10<20 && 50>30);{
  console.log("Both are true")
}

//Runs if one or both are true
if (100 > 50 || 25<30) {
  console.log("Hey, it works!");
} else {
  console.log("Nah, wrong.");
}

//I couldn't figure out the last one
