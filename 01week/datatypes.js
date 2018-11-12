"use strict";
const assert = require("assert");
console.log(assert);

// Write a JavaScript program to display the current day and time.
function displayCurrentDateTime() {
  return Date();
}
var date = displayCurrentDateTime();
console.log(date);

// Write a JavaScript program to convert a number to a string.
//Solution
function numberToString(num) {
  return String(num);
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
function stringToNumber(str) {
  return parseInt(str);
}

describe("stringToNumber", () => {
  it("should take any string and turn it into a number", () => {
    assert.equal(typeof stringToNumber("12345"), "number");
  });

  it("the number should be the same as the string inputted", () => {
    assert.strictEqual(stringToNumber("12345"), 12345);
    assert.notStrictEqual(stringToNumber("12345"), 54321);
  });
});

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
function checkDataType(anyVar) {
  var type = typeof anyVar;
  return type;
}
// Boolean
describe("checkDataType", () => {
  it("should take any variable and check if it is bool", () => {
    assert.equal(checkDataType(true), "boolean");
  });
});

// Null
describe("checkDataType", () => {
  it("should take any variable and check if it is null", () => {
    assert.equal(checkDataType(null), "object");
  });
});

// Undefined
describe("checkDataType", () => {
  it("should take any variable and check if it is undefined", () => {
    assert.equal(checkDataType(), "undefined");
  });
});

// Number
describe("checkDataType", () => {
  it("should take any variable and check if it is a number", () => {
    assert.equal(checkDataType(123), "number");
  });
});

// NaN
describe("checkDataType", () => {
  it("should take any variable and check if it is NaN", () => {
    assert.equal(isNaN("string"), true);
  });
});

// String
describe("checkDataType", () => {
  it("should take any variable and check if it is a String", () => {
    assert.equal(checkDataType("this is a string"), "string");
  });
});

// Write a JavaScript program that adds 2 numbers together.
let num1 = 4;
let num2 = 3;
function addTwoNumbers(num1, num2) {
  return parseInt(num1 + num2);
}
describe("addTwoNumbers", () => {
  it("check if num1 is a number", () => {
    console.log("num1 equals " + num1);
    assert.equal(checkDataType(num1), "number");
  });
  it("check if num2 is a number", () => {
    console.log("num2 equals " + num2);
    assert.equal(checkDataType(num2), "number");
  });
  it("check if both numbers added togther is a number", () => {
    assert.equal(typeof addTwoNumbers(num1, num2), "number");
  });
});

// Write a JavaScript program that runs only when 2 things are true.
let bool1 = true;
let bool2 = true;
function checkIfTwoBoolsAreTrue(var1, var2) {
  var success = false;
  if (var1 === true && var2 === true) {
    success = true;
  }
  return success;
}
describe("checkIfTwoBoolsAreTrue", () => {
  it("check if bool1 is a boolean", () => {
    assert.equal(checkDataType(bool1), "boolean");
  });
  it("check if bool2 is a boolean", () => {
    assert.equal(checkDataType(bool2), "boolean");
  });
  it("both bools should be True", () => {
    assert.equal(checkIfTwoBoolsAreTrue(bool1, bool2), true);
  });
});

// Write a JavaScript program that runs when 1 of 2 things are true.
var bool3 = true;
var bool4 = false;
function checkIfAnyBoolsAreTrue(var1, var2) {
  var success = false;
  if (var1 === true || var2 === true) {
    success = true;
    return success;
  }
}
describe("checkIfAnyBoolsAreTrue", () => {
  it("check if bool3 is a boolean", () => {
    assert.equal(checkDataType(bool3), "boolean");
  });
  it("check if bool4 is a boolean", () => {
    assert.equal(checkDataType(bool4), "boolean");
  });
  it("any bools should be True", () => {
    assert.equal(checkIfAnyBoolsAreTrue(bool3, bool4), true);
  });
});
// Write a JavaScript program that runs when both things are not true.
var bool5 = false;
var bool6 = false;
function checkIfBothBoolsAreFalse(var1, var2) {
  var success = false;
  if (var1 === false && var2 === false) {
    success = true;
    return success;
  }
}
describe("checkIfBothBoolsAreFalse", () => {
  it("check if bool3 is a boolean", () => {
    assert.equal(checkDataType(bool5), "boolean");
  });
  it("check if bool4 is a boolean", () => {
    assert.equal(checkDataType(bool6), "boolean");
  });
  it("any bools should be True", () => {
    assert.equal(checkIfBothBoolsAreFalse(bool5, bool6), true);
  });
});
