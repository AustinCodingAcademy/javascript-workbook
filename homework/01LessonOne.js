'use strict';

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
// undefined is a variable that has no assigned value. null is a variable with value of null which basically means nothing.

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

var myString = "your face";

// ****
// Boolean Operators
// ****

// Problem 6:
// What is the value of true && true
//=>true

var trueAndTrue = true;

// Problem 7:
// What is the value of false && true
//=>false

var falseAndTrue = false;

// Problem 8:
// What is the value of true && false
//=>false

var trueAndFalse = false;

// Problem 9:
// What is the value of false && false
//=>false

var falseAndFalse = false;

// Problem 10:
// What is the value of true || true
//=>true

var trueOrTrue = true;

// Problem 11:
// What is the value of false || true
//=>true

var falseOrTrue = true;

// Problem 12:
// What is the value of true || false
//=>true

var trueOrFalse = true;

// Problem 13:
// What is the value of false || false
//=>false

var falseOrFalse = false;

// Problem 14:
// What is the value of !false
//=>true

var notFalse = true;

// Problem 15:
// What is the value of !true
//=>false

var notTrue = false;

// Problem 16:
// What is the value of !!true
//=>true

var notNotTrue = true;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the difference between the "and" and the "or" operators? Explain why you would use each of them.
//
// Your Answer Goes Here:
// && checks to see if both arguments are true or false, and || checks to see if either argument is true or false.
// ****

// ****
// Truthiness
// ****

var bob = 'bob';
var emptyString = '';

// Problem 17:
// What is the value of !!bob
//=>true

var notNotBob = true;

// Problem 18:
// What is the value of !!emptyString
//=>false

var notNotEmptyString = false;

// Problem 19:
// What is the value of !null
//=>true

var notNull = true;

// Problem 20:
// What is the value of !!undefined
//=>false

var notNotUndefined = false;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// Explain truthiness and falsiness in your own words. Provide an example for each.
//
// Your Answer Goes Here:
//=>truthiness are values that are actually usable, numbers and words that represent reality. falsiness represent more non exisent values, or are not defined at all.
// ****

// ****
// Comparison Operators
// ****

// Problem 21
// What is the value of 4 === 4
//=>true
var fourEqualTofour = true;

// Problem 22:
// What is the value of 4 !== 4
//=>false
var fourNotEqualTofour = false;

// Problem 23:
// What is the value of -3 === 10
//=>false
var negativeThreeEqualToTen = false;

// Problem 24:
// What is the value of -3 < 10
//=>true
var negativeThreeLessThanTen = true;

// Problem 25:
// What is the value of -3 <= 10
//=>true
var negativeThreeLessThanOrEqualToTen = true;

// Problem 26:
// What is the value of -3 > 10
//=>false
var negativeThreeGreaterThanTen = false;

// Problem 27:
// What is the value of -3 >= 10
//=>false
var negativeThreeGreaterThanOrEqualToTen = false;

// Problem 28:
// What is the value of '4' == 4
//=>true
var stringFourEqualsNumberFour = true;

// Problem 29:
// What is the value of '4' != 4
//=>false
var stringFourNotEqualsNumberFour = false;

// Problem 30:
// What is the value of '4' === 4
//=>false
var stringFourStrictEqualsNumberFour = false;

// Problem 31:
// What is the value of '4' !== 4
//=>true
var stringFourStrictNotEqualsNumberFour = true;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What’s the difference between == and ===?
//=> == will adapt and then check if statement is true, often taking away "". === will compare the statement literally includeing "".
// Your Answer Goes Here:
//
//
// What’s the difference between != and !==?
//=> != checks if left is not equal to right, !== checks if left is the same type as the right?
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
