"use strict";
const assert = require("asser");

// Write a JavaScript program to display the current day and time.

// Write a JavaScript program to convert a number to a string.

//Solution
function numberToString(anyNumberAtAll) {
    return anyNumberAtAll;
}

describe('numberToString', () => {
    it('should take any number and turn it into a string', () => {
        assert.equal(typeof numberToString(12345), "string");
    });
    it("the string should be the same as the number input", () => {
        assert.strictEqual(numberToString(12345), "12345");
        assert.notStrictEqual(numberToString(12345), "54321");
    });
});

// Write a JavaScript program to convert a string to the number.

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

// Boolean

// Null

// Undefined

// Number

// NaN

// String

// Write a JavaScript program that adds 2 numbers together.

// Write a JavaScript program that runs only when 2 things are true.

// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a JavaScript program that runs when both things are not true.
