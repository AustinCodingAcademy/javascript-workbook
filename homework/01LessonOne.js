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
//Null = false and undefined is a non-configurable property.
var myNull = null;

// Problem 2:
// Let's create a new variable named myTrue and give it the value true.

var myTrue = true;

// Problem 3:
// Let's create a new variable named myFalse and give it the value false.

var myFalse = false;

// Problem 4:
// Let's create a new variable named myNumber. Assign it a number.

var myNumber = 12;

// Problem 5:
// Let's create a new variable named myString. Assign it a string.

var myString = "String goes here.";

// ****
// Boolean Operators
// ****

// Problem 6:
// What is the value of true && true

var trueAndTrue = true;

// Problem 7:
// What is the value of false && true

var falseAndTrue = false;

// Problem 8:
// What is the value of true && false

var trueAndFalse = false;

// Problem 9:
// What is the value of false && false

var falseAndFalse = false;

// Problem 10:
// What is the value of true || true

var trueOrTrue = true;

// Problem 11:
// What is the value of false || true

var falseOrTrue = true;

// Problem 12:
// What is the value of true || false

var trueOrFalse = true;

// Problem 13:
// What is the value of false || false

var falseOrFalse = false;

// Problem 14:
// What is the value of !false

var notFalse = true;

// Problem 15:
// What is the value of !true

var notTrue = false;

// Problem 16:
// What is the value of !!true

var notNotTrue = false;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the difference between the "and" and the "or" operators? Explain why you would use each of them.
//
// Your Answer Goes Here:
// The "and" operator will result in TRUE, only if both values are TRUE versus "or" operator that not only will result in TRUE when both operators are TURE, but also when any of them are TRUE.

If( a > b && a <= c) { do something}
This means that if both expressions a>b AND a <= c are TRUE the result will be true and the body of the if statement will be executed.
// ****

// ****
// Truthiness
// ****

var bob = 'bob';
var emptyString = '';

// Problem 17:
// What is the value of !!bob

var notNotBob = false;

// Problem 18:
// What is the value of !!emptyString

var notNotEmptyString = false;

// Problem 19:
// What is the value of !null

var notNull = true;

// Problem 20:
// What is the value of !!undefined

var notNotUndefined = true;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// Explain truthiness and falsiness in your own words. Provide an example for each.
//
// Your Answer Goes Here:
//Truthiness is something that evaluates to TRUE. For instance, 5 > 3
//Falsiness is something that evaluates to FALSE. Fors instance, 5 > 9
// ****

// ****
// Comparison Operators
// ****

// Problem 21
// What is the value of 4 === 4
var fourEqualTofour = true;

// Problem 22:
// What is the value of 4 !== 4
var fourNotEqualTofour = false;

// Problem 23:
// What is the value of -3 === 10
var negativeThreeEqualToTen = false;

// Problem 24:
// What is the value of -3 < 10
var negativeThreeLessThanTen = true;

// Problem 25:
// What is the value of -3 <= 10
var negativeThreeLessThanOrEqualToTen = true;

// Problem 26:
// What is the value of -3 > 10
var negativeThreeGreaterThanTen = false;

// Problem 27:
// What is the value of -3 >= 10
var negativeThreeGreaterThanOrEqualToTen = false;

// Problem 28:
// What is the value of '4' == 4
var stringFourEqualsNumberFour = false;

// Problem 29:
// What is the value of '4' != 4
var stringFourNotEqualsNumberFour = true;

// Problem 30:
// What is the value of '4' === 4
var stringFourStrictEqualsNumberFour = false;

// Problem 31:
// What is the value of '4' !== 4
var stringFourStrictNotEqualsNumberFour = true;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What’s the difference between == and ===?
//
// Your Answer Goes Here:
// The difference between == is only for equal value, while === is for equal value and equal type.
//
// What’s the difference between != and !==?
//
// Your Answer Goes Here:
//The difference between !== is only for not equal value, while !=== is for not equal value or not equal type.
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
//Data type is a group of data with values that have predefined charasteristics (e.g. number, string and pointer).
//undefined - data without an assign value.
    describe('Problem 1: null variable myNull', function () {
      it('should be null', function () {
          assert(myNull === null);
      });
    });
//The variable myNull was given the null value, so myNull === null would be true.
    describe('Problem 2: true variable myTrue', function () {
      it('should be true', function () {
          assert.equal(myTrue, true);
      });
    });
//The variable myTrue was given the True value.  Equal to TRUE.
    describe('Problem 3: false variable myFalse', function () {
      it('should be false', function () {
          assert.equal(myFalse, false);
      });
    });
//The variable myFalse was given the False value.  Equal to FalseFALSE.
    describe('Problem 4: number variable myNumber', function () {
      it('should be a number', function () {
          assert.equal(typeof myNumber, 'number');
      });
    });
//The variable myNumber was given the 4 value.  Var Equal to 4.
    describe('Problem 5: string variable myString', function () {
      it('should be a string', function () {
          assert.equal(typeof myString, 'string');
      });
    });
  });
