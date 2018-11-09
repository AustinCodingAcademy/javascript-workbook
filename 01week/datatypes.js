"use strict";
const assert = require("assert");
// console.log(assert);

//____________________________________________________________________________________________________________
// Write a JavaScript program to display the current day and time.
function displayDayAndTime() {
  var today = new Date();
  var day = today.getDay();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  console.log("Today is : " + days[day] + ".");
  console.log("Current Time : " + hour + " : " + minute + " : " + second);

  return 1;
}

describe("displayDayAndTime", () => {
  it("should show the current day and time", () => {
    assert(displayDayAndTime() === 1);
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program to convert a number to a string.

// solution
function numberToString(num) {
  let str = num.toString();
  return str;
}

// tests
describe("numberToString", () => {
  it("should take any number and turn it into a string", () => {
    assert.equal(typeof numberToString(12345), "string");
  });
  it("the string returned should be the same as the number inputted", () => {
    assert.strictEqual(numberToString(12345), "12345");
    assert.notStrictEqual(numberToString(12345), "54321");
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program to convert a string to the number.

// solution
function stringToNumber(str) {
  let num = Number(str);
  return num;
}

// tests
describe("stringToNumber", () => {
  it("should take any string and turn it into a number", () => {
    assert.equal(typeof stringToNumber("12345"), "number");
  });
  it("the number returned should be the same as the string inputted", () => {
    assert.strictEqual(stringToNumber("12345"), 12345);
    assert.notStrictEqual(stringToNumber("12345"), 54321);
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

// solution
function getDataType(val) {
  let type = typeof val;

  if (type === "boolean") return type;
  if (type === "number") return type;
  if (type === "string") return type;
  if (type === "object") return "null";

  return type;
}

describe("getDataType", () => {
  it("should return a boolean", () => {
    assert.equal(getDataType(true), "boolean");
  });
  it("should return null", () => {
    assert.equal(getDataType(null), "null");
  });
  it("should return undefined", () => {
    assert.equal(getDataType(undefined), "undefined");
  });
  it("should return a number", () => {
    assert.equal(getDataType(12), "number");
  });
  it("should return nan", () => {
    assert(isNaN(getDataType()));
  });
  it("should return a string", () => {
    assert.equal(getDataType("this is a string"), "string");
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program that adds 2 numbers together.

// solution
function add(num1, num2) {
  return num1 + num2;
}

describe("add", () => {
  it("the value returned should be a number", () => {
    assert.equal(typeof add(2, 2), "number");
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program that runs only when 2 things are true.

// solution
function runWhenBothTrue(val1, val2) {
  if (val1 && val2) return 1;
  else return 0;
}

describe("runWhenBothTrue", () => {
  it("should return 1 or 0 (number)", () => {
    assert.equal(typeof runWhenBothTrue(true, true), "number");
  });
  it("should return 1 if condition is met", () => {
    assert.equal(runWhenBothTrue(true, true), 1);
  });
  it("should return 0 if condition is not met", () => {
    assert.equal(runWhenBothTrue(false, true), 0);
    assert.equal(runWhenBothTrue(true, false), 0);
    assert.equal(runWhenBothTrue(false, false), 0);
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program that runs when 1 of 2 things are true.

// solution
function runWhenAnyTrue(val1, val2) {
  if (val1 || val2) return 1;
  else return 0;
}

describe("runWhenAnyTrue", () => {
  it("should return 1 or 0 (number)", () => {
    assert.equal(typeof runWhenAnyTrue(true, false), "number");
  });
  it("should return 1 if condition is met", () => {
    assert.equal(runWhenAnyTrue(false, true), 1);
    assert.equal(runWhenAnyTrue(true, false), 1);
    assert.equal(runWhenAnyTrue(true, true), 1);
  });
  it("should return 0 if condition is not met", () => {
    assert.equal(runWhenAnyTrue(false, false), 0);
  });
});

//____________________________________________________________________________________________________________
// Write a JavaScript program that runs when both things are not true.

// solution
function runWhenBothFalse(val1, val2) {
  if (val1 === false && val2 === false) return 1;
  else return 0;
}

describe("runWhenBothFalse", () => {
  it("should return 1 or 0 (number)", () => {
    assert.equal(typeof runWhenBothFalse(false, false), "number");
  });
  it("should return 1 if condition is met", () => {
    assert.equal(runWhenBothFalse(false, false), 1);
  });
  it("should return 0 if condition is not met", () => {
    assert.equal(runWhenBothFalse(false, true), 0);
    assert.equal(runWhenBothFalse(true, false), 0);
    assert.equal(runWhenBothFalse(true, true), 0);
  });
});
