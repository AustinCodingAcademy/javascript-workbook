"use strict";

let date = new Date();
console.log(date);

let myNum = 10;
let numToString = myNum.toString();
console.log(numToString);

let myText = '100';
let textToString = parseInt(myText, 10);
console.log(textToString);

function getType(dataType) {
    console.log(typeof dataType);
}
getType('testing');

function getSum(num1, num2) {
    let sumOfNums = num1 + num2;
    console.log(sumOfNums);
}
getSum(1, 2);

if (5 > 1 && 1 < 5) {
    console.log('This is true');
} else {
    console.log('This is false');
}

if (5 > 1 || 1 > 5) {
    console.log('5 is greater than 1');
} else {
    console.log('1 is not greater than 5');
}

if (1 < 5 && 5 > 1) {
    console.log('Both things are not true');
}