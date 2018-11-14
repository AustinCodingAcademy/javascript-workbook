"use strict";
const assert = require("assert");
// Write a JavaScript program to display the current day and time.

// Write a JavaScript program to convert a number to a string.

//solution
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
function stringToNumber(num) {
  var anyString = parseInt(num, 12345);
  console.log(stringToNumber, "String to number");
  return anyString;
}
describe("stringToNumber", () => {
  it("should convert a string to the number", () => {
    assert.equal(typeof stringToNumber("12345"), "number");
  });
});
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//     Boolean
function checkDataType() {}
describe("checkDataType", () => {
  it("should take any variable and check if its bool", () => {
    let checkDataType = typeof true;
  });
});
//     Null
function nullNada() {}
describe("nullNada", () => {
  it("should identify if datatype is null", () => {
    let nullNada = typeof false;
  });
});
//     Undefined
function checkUndefined() {}
describe("checkUndefined", () => {
  it("should identify if undefined", () => {
    let checkUndefined = undefined;
  });
});
//     Number
function findNumber() {}
describe("findNumber", () => {
  it("should identify if datatype is a number", () => {
    let findNumber = Number;
  });
});
//     NaN
function youDontKnowNaN() {}
describe("youDontKnowNaN", () => {
  it("should identify if NaN", () => {
    let youDontKnowNaN = NaN;
  });
});
//     String
function checkString() {}
describe("checkString", () => {
  it("should identify if NaN", () => {
    let checkString = String;
  });
});
// Write a JavaScript program that adds 2 numbers together.
var x = 5;
var y = 2;
var z = x + y;
function addTwoNumbers() {}
describe("addTwoNumbers", () => {
  it("should add two numbers", () => {
    let addTwoNumbers = "z";
  });
});

// Write a JavaScript program that runs only when 2 things are true.
var x = Boolean;
var y = Boolean;
var z = x + y;
function trueBoo() {}
describe("trueBoo", () => {
  it("should be true boo", () => {
    let trueBoo = "z";
  });
});

// Write a JavaScript program that runs when 1 of 2 things are true.
var x = Boolean;
var y = undefined;
var z = x + y;
function BooOrFalse() {}
describe("BooOrFalse", () => {
  it("should be true o r f a l s e", () => {
    let trueBoo = "z";
  });
});
// Write a JavaScript program that runs when both things are not true.
var bool1 = false;
var bool2 = false;
function bothThingsFalse(x, y) {
  if (!x && !y) {
    return "both are not true";
  }
  return success;
}
describe("bothThingsFalse", () => {
  it("should be both false", (x, y) => {
    let bothThingsFalse = typeof false;
  });
});
