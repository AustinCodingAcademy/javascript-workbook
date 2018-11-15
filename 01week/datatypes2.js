"use strict"
const assert = require("assert");

//Write a JavaScript program to display the current day and time

function currentDateAndTime() {
  let currentDate = Date();
  return currentDate;
}
console.log(currentDateAndTime());
//Write a Javascript program to convert a number to a string.
function numberToString(anyNumberAtAll) {
  console.log(anyNumberAtAll, " I am a Number");
  return anyNumberAtAll.toString();
}
describe("numberToString", () => {
  it("should take any number and convert into a string", () => {
    assert.equal(typeof numberToString(123), "string");
  });
});
//Write a javaScript program that coverts a string to a number.
function stringToNumber(anyStringAtAll) {
  console.log(anyStringAtAll, "String being entered");
  return Number(anyStringAtAll);
}
describe("stringToNumber", () => {
  it("take any string and convert to a number", () => {
    assert.equal(typeof stringToNumber("1234"), "number");
  });
  it("the number should be the same as the string", () => {
    assert.equal(stringToNumber("1234"), 1234);
  });
});
//Write a javascript program that takes in different datatypes and prints out what type they are
function checkDataType(var1) {
  var type = typeof (var1);
  return type;
}
//Boolean
describe("checkDataType", () => {
  it("Boolean Datatype", () => {
    assert.equal(checkDataType(true), "boolean");
  });
});
//Null
describe("checkDataType", () => {
  it("Null Datatype", () => {
    assert.equal(checkDataType(null), "object");
  });
});
//Undefined
describe("checkDataType", () => {
  it("Undefined Datatype", () => {
    assert.equal(checkDataType(undefined), "undefined");
  });
});
//Number
describe("checkDataType", () => {
  it("Number Datatype", () => {
    assert.equal(checkDataType(1234), "number");
  });
});
//NaN
describe("checkDataType", () => {
  it("NaN DataType", () => {
    assert.equal(isNaN("hotrod123"), true);
  });
});
//String
describe("checkDataType", () => {
  it("String Datatype", () => {
    assert.equal(checkDataType("string"), "string");
  });
});
//write a javascript program that adds 2 numbers together
let num1 = 45;
let num2 = 54;

function addTwoNumbers(val1, val2) {
  let addedNumbers = 0;
  addedNumbers = parseInt(val1 + val2);
  let type = typeof addedNumbers;
  return type;
};
describe("addTwoNumbers", () => {
  it("adds two numbers togther", () => {
    assert.equal(addition(num1, num2), "number");
  });
});