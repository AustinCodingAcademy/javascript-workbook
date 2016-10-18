'use strict';

var assert = require('assert');

// ****
// Basic Data Types
// ****

// Problem 0:
// To start out we are declaring a variable named myUndefined
// Note that we are not assigning a value, so it is undefined.
// var myUndefined; =null

// Problem 1:
// Let's create a new variable named myNull and give it the value null.
//
// What is the difference between null and undefined?

// var myNull; =true

// Problem 2:
// Let's create a new variable named myTrue and give it the value true.

// var myTrue; =false

// Problem 3:
// Let's create a new variable named myFalse and give it the value false.

// var myFalse; =true

// Problem 4:
// Let's create a new variable named myNumber. Assign it a number.

// var myNumber; =1234

// Problem 5:
// Let's create a new variable named myString. Assign it a string.

// var myString; ="this is my answer"

// ****
// Boolean Operators
// ****

// Problem 6:
// What is the value of true && true

// var trueAndTrue; =false

// Problem 7:
// What is the value of false && true

// var falseAndTrue; =false

// Problem 8:
// What is the value of true && false

// var trueAndFalse; = false

// Problem 9:
// What is the value of false && false

// var falseAndFalse; =true

// Problem 10:
// What is the value of true || true

// var trueOrTrue; =true

// Problem 11:
// What is the value of false || true

// var falseOrTrue; =true

// Problem 12:
// What is the value of true || false

// var trueOrFalse; =false

// Problem 13:
// What is the value of false || false

// var falseOrFalse; =true

// Problem 14:
// What is the value of !false

// var notFalse; =false

// Problem 15:
// What is the value of !true

// var notTrue; = true

// Problem 16:
// What is the value of !!true

// var notNotTrue; =true

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the difference between the "and" and the "or" operators? Explain why you would use each of them.
//
// Your Answer Goes Here:
//
// ****
 // AND (&&) will test whether the value on the left is true, and if so, test whether the item on the right is true. If both are true, then it will return true, if either one is false, it will return false. You can even chain more than one operator together! OR (||) will test whether each item on either side is true and if at least one side is true, it will reason both together as true.
// ****
// Truthiness
// ****

var bob = 'bob';
// var emptyString = ''; =true

// Problem 17:
// What is the value of !!bob


// var notNotBob; =true

// Problem 18:
// What is the value of !!emptyString

// var notNotEmptyString; =false

// Problem 19:
// What is the value of !null

// var notNull; =true

// Problem 20:
// What is the value of !!undefined

var notNotUndefined;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// Explain truthiness and falsiness in your own words. Provide an example for each.
//
// Your Answer Goes Here:
//
// ****

// ****
// Comparison Operators
// ****

// Problem 21
// What is the value of 4 === 4
// truthiness three equl signs mean same.
var fourEqualTofour;

// Problem 22:
// What is the value of 4 !== 4
var fourNotEqualTofour;
// falsiness the Bang means opposite truthiness value.

// Problem 23:
// What is the value of -3 === 10
var negativeThreeEqualToTen;
// falsiness negative three is not the same as 10
// Problem 24:
// What is the value of -3 < 10
var negativeThreeLessThanTen;
// truthiness negative three is less than 10
// Problem 25:
// What is the value of -3 <= 10
var negativeThreeLessThanOrEqualToTen;
// falsiness negative three is not equal 10
// Problem 26:
// What is the value of -3 > 10
var negativeThreeGreaterThanTen;
// falsiness negative three is not less than 10
// Problem 27:
// What is the value of -3 >= 10
var negativeThreeGreaterThanOrEqualToTen;
// false negative three is less 10
// Problem 28:
// What is the value of '4' == 4
var stringFourEqualsNumberFour;

// Problem 29:
// What is the value of '4' != 4
var stringFourNotEqualsNumberFour;

// Problem 30:
// What is the value of '4' === 4
var stringFourStrictEqualsNumberFour;

// Problem 31:
// What is the value of '4' !== 4
var stringFourStrictNotEqualsNumberFour;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What’s the difference between == and ===?
//The == operator will compare for equality after doing any necessary type conversions. The === operator will not do the conversion, so if two values are not the same type === will simply return false
// Your Answer Goes Here:
//
//
// What’s the difference between != and !==?
//
// Your Answer Goes Here:
//JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=. The good ones work the way you would expect. If the two operands are of the same type and have the same value, then === produces true and !== produces false. The evil twins do the right thing when the operands are of the same type, but if they are of different types, they attempt to coerce the values. the rules by which they do that are complicated and unmemorable. 
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
