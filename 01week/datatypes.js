"use strict";
const assert = require("assert");

// Write a JavaScript program to display the current day and time.no test for this one

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

// Write a JavaScript program to convert a number to a string.

//Solution
function numbertoString(anyNumberAtAll) {
  console.log(anyNumberAtAll, "Number being inputted");

  return anyNumberAtAll.toString();
}

describe("numberToString", () => {
  it("should take any number and turn it into a string", () => {
    assert.equal(typeof numbertoString(12345), "string");
  });
  it("the string should be the same as the number inputted", () => {
    assert.strictEqual(numbertoString(12345), "12345");
    assert.notStrictEqual(numbertoString(12345), "54321");
  });
});

// Write a JavaScript program to convert a string to the number.
//Solution
function stringToNumber(matrix) {
  return Number(matrix);
}

describe("stringToNumber", () => {
  it("should take any string and turn it into a number", () => {
    assert.equal(typeof stringToNumber("1234"), "number");
  });
  it("the number should be the same as the string inputted", () => {
    assert.strictEqual(stringToNumber("1234"), 1234);
    assert.notStrictEqual(stringToNumber("1234"), 4321);
  });
});
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean

function checkDataType(myVar) {
  return myVar;
}
describe("checkDataType", () => {
  it("should take any different datatypes and print out as boolean", () => {
    assert.equal(typeof checkDataType(true), "boolean");
  });
});

// Null
function checkDataType(koloroweZero) {
  return typeof koloroweZero;
}
describe("checkDataType", () => {
  it("tell you if value is Null", () => {
    assert.equal(checkDataType(null), "object");
  });
});

//important ! The only way to test for null would be a direct comparison with the null value, using the === operator.

//Undefined
function checkDataType(checkUnf) {
  return checkUnf;
}
describe("checkDataType", () => {
  it("should take any different datatypes and print out as undefined", () => {
    assert.equal(typeof checkDataType(undefined), "undefined");
  });
});

// Number

function checkDataType(nanNumber) {
  return nanNumber;
}
describe("checkDataType", () => {
  it("should take any different datatypes and print out as number", () => {
    assert.equal(typeof checkDataType(NaN), "number");
  });
});

// NaN
function checkDataType(nanTest) {
  return nanTest;
}
describe("checkDataType", () => {
  it("tell you if value is Nan", () => {
    assert.equal(isNaN("l123"), true);
  });
});
// String

function checkDataType(stringTest) {
  return stringTest;
}
describe("checkDataType", () => {
  it("should take any different datatypes and print out as string", () => {
    assert.equal(typeof checkDataType("John"), "string");
  });
});

// Write a JavaScript program that adds 2 numbers together.

const add = (x, y) => +x + +y;
describe("add", () => {
  it("correctly calculates the sum of 1 and 3", () => {
    assert.equal(typeof add("1", "3"), 4);
    it("correctly calculates the sum of 1 and 3", () => {
      assert.equal(add(1, 3), 4);
    });
  });

  it("correctly calculates the sum of 1 and 3", () => {
    assert.equal(add(1, 3), 4);
  });
});
it("correctly calculates the sum of -1 and -1", () => {
  assert.equal(add(-1, -1), -2);
});

// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.

let a = true;
let b = true;
let c = false;
let d = false;

function programRun(a, b) {
  const result = true;
  if (a && b) {
    return "that runs only when 2 things are true";
  }
  return result;
}
console.log(programRun(a, b));

function programRun(a, b) {
  const result = true;
  {
    if (a || b) {
      return "runs when 1 of 2 things are true";
    }
    return result;
  }

  console.log(programRun(a, b));

  function programRun(c, d) {
    const result = false;
    if (!c && !d) {
      return "both are not true";
    }
    return result;
  }
  console.log(programRun(c, d));
}
