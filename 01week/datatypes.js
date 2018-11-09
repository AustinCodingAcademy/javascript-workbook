"use strict";
const assert = require("assert");
console.log(assert);

// Write a JavaScript program to display the current day and time.

// Write a JavaScript program to convert a number to a string.

// Solution
function numberToString(anyNumberAtAll) {
  console.log(anyNumberAtAll, "Number being inputted");
  return anyNumberAtAll.toString();
}

describe("numberToString", () => {
  it("should take any number and turn it into a string", () => {
    assert.equal(typeof numberToString(12345), "string");
  });
  it("the string should be the same as the number inputted", () => {
    assert.strictEqual(numberToString(12345), "12345");
    assert.notStrictEqual(numberToString(12345), "54321");
  });
});

// Write a JavaScript program to convert a string to the number.

//Solution
function stringToNumber(stringNumber) {
  return parseFloat(stringNumber);
}

describe("stringToNumber", () => {
  it("should take any string and turn it into a number", () => {
    assert.equal(typeof stringToNumber("4"), "number");
  });
  it("should return NaN when the string contains no number", () => {
    assert.strictEqual(stringToNumber("dog"), NaN);
  });
  it("the number should be the same as the string inputted", () => {
    assert.strictEqual(stringToNumber("4"), 4);
    assert.notStrictEqual(stringToNumber("4"), 40);
  });
});

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

function datatypeTest(unknownDatatype) {
  let result = typeof unknownDatatype;
  if (isNaN(unknownDatatype)) {
    result = "NaN";
  }
  console.log(result);
  return result;
}

describe("datatypeTest", () => {
  it("should take a boolean and return 'boolean'", () => {
    assert.equal(datatypeTest(true), "boolean");
  });
  it("should take a null and return 'null'", () => {
    assert.equal(datatypeTest(null), "object");
  });
  it("should take an undefined return 'undefined'", () => {
    assert.equal(datatypeTest(), "undefined");
  });
  it("should take a number return 'number'", () => {
    assert.equal(datatypeTest(12345), "number");
  });
  it("should take a NaN and return 'NaN'", () => {
    assert.equal(datatypeTest(parseFloat("dog")), "NaN");
  });
  it("should take a string and return 'string'", () => {
    assert.equal(datatypeTest("Hello World!"), "string");
  });
});

// Write a JavaScript program that adds 2 numbers together.
// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.
