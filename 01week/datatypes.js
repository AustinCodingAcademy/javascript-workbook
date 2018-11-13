"use strict";
const assert = require("assert");

// Write a JavaScript program to display the current day and time.
function returnsDate() {
  let currentDate = Date();
  return currentDate;
}
console.log(returnsDate());

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
function checkDataType(var1) {
  var type = typeof (var1);
  return type;
}

//     Boolean
describe("checkDataType", () => {
  it("tell you if value is Boolean", () => {
    assert.equal(checkDataType(true), "boolean")
  })
})

//     Null
describe("checkDataType", () => {
  it("tell you if value is Null", () => {
    assert.equal(checkDataType(null), "object");
  });
});

//     Undefined
describe("checkDataType", () => {
  it("tell you if value is undefined", () => {
    assert.equal(checkDataType(undefined), "undefined");
  });
});
//     Number
describe("checkDataType", () => {
  it("tell you if value is a number", () => {
    assert.equal(checkDataType(1234), "number")
  })
})
//     NaN
describe("checkDataType", () => {
  it("tell you if value is Nan", () => {
    assert.equal(isNaN("l123"), true)
  });
});

//     String
describe("checkDataType", () => {
  it("tell you if value is a string", () => {
    assert.equal(checkDataType("string"), "string")
  });
});
// Write a JavaScript program that adds 2 numbers together.
let num1 = 1;
let num2 = 2;

function addition(val1, val2) {
  let addedNum = 0;
  addedNum = parseInt(val1 + val2);
  let type = typeof addedNum;
  return type;
};
describe("addition", () => {
  it("tell you if value is a number", () => {
    assert.equal(addition(num1, num2), "number");
  });
});

// Write a JavaScript program that runs only when 2 things are true.
let bool1 = true;
let bool2 = true;

function checkIfBothBooleansAreTrue(val1, val2) {
  var passed = false;
  if (val1 === true && val2 === true) {
    passed = true;
  }
  return passed;
};
describe("checkIfBothBooleansAreTrue", () => {
  it("tell you if both values are true", () => {
    assert.equal(checkIfBothBooleansAreTrue(bool1, bool2), true);
  });
});
// Write a JavaScript program that runs when 1 of 2 things are true.
let bool3 = true;
let bool4 = true;

function checkIfOneBooleanIsTrue(val1, val2) {
  var passed = false;
  if (val1 === true || val2 === true) {
    passed = true;
  }
  return passed;
};
describe("checkIfOneBooleanIsTrue", () => {
  it("tell you if one value is true", () => {
    assert.equal(checkIfOneBooleanIsTrue(bool3, bool4), true);
  });
});
// Write a JavaScript program that runs when both things are not true.
let bool5 = false;
let bool6 = false;

function checkIfBothBooleansAreFalse(val1, val2) {
  var passed = false;
  if (val1 === false && val2 === false) {
    passed = true;
  }
  return passed;
};
describe("checkIfBothBooleansAreFalse", () => {
  it("tell you if both values are false", () => {
    assert.equal(checkIfBothBooleansAreFalse(bool5, bool6), true);
  });
});