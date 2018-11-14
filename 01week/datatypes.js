"use strict";
const assert = require("assert");

// Write a JavaScript program to convert a number to a string.

//Soultion
function numberToString(anyNumberAtAll) {
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

function stringToNumber(num) {
  let parsedNum = parseInt(num, 10);
  return parsedNum;
}

describe("stringToNumber", () => {
  it("should take any string and turn it into a number", () => {
    assert.equal(typeof stringToNumber("12345"), "number");
  });
  it("should no when a string can't be turned into a number", () => {
    assert.equal(isNaN(stringToNumber("word")), true);
  });
  it("the string inputted should number outputted", () => {
    assert.strictEqual(stringToNumber("12345"), 12345);
    assert.notStrictEqual(stringToNumber("12345"), 54321);
  });
});

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

function displayType(input) {
  let display = typeof input;
  if (input === null) {
    display = "null";
  }

  if (display === "number" && isNaN(input)) {
    display = NaN;
  }
  console.log(display);

  return display;
}

// Boolean

// Null

// Undefined

// Number

// NaN

// String

describe("displayType", () => {
  it("should return boolean if boolean", () => {
    assert.equal(displayType(true), "boolean");
  });
  it("should return null if null", () => {
    assert.equal(displayType(null), "null");
  });
  it("should return undefined if undefined", () => {
    assert.equal(displayType(), "undefined");
  });
  it("should return number if number", () => {
    assert.equal(displayType(10), "number");
  });
  it("should return NaN if NaN", () => {
    assert.equal(isNaN(displayType(NaN)), true);
  });
  it("should return string if string", () => {
    assert.equal(displayType("string"), "string");
  });
});

// Write a JavaScript program that adds 2 numbers together.

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

describe("addTwoNumbers", () => {
  it("should add two numbers", () => {
    assert.equal(addTwoNumbers(1, 2), 3);
    assert.equal(addTwoNumbers(10, 20), 30);
  });
  it("should be able to add negative numbers", () => {
    assert.equal(addTwoNumbers(-5, 10), 5);
  });
});

// Write a JavaScript program that runs only when 2 things are true.

function bothTrue(con1, con2) {
  if (con1 && con2) {
    return "run";
  }
  return "don't run";
}

describe("bothTrue", () => {
  it("should display run if both conditions are true", () => {
    assert.equal(bothTrue("hello", 5), "run");
  });
});

// Write a JavaScript program that runs when 1 of 2 things are true.

function oneTrue(con1, con2) {
  if (!!con1 && !con2) {
    return "run";
  }
  return "don't run";
}

describe("oneTrue", () => {
  it("should display run if one condition is true and the other is false", () => {
    assert.equal(oneTrue(true, false), "run");
  });
});

// Write a JavaScript program that runs when both things are not true.

function bothFalse(con1, con2) {
  if (!con1 && !con2) {
    return "run";
  }
  return "don't run";
}

describe("bothFalse", () => {
  it("should display run if both conditions are false", () => {
    assert.equal(bothFalse(false, false), "run");
  });
});
