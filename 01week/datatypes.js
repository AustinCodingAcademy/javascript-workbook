"use strict";
const assert = require("assert");

// Write a JavaScript program to display the current day and time.

// Write a JavaScript program to convert a number to a string.

//Solution
function numberToString(anyNumberAtAll) {
  console.log(anyNumberAtAll, "Number being inputted");
  return anyNumberAtAll.toString();
}

describe("numberToString", () => {
  it("should take any number and convert it into a string", () => {
    assert.equal(typeof numberToString(12345), "string");
  });
  it("the string should be the same as the number inputted", () => {
    assert.strictEqual(numberToString(12345), "12345");
    assert.notStrictEqual(numberToString(12345), "54321");
  });
});

// Write a JavaScript program to convert a string to the number.

//Solution
function stringToNumber(anyStringAtAll) {
  console.log(anyStringAtAll, "String being inputted");
  return Number(anyStringAtAll);
}

describe("stringToNumber", () => {
  it("should take any string and convert to a number", () => {
    assert.equal(typeof stringToNumber("1234"), "number");
  });
  it("the number should be the same as the string inputted", () => {
    assert.strictEqual(stringToNumber("1234"), 1234);
    assert.notStrictEqual(stringToNumber("1234"), "number");
  });
});

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
function typeOfDataType(anyStringAtAll) {
  console.log(anyStringAtAll, "Data type");
  return typeof "string";
}
describe("typeOfDataType", () => {
  it("if true or false statement say Boolean", () => {
    assert.notStrictEqual(typeOfDataType("boolean"), true);
  });
  it("if no value then say Null", () => {
    assert.strictEqual(typeOfDataType("object"), Null);
  }
});
//     Boolean

//     Null

//     Undefined

//     Number

//     NaN

//     String

// Write a JavaScript program that adds 2 numbers together.

// Write a JavaScript program that runs only when 2 things are true.

// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a JavaScript program that runs when both things are not true.
