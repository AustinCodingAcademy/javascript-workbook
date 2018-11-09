const assert = require("assert");
console.log(assert);

// Write a JavaScript program to display the current day and time.

//Solution
function dateAndTime() {
  let date = new Date().toString();
  console.log(date);
  return date;
}

//Test
if (typeof describe === "function") {
  describe("currentDateAndTime", () => {
    it("should display current date and time", () => {
      const now = new Date().toString();
      assert.equal(dateAndTime(), now);
    });
  });
}

// Write a JavaScript program to convert a number to a string.

//Solution
function numberToString(num) {
  return num.toString();
}

//Test
if (typeof describe === "function") {
  describe("numberToString", () => {
    it("converts a number to a string.", () => {
      assert.equal(typeof numberToString(12345), "string");
    });
    it("the number and the string are the same.", () => {
      assert.notStrictEqual(numberToString(54321), 12345);
      assert.notStrictEqual(numberToString(12345), 12345);
      assert.strictEqual(numberToString(12345), "12345");
    });
  });
}

// Write a JavaScript program to convert a string to the number.
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
// Write a JavaScript program that adds 2 numbers together.
// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.
