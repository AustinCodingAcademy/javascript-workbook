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

// Problem 2:
// What is the value of lastName at this point in the file?
var valueOfLastName = 'plaid';

// Problem 3:
// Fix the following function so that it returns the first argument
function returnTheFirstArgument(firstArgument) {
  return firstArgument;
}

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is scope?
//
// Your Answer Goes Here:
// Scope or visibility refers to the accessibility of a name to an entity
// and where within the computer program that name can be used to refer to that entity.
// Within Javascript scope refers to where within the code an item is accessible from.
//
// A simpler way to think of scope is the set of variables, objections, and functions that are accessible.
// Javascript has global and local scope.
// Variable defined within a function are given local scope, meaning they can only be accessed from within the fucntion they were created in.
// Local varables are deleted once a function is complete (usually the return value)
// Variables declared outside of functions are automatically given global scope. Global scope variables can be accessed from anywhere within the code.
// Variables that are created but given no value default to global scope. Even when creatd within a function.

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
// Ternary operators are operators that are commonly used as shortcuts for if statements.
// Ternary operators are unique because they take three operands.
// Tenary operators are written as following parameters:
// condition ? expr1 : expr2
//
// condition (an expression that evalutes to true or false.)
// expr1 an expression with any type of value
// expr2 an expression with any type of value
// A ternary operator will return expr1 as its return value if the condition is true.
// A ternary operator will retunr expr2 as its return value if the condition is false.

// ****
// Arrays
// ****

// Problem 8:
// Create an empty array
var emptyArray = [];

// Problem 9:
// Create an array with 5 elements in it
var lengthFiveArray = [0, true, -1, 'manny', false];

// DO NOT MODIFY
var nameArray = ['bob', 'fred', 'susan'];

// Problem 10:
// Replace the value 'fred' in nameArray with 'george'
var myNewArray = nameArray.splice(1,1, 'george')
    console.log(myNewArray);



// DO NOT MODIFY
var threeByThreeArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var myThreebyThreeArray = threeByThreeArray.splice(1, 1, 2);
// Problem 11:
// Replace the center element of threeByThreeArray, which is 5, with something else.

// Problem 12:
// create a 2 by 2 (2 rows, 2 columns) nested array
var twoByTwoArray = [
    [3, 4],
    [7, 9]
];
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
