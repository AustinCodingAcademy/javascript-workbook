"use strict";
const assert = require("assert");

// Write a JavaScript program to display the current day and time.

// get a new date (locale machine date time)
const day = new Date();
// get the date as a string
const n = day.toDateString();
// get the time as a string
const time = day.toLocaleTimeString();

console.log("day:", n);
console.log("time:", time);

// Write a JavaScript program to convert a number to a string.

//Solution
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
function stringToNumber(anyStrAtAll) {
  console.log(anyStrAtAll, "String being inputted");
  return Number(anyStrAtAll);
}

describe("stringToNumber", () => {
  it("should take any string and turn it into a number", () => {
    assert.equal(typeof stringToNumber("1234"), "number");
  });
  it("the number should be the same as the string inputted", () => {
    assert.strictEqual(stringToNumber("1234"), 1234);
    assert.notStrictEqual(stringToNumber("1234"), "number");
  });
});

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
function dataTypeChecker(value) {
  return typeof value;
}

console.log(dataTypeChecker(true));

describe("dataTypeChecker", () => {
  it("should check to see if data type is boolean", () => {
    assert.equal(dataTypeChecker(true), "boolean");
  });
});
// Null
console.log(dataTypeChecker(null));

describe("dataTypeChecker", () => {
  it("should check to see if data type is null object", () => {
    assert.equal(dataTypeChecker(null), "object");
  });
});
// Undefined
console.log(dataTypeChecker(undefined));

describe("dataTypeChecker", () => {
  it("should check to see if data type is undefined", () => {
    assert.equal(dataTypeChecker(undefined), "undefined");
  });
});

// Number
console.log(dataTypeChecker(12345));

describe("dataTypeChecker", () => {
  it("should check to see if data type is number", () => {
    assert.equal(dataTypeChecker(12345), "number");
  });
});

// NaN

console.log(dataTypeChecker(isNaN("hello" * 7)));

describe("dataTypeChecker", () => {
  it("should check to see if data type is NaN", () => {
    assert.equal(dataTypeChecker(isNaN("hello" * 7)), "NaN");
  });
});
// String
console.log(dataTypeChecker("hello world"));

describe("dataTypeChecker", () => {
  it("should check to see if data type is string", () => {
    assert.equal(dataTypeChecker("hello world"), "string");
  });
});

// Write a JavaScript program that adds 2 numbers together.

// Write a JavaScript program that runs only when 2 things are true.

// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a JavaScript program that runs when both things are not true.
