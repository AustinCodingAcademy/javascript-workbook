n'use strict';

var assert = require('assert');

// ****
// Basic Data Types
// ****

// Problem 0:
// To start out we are declaring a variable named myUndefined
// Note that we are not assigning a value, so it is undefined.

var myUndefined;

// Problem 1:
// Let's create a new variable named myNull and give it the value null.
//
// What is the difference between null and undefined?
var myNull = null;

// Problem 2:
// Let's create a new variable named myTrue and give it the value true.

var myTrue = true;

// Problem 3:
// Let's create a new variable named myFalse and give it the value false.

var myFalse = false;

// Problem 4:
// Let's create a new variable named myNumber. Assign it a number.

var myNumber = 13;

// Problem 5:
// Let's create a new variable named myString. Assign it a string.

var myString = "Welcome to my world.";

// ****
// Boolean Operators
// ****

// Problem 6:
// What is the value of true && true

var trueAndTrue = true;

// Problem 7:
// What is the value of false && true

var falseAndTrue;
false
// Problem 8:
// What is the value of true && false

var trueAndFalse;
false
// Problem 9:
// What is the value of false && false

var falseAndFalse;
false
// Problem 10:
// What is the value of true || true

var trueOrTrue;
true

// Problem 11:
// What is the value of false || true

var falseOrTrue;
true

// Problem 12:
// What is the value of true || false

var trueOrFalse;
true

// Problem 13:
// What is the value of false || false

var falseOrFalse;
false

// Problem 14:
// What is the value of !false

var notFalse;
true

// Problem 15:
// What is the value of !true

var notTrue;
false

// Problem 16:
// What is the value of !!true

var notNotTrue;
true

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the difference between the "and" and the "or" operators? Explain why you would use each of them.
//
// Your Answer Goes Here:
// Both operators "and" (&&), "or" (||), print out the results of multiple boolean values.
// 1. The "and" tests the values and all values must return true in order for the operator to be true. So for example if i log into Tinder
// and want to find a female who is interested in a male, i would need to anwser true to both the Male value in the gender input box
// and true to the Female value in the Gender Seeking input box. If either of those values proof false I will end up on a peculiar date.
//
// 2. The "or" tests to see if any values in the multiple boolean are true. If a single one proves true, than the operator will return true.
// A real world example would be when a website ask if you are either 18 Years Old or Older or have Parental Concent to be accessing the material
// within the website. If you are answer either value as true, you will advance into the site. If both values are false you will not advance.
//
//****

// ****
// Truthiness
// ****

var bob = 'bob';
var emptyString = '';

// Problem 17:
// What is the value of !!bob

var notNotBob;
true

// Problem 18:
// What is the value of !!emptyString

var notNotEmptyString;
false

// Problem 19:
// What is the value of !null

var notNull;
true

// Problem 20:
// What is the value of !!undefined

var notNotUndefined;
false

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// Explain truthiness and falsiness in your own words. Provide an example for each.
//
// Your Answer Goes Here:
// So in Java "truthy" and "falsy" are a bit mystifying, but so is gravity and lightning. Many values which aren't exactly "True" nor
// are they "false" when run through a console.log will coerces out to be "true". To memorize all of them would be impossible.
// But here are a couple examples of "truthy": true, {}, [],"random string", (3.14)
// Thankfully there are only six values that are "falsy".
// These are: false, null, undefined, NaN, 0, ""
// Memorizing these^ six is a much more reasonable way of tackling this task.
// ****

// ****
// Comparison Operators
// ****

// Problem 21
// What is the value of 4 === 4
var fourEqualTofour;
true

// Problem 22:
// What is the value of 4 !== 4
var fourNotEqualTofour;
false
// Problem 23:
// What is the value of -3 === 10
var negativeThreeEqualToTen;
false
// Problem 24:
// What is the value of -3 < 10
var negativeThreeLessThanTen;
true
// Problem 25:
// What is the value of -3 <= 10
var negativeThreeLessThanOrEqualToTen;
true
// Problem 26:
// What is the value of -3 > 10
var negativeThreeGreaterThanTen;
false
// Problem 27:
// What is the value of -3 >= 10
var negativeThreeGreaterThanOrEqualToTen;
false
// Problem 28:
// What is the value of '4' == 4
var stringFourEqualsNumberFour;
true
// Problem 29:
// What is the value of '4' != 4
var stringFourNotEqualsNumberFour;
false
// Problem 30:
// What is the value of '4' === 4
var stringFourStrictEqualsNumberFour;
false
// Problem 31:
// What is the value of '4' !== 4
var stringFourStrictNotEqualsNumberFour;
true
// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What’s the difference between == and ===?
//
// Your Answer Goes Here:
//Abstract (==) and Strict (===) Comparison Operators, can be summed up by saying that Abstract will resolve the data types
// through type coercion before making the comparison whil strict will return false with out resolving.
// Examples:
// console.log(13 == "13"); //true
// console.log(13 === "13"); //false
//
// What’s the difference between != and !==?
//
// Your Answer Goes Here:
//
// ****


