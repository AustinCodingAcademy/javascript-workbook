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

var myNull = null;
  //* 'undefined' variable has not yet been declared in the code*//
  //* setting variables to null, will define the variable.*//
  //* Setting variable to null ensures when using'===' rather than '==',*//
  //* you will get right value*//

// Problem 2:
// Let's create a new variable named myTrue and give it the value true.

var myTrue = true; // boolean value of true assigned to variable myTrue

// Problem 3:
// Let's create a new variable named myFalse and give it the value false.

var myFalse = false; // boolean value false given to variable myFalse

// Problem 4:
// Let's create a new variable named myNumber. Assign it a number.

var myNumber = 10; //the interger value of 10 is assigned to the variable myNumber

// Problem 5:
// Let's create a new variable named myString. Assign it a string.

var myString = 'string'; // assinged the value of 'string' to the varibale myString

// ****
// Boolean Operators
// ****

//* Boolean values: false = 0, true = non zero *//

// Problem 6:
// What is the value of true && true

var trueAndTrue = true; 
// passable when both elements are true


// Problem 7:
// What is the value of false && true

var falseAndTrue = false; 
// passable when the first element is false, and second element is true

// Problem 8:
// What is the value of true && false

var trueAndFalse = false; 
// passable when the first element is true and the second element is false

// Problem 9:
// What is the value of false && false

var falseAndFalse = false; 
// passable when both elements are false

// Problem 10:
// What is the value of true || true

var trueOrTrue = true; 
// passable when either element is true

// Problem 11:
// What is the value of false || true

var falseOrTrue = true; 
// passable when either element is false

// Problem 12:
// What is the value of true || false

var trueOrFalse = true; 
// passable when at least one element is true or false

// Problem 13:
// What is the value of false || false 

var falseOrFalse = false;
// passable when at least one element is false

// Problem 14:
// What is the value of !false

var notFalse = true;
// not false = true or 1.

// Problem 15:
// What is the value of !true

var notTrue = false;
// value of not true is false or 0

// Problem 16:

var notNotTrue = true;
//value of not not true is true, or 1

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the difference between the "and" and the "or" operators? Explain why you would use each of them.
//
// Your Answer Goes Here:
//'and'&& operator states both elements must be true to pass the condition, the 'or' || operator
// states either condition can be true to pass.
// &&, || are not mutually exclusive and can be used in conjunction with one anther. Depending
// on the best solution , sometimes all conditions must be met before continuing to a function
// or if statement etc, other times only one set of perameters need be met to continue in the program.
// && , || operator allows programmers to easily set conditions for the values in their code.
// ****

// ****
// Truthiness
// ****

var bob = 'bob';
var emptyString = '';

// Problem 17:
// What is the value of !!bob

var notNotBob = true;

// Problem 18:
// What is the value of !!emptyString

var notNotEmptyString = false;

// Problem 19:
// What is the value of !null

var notNull = true;

// Problem 20:
// What is the value of !!undefined

var notNotUndefined = false;

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
var negativeThreeLessThanOrEqualToTen =  true;

// Problem 26:
// What is the value of -3 > 10
var negativeThreeGreaterThanTen = false;

// Problem 27:
// What is the value of -3 >= 10
var negativeThreeGreaterThanOrEqualToTen = false;

// Problem 28:
// What is the value of '4' == 4
var stringFourEqualsNumberFour = true;

// Problem 29:
// What is the value of '4' != 4
var stringFourNotEqualsNumberFour = false;

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
// == is to say equal to, === is to compare value and datatype
//
// What’s the difference between != and !==?
//
// Your Answer Goes Here:
//!= , not equal value, !==, not equal value or datatype
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
