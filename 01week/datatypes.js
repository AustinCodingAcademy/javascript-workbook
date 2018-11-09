"use strict";
const assert = require("assert");
console.log(assert);

//Write a JavaScript program to display the current day and time.
//Write a JavaScript program to convert a number to a string.
//solution
function numberToString(anyNumberAtAll) {
    console.log(anyNumberAtAll)

    return anyNumberAtAll.ToString();
}

describe('numberToString', () => {
it ('should take any number and turn it into a string', () => {
assert.equal(typeof numberToString(12345), "string");
});
it ("the string should be the same as the number inputted", () =>{
    assert.strictEqual(numberToString(12345), "12345");
    assert.notStrictEqual(numberToString(12345), "54321");
})
});
//Write a JavaScript program to convert a string to the number.
function stringToNumber(num){

}

describe('stringToNumber', () => {
it ('should take any string and turn it into a number', () => {
    assert.equal(typeof numberToString(12345), "number");
});
it ("the number inputted should number outputted", () => {
assert.strictEqual(numberToString("12345"), 12345);
assert.notStrictEqual(numberToString("12345"), 54321);
});
});

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String
//Write a JavaScript program that adds 2 numbers together.
//Write a JavaScript program that runs only when 2 things are true.
//Write a JavaScript program that runs when 1 of 2 things are true.
//Write a JavaScript program that runs when both things are not true.e strict";
