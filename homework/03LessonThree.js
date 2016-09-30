'use strict';

var assert = require('assert');

// ****
// Scope
// ****

// DO NOT MODIFY
var lastName = 'plaid';

// DO NOT MODIFY
function printFullName() {
  var firstName = 'bob';
  return firstName + lastName;
}

// DO NOT MODIFY
var firstName = 'susan';

// Problem 1:
// What is the value of firstName at this point in the file?
var valueOfFirstName = 'susan';
//the firstName is 'susan' and NOT 'bob' at this point
  //because the printFullName() function has not been  called

// Problem 2:
// What is the value of lastName at this point in the file?
var valueOfLastName = 'plaid';
//the lastName is 'plaid' at this point in the program

// Problem 3:
// Fix the following function so that it returns the first argument
function returnTheFirstArgument(firstArgument) {
  // var firstArgument = 'bob';
  return firstArgument;
}
//if we want to return the argument itself
  //then we must not redefine the variable
    //and we must simply return the initial argument variable


// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is scope?
//
// Your Answer Goes Here:
//scope refers to how broad or narrow our view of functions, variables etc. is
  //if a function or variable is global in scope then we have access to it anywhere in our function
    //if a function or variable is in local scope then we only have access to it based on how functions and variables are 'wired together'


// ****
// Ternary Operator
// ****

// DO NOT MODIFY
var ternaryResult1 = true   ? 'first' : 'second';
var ternaryResult2 = false  ? 'first' : 'second';
var ternaryResult3 = 4      ? 'first' : 'second';
var ternaryResult4 = ""     ? 'first' : 'second';

// Problem 4:
// What is the value of ternaryResult1
var problemFourAnswer = 'first';

// Problem 5:
// What is the value of ternaryResult2
var problemFiveAnswer = 'second';

// Problem 6:
// What is the value of ternaryResult3
var problemSixAnswer = 'first';

// Problem 7:
// What is the value of ternaryResult4
var problemSevenAnswer = 'second';

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the ternary operator?  How does it differ from normal conditional statements?
//
// Your Answer Goes Here:
//The ternary operator is an alternative to if/else statements
  //it differs in that it presents an if/else conditional in a succinct manner
    //the ternary operator asks...
      //is the variable or condition true or false
        //if the variable is true, then redefine the variable with the first value
          //else, (variable is false), redefine the variable with the second value
//


// ****
// Arrays
// ****

// Problem 8:
// Create an empty array
var emptyArray = [];

// Problem 9:
// Create an array with 5 elements in it
var lengthFiveArray = [2,4,6,8,10];

// DO NOT MODIFY
var nameArray = ['bob', 'fred', 'susan'];

// Problem 10:
// Replace the value 'fred' in nameArray with 'george'
nameArray[1] = 'george';

// DO NOT MODIFY
var threeByThreeArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Problem 11:
// Replace the center element of threeByThreeArray, which is 5, with something else.
threeByThreeArray[1][1] = 'something else';

// Problem 12:
// create a 2 by 2 (2 rows, 2 columns) nested array
var twoByTwoArray = [ [5,10], [20,30] ];

// ****
// Tests
// DO NOT MODIFY CODE BELOW!!!!!
// ****

describe('Lesson 3 Homework', function () {

  describe('Scope', function () {
    describe('Problem 1: firstName', function () {
      it('should be susan', function () {
        assert.equal(firstName, valueOfFirstName);
      });
    });

    describe('Problem 2: lastName', function () {
      it('should be plaid', function () {
        assert.equal(lastName, valueOfLastName);
      });
    });

    describe('Problem 3: returnTheFirstArgument()', function () {
      it('should return the first argument', function () {
        assert.equal(returnTheFirstArgument('bob'), 'bob');
        assert.equal(returnTheFirstArgument(4), 4);
        assert.equal(returnTheFirstArgument(null), null);
      });
    });
  });

  describe('Ternary Operator', function () {
    describe('Problem 4: ternaryResult1', function () {
      it('should be \'first\'', function () {
        assert.equal(ternaryResult1, problemFourAnswer);
      });
    });

    describe('Problem 5: ternaryResult2', function () {
      it('should be \'second\'', function () {
        assert.equal(ternaryResult2, problemFiveAnswer);
      });
    });

    describe('Problem 6: ternaryResult3', function () {
      it('should be \'first\'', function () {
        assert.equal(ternaryResult3, problemSixAnswer);
      });
    });

    describe('Problem 7: ternaryResult4', function () {
      it('should be \'second\'', function () {
        assert.equal(ternaryResult4, problemSevenAnswer);
      });
    });
  });

  describe('Arrays', function () {
    describe('Problem 8: emptyArray', function () {
      it('should be an empty array', function () {
        assert.equal(emptyArray.length, 0);
      });
    });

    describe('Problem 9: lengthFiveArray', function () {
      it('should have 5 elements', function () {
        assert.equal(lengthFiveArray.length, 5);
      });
    });

    describe('Problem 10: replace \'fred\' with \'george\'', function () {
      it('should be \'george\'', function () {
        assert.equal(nameArray[1], 'george');
      });
    });

    describe('Problem 11: replace the center element', function () {
      it('should not equal 5', function () {
        assert(threeByThreeArray[1][1] !== 5);
      });
    });

    describe('Problem 12: twoByTwoArray', function () {
      it('should be a 2x2 array', function () {
        assert(twoByTwoArray.length === 2);
        assert(twoByTwoArray[0].length === 2);
        assert(twoByTwoArray[1].length === 2);
      });
    });
  });
});