// ****
// Tests
// ****

describe('Lesson 1 Homework', function () {

  describe('Data Type Problems', function () {
    describe('Problem 0: undefined variable myUndefined', function () {
      it('should be undefined', function () {
          assert.equal(typeof myUndefined, 'undefined');
      });
    });

    describe('Problem 1: null variable myNull', function () {
      it('should be null', function () {
          assert(myNull === null);
      });
    });

    describe('Problem 2: true variable myTrue', function () {
      it('should be true', function () {
          assert.equal(myTrue, true);
      });
    });

    describe('Problem 3: false variable myFalse', function () {
      it('should be false', function () {
          assert.equal(myFalse, false);
      });
    });

    describe('Problem 4: number variable myNumber', function () {
      it('should be a number', function () {
          assert.equal(typeof myNumber, 'number');
      });
    });

    describe('Problem 5: string variable myString', function () {
      it('should be a string', function () {
          assert.equal(typeof myString, 'string');
      });
    });
  });

  describe('Boolean Operators', function () {
    describe('Problem 6: true && true', function () {
      it('should be true', function () {
          assert.equal(trueAndTrue, true && true);
      });
    });

    describe('Problem 7: false && true', function () {
      it('should be false', function () {
          assert.equal(falseAndTrue, false && true);
      });
    });

    describe('Problem 8: true && false', function () {
      it('should be false', function () {
          assert.equal(trueAndFalse, true && false);
      });
    });

    describe('Problem 9: false && false', function () {
      it('should be false', function () {
          assert.equal(falseAndFalse, false && false);
      });
    });

    describe('Problem 10: true || true', function () {
      it('should be true', function () {
          assert.equal(trueOrTrue, true || true);
      });
    });

    describe('Problem 11: false || true', function () {
      it('should be true', function () {
          assert.equal(falseOrTrue, false || true);
      });
    });

    describe('Problem 12: true || false', function () {
      it('should be true', function () {
          assert.equal(trueOrFalse, true || false);
      });
    });

    describe('Problem 13: false || false', function () {
      it('should be false', function () {
          assert.equal(falseOrFalse, false || false);
      });
    });

    describe('Problem 14: !false', function () {
      it('should be true', function () {
          assert.equal(notFalse, !false);
      });
    });

    describe('Problem 15: !true', function () {
      it('should be false', function () {
          assert.equal(notTrue, !true);
      });
    });

    describe('Problem 16: !!true', function () {
      it('should be true', function () {
          assert.equal(notNotTrue, !!true);
      });
    });
  });

  describe('Truthiness', function () {

    describe('Problem 17: !!bob', function () {
      it('should be true', function () {
          assert.equal(notNotBob, !!bob);
      });
    });

    describe('Problem 18: !!emptyString', function () {
      it('should be false', function () {
          assert.equal(notNotEmptyString, !!emptyString);
      });
    });

    describe('Problem 19: !null', function () {
      it('should be true', function () {
          assert.equal(notNull, !null);
      });
    });

    describe('Problem 20: !!undefined', function () {
      it('should be false', function () {
          assert.equal(notNotUndefined, !!undefined);
      });
    });
  });

  describe('Comparison Operators', function () {
    describe('Problem 21: 4 === 4', function () {
      it('should be true', function () {
          assert.equal(fourEqualTofour, 4 === 4);
      });
    });

    describe('Problem 22: 4 !== 4', function () {
      it('should be false', function () {
          assert.equal(fourNotEqualTofour, 4 !== 4);
      });
    });

    describe('Problem 23: -3 === 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeEqualToTen, -3 === 10);
      });
    });

    describe('Problem 24: -3 < 10', function () {
      it('should be true', function () {
          assert.equal(negativeThreeLessThanTen, -3 < 10);
      });
    });

    describe('Problem 25: -3 <= 10', function () {
      it('should be true', function () {
          assert.equal(negativeThreeLessThanOrEqualToTen, -3 <= 10);
      });
    });

    describe('Problem 26: -3 > 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeGreaterThanTen, -3 > 10);
      });
    });

    describe('Problem 27: -3 >= 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeGreaterThanOrEqualToTen, -3 >= 10);
      });
    });

    describe('Problem 28: \'4\' == 4', function () {
      it('should be true', function () {
          assert.equal(stringFourEqualsNumberFour, '4' == 4);
      });
    });

    describe('Problem 29: \'4\' != 4', function () {
      it('should be false', function () {
          assert.equal(stringFourNotEqualsNumberFour, '4' != 4);
      });
    });

    describe('Problem 30: \'4\' === 4', function () {
      it('should be false', function () {
          assert.equal(stringFourStrictEqualsNumberFour, '4' === 4);
      });
    });

    describe('Problem 31: \'4\' !== 4', function () {
      it('should be true', function () {
          assert.equal(stringFourStrictNotEqualsNumberFour, '4' !== 4);
      });
    });
  });

});
