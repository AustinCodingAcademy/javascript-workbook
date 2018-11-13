"use strict";
const assert = require("assert");
//console.log(assert);

// Write a JavaScript program to display the current day and time.

// Solution
function displayDateAndTime() {
  let currentDateAndTime = new Date().toString();
  console.log(currentDateAndTime);
  return currentDateAndTime;
}

describe("displayDateAndTime", () => {
  it("should display the current day and time", () => {
    assert.strictEqual(displayDateAndTime(), new Date().toString());
  });
});

// Write a JavaScript program to convert a number to a string.

// Solution
function numberToString(anyNumberAtAll) {
  let result = anyNumberAtAll.toString();
  console.log("input: " + anyNumberAtAll + " result: " + result);
  return result;
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
  let result = parseFloat(stringNumber);
  console.log("input: " + stringNumber + " result: " + result);
  return result;
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
    assert.notStrictEqual(stringToNumber("4"), 12345);
  });
});

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

function datatypeTest(unknownDatatype) {
  let result = typeof unknownDatatype;
  if (result === "object") {
    result = "null";
  } else if (
    result !== "string" &&
    result !== "undefined" &&
    isNaN(unknownDatatype)
  ) {
    result = "NaN";
  }
  console.log("input: " + unknownDatatype + " result: " + result);
  return result;
}

describe("datatypeTest", () => {
  // Boolean
  it("should take a boolean and return 'boolean'", () => {
    assert.equal(datatypeTest(true), "boolean");
  });
  // Null
  it("should take a null and return 'null'", () => {
    assert.equal(datatypeTest(null), "null");
  });
  // Undefined
  it("should take an undefined return 'undefined'", () => {
    assert.equal(datatypeTest(), "undefined");
  });
  // Number
  it("should take a number return 'number'", () => {
    assert.equal(datatypeTest(12345), "number");
  });
  // NaN
  it("should take a NaN and return 'NaN'", () => {
    assert.equal(datatypeTest(parseFloat("dog")), "NaN");
  });
  // String
  it("should take a string and return 'string'", () => {
    assert.equal(datatypeTest("Hello World!"), "string");
  });
});

// Write a JavaScript program that adds 2 numbers together.

// Solution

function addNumbers(num1, num2) {
  let result = NaN;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  }
  console.log("num1: " + num1 + " num2: " + num2 + " result: " + result);
  return result;
}

describe("addNumbers", () => {
  // Boolean
  it("should sum a boolean and return NaN", () => {
    assert.equal(isNaN(addNumbers(true, 12)), true);
  });
  // Null
  it("should sum a null and return NaN", () => {
    assert.equal(isNaN(addNumbers(null, 4)), true);
  });
  // Undefined
  it("should sum an undefined and return NaN", () => {
    assert.equal(isNaN(addNumbers(undefined, -1)), true);
  });
  // Numbers
  it("should sum two numbers and return the sum", () => {
    assert.strictEqual(addNumbers(-6, 4), -2);
  });
  // NaN
  it("should sum a NaN and return NaN", () => {
    assert.equal(isNaN(addNumbers(NaN, 15)), true);
  });
  // String
  it("should sum a string and return NaN", () => {
    assert.equal(isNaN(addNumbers("Hello World", 25)), true);
  });
});

// Write a JavaScript program that runs only when 2 things are true.

// Solution

function bothTrue(condition1, condition2) {
  console.log("condition1: " + condition1 + " condition2: " + condition2);
  if (
    typeof condition1 === "boolean" &&
    typeof condition2 === "boolean" &&
    !!condition1 &&
    !!condition2
  ) {
    console.log("success!!!");
    return "success!!!";
  }
}

describe("bothTrue", () => {
  it("should run when two things are true", () => {
    assert.strictEqual(bothTrue(true, true), "success!!!");
  });
  it("should fail when one thing is true and the other is false", () => {
    assert.strictEqual(bothTrue(true, false), undefined);
  });
  it("should fail when both things are false", () => {
    assert.strictEqual(bothTrue(false, false), undefined);
  });
  it("should fail when an input is not a boolean", () => {
    assert.strictEqual(bothTrue(5, undefined), undefined);
  });
});

// Write a JavaScript program that runs when 1 of 2 things are true.

// Solution

function oneTrue(condition1, condition2) {
  console.log("condition1: " + condition1 + " condition2: " + condition2);
  if (
    typeof condition1 === "boolean" &&
    typeof condition2 === "boolean" &&
    (!!condition1 || !!condition2)
  ) {
    console.log("success!!!");
    return "success!!!";
  }
}

describe("oneTrue", () => {
  it("should run when two things are true", () => {
    assert.strictEqual(oneTrue(true, true), "success!!!");
  });
  it("should run when one thing is true and the other is false", () => {
    assert.strictEqual(oneTrue(true, false), "success!!!");
  });
  it("should fail when both things are false", () => {
    assert.strictEqual(oneTrue(false, false), undefined);
  });
  it("should fail when an input is not a boolean", () => {
    assert.strictEqual(oneTrue(5, undefined), undefined);
  });
});

// Write a JavaScript program that runs when both things are not true.

// Solution

function neitherTrue(condition1, condition2) {
  console.log("condition1: " + condition1 + " condition2: " + condition2);
  if (
    typeof condition1 === "boolean" &&
    typeof condition2 === "boolean" &&
    !condition1 &&
    !condition2
  ) {
    console.log("success!!!");
    return "success!!!";
  }
}

describe("neitherTrue", () => {
  it("should fail when two things are true", () => {
    assert.strictEqual(neitherTrue(true, true), undefined);
  });
  it("should fail when one thing is true and the other is false", () => {
    assert.strictEqual(neitherTrue(true, false), undefined);
  });
  it("should run when both things are false", () => {
    assert.strictEqual(neitherTrue(false, false), "success!!!");
  });
  it("should fail when an input is not a boolean", () => {
    assert.strictEqual(neitherTrue(5, undefined), undefined);
  });
});
