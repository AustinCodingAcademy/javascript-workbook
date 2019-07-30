"use strict";

// Getting date
console.log(Date());

// Changing number to string
let myNum = 10;
let numToString = myNum.toString();
console.log(numToString);

// Changing string to a number
let myText = '100';
let textToString = parseInt(myText, 10);
console.log(textToString);

// Function that grabs the data type
function getType(dataType) {
    console.log(typeof dataType);
}
getType('testing');

// Function that gets the sum of two numbers
function getSum(num1, num2) {
    let sumOfNums = num1 + num2;
    console.log(sumOfNums);
}
getSum(1, 2);

// Conditional that checks for Truth
if (5 > 1 && 1 < 5) {
    console.log('This is true');
} else {
    console.log('This is false');
}

// Conditional that checks for True or False
if (5 > 1 || 1 > 5) {
    console.log('5 is greater than 1');
} else {
    console.log('1 is not greater than 5');
}

// Conditional that checks for False
if (1 < 5 && 5 > 1) {
    console.log('Both things are not true');
}