//The variable myNumber was given a string value.  Var Equal to "String goes here.".
  describe('Boolean Operators', function () {
    describe('Problem 6: true && true', function () {
      it('should be true', function () {
          assert.equal(trueAndTrue, true && true);
      });
    });
//&& operator same as AND, when using TRUE && TRUE, equals to TRUE.
    describe('Problem 7: false && true', function () {
      it('should be false', function () {
          assert.equal(falseAndTrue, false && true);
      });
    });
//FALSE on either side of && will return false because it states that it would need to be both true and false statement at the same time resulting in FALSE.
    describe('Problem 8: true && false', function () {
      it('should be false', function () {
          assert.equal(trueAndFalse, true && false);
      });
    });
//FALSE on both side of && will return false because it states that it would need to be both true and false at the same time resulting in FALSE.
    describe('Problem 9: false && false', function () {
      it('should be false', function () {
          assert.equal(falseAndFalse, false && false);
      });
    });
//FALSE on both side of && will always return false. States FALSE AND FALSE returning false.
    describe('Problem 10: true || true', function () {
      it('should be true', function () {
          assert.equal(trueOrTrue, true || true);
      });
    });
//TRUE on both side of // will always return true because is either or.
    describe('Problem 11: false || true', function () {
      it('should be true', function () {
          assert.equal(falseOrTrue, false || true);
      });
    });
//TRUE on either side of // will return true because is either or and as long on value is true the return will be true.
    describe('Problem 12: true || false', function () {
      it('should be true', function () {
          assert.equal(trueOrFalse, true || false);
      });
    });
//FALSE on one side and TRUE on the other side of // will return true because is either or and as long on value is true the return will be true.
    describe('Problem 13: false || false', function () {
      it('should be false', function () {
          assert.equal(falseOrFalse, false || false);
      });
    });
//FALSE on both side of // will return false because is either or and since both are false the return will be false.
    describe('Problem 14: !false', function () {
      it('should be true', function () {
          assert.equal(notFalse, !false);
      });
    });
// notFalse would return true 'cause the value in valid.
    describe('Problem 15: !true', function () {
      it('should be false', function () {
          assert.equal(notTrue, !true);
      });
    });
// notTrue would return false 'cause the value in no longer not valid.
    describe('Problem 16: !!true', function () {
      it('should be true', function () {
          assert.equal(notNotTrue, !!true);
      });
    });
  });
//notNotTrue returns True due to the double not kind of removes itself resulting in just TRUE return.
  describe('Truthiness', function () {

    describe('Problem 17: !!bob', function () {
      it('should be true', function () {
          assert.equal(notNotBob, !!bob);
      });
    });
//notNotbob returns Bod, making bob true. Two nots results in a true return.
    describe('Problem 18: !!emptyString', function () {
      it('should be false', function () {
          assert.equal(notNotEmptyString, !!emptyString);
      });
    });
//Even though !! would normally return true, but not in this case since emptyString is false, so the end result would be false.
    describe('Problem 19: !null', function () {
      it('should be true', function () {
          assert.equal(notNull, !null);
      });
    });
//Null is same as false so it would return true since the false turns to true.
    describe('Problem 20: !!undefined', function () {
      it('should be false', function () {
          assert.equal(notNotUndefined, !!undefined);
      });
    });
  });
//This would be false due to undefined is false.
  describe('Comparison Operators', function () {
    describe('Problem 21: 4 === 4', function () {
      it('should be true', function () {
          assert.equal(fourEqualTofour, 4 === 4);
      });
    });
//The logical comparison === is equal so it makes this funciton to be true.
    describe('Problem 22: 4 !== 4', function () {
      it('should be false', function () {
          assert.equal(fourNotEqualTofour, 4 !== 4);
      });
    });
//Here it states that 4not equal to 4 making it a false return because 4 is equal to 4.
    describe('Problem 23: -3 === 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeEqualToTen, -3 === 10);
      });
    });
//This is false due to -3 is not equal to 10 as it stated above.
    describe('Problem 24: -3 < 10', function () {
      it('should be true', function () {
          assert.equal(negativeThreeLessThanTen, -3 < 10);
      });
    });
//This is true because -3 is less than 10.
    describe('Problem 25: -3 <= 10', function () {
      it('should be true', function () {
          assert.equal(negativeThreeLessThanOrEqualToTen, -3 <= 10);
      });
    });
//This is true because -3 is less than 10, but not equal.
    describe('Problem 26: -3 > 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeGreaterThanTen, -3 > 10);
      });
    });
//False because -3 is not greater than 10.
    describe('Problem 27: -3 >= 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeGreaterThanOrEqualToTen, -3 >= 10);
      });
    });
//False both, -3 is not greater or equal to 10.
    describe('Problem 28: \'4\' == 4', function () {
      it('should be true', function () {
          assert.equal(stringFourEqualsNumberFour, '4' == 4);
      });
    });
//False because the string 4 is not equal to number 4, both would need to be same number or string in order to be true.
    describe('Problem 29: \'4\' != 4', function () {
      it('should be false', function () {
          assert.equal(stringFourNotEqualsNumberFour, '4' != 4);
      });
    });
//True because the string 4 is not equal to number 4. Both need to be either same number or same string in order to be true.
    describe('Problem 30: \'4\' === 4', function () {
      it('should be false', function () {
          assert.equal(stringFourStrictEqualsNumberFour, '4' === 4);
      });
    });
//False because string '4' is not equal to number 4. Both need to be either same number or same string in order to be true.
    describe('Problem 31: \'4\' !== 4', function () {
      it('should be true', function () {
          assert.equal(stringFourStrictNotEqualsNumberFour, '4' !== 4);
      });
    });
  });
//True because the string '4' is not equal to number 4.
});
