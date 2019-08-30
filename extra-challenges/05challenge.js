'use strict';

var assert = require('assert');

// ****
// More Operators
// ****

// DO NOT MODIFY
var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;
var six = 6;

// Problem 1:
// What is the result of applying the increment (++) operator to var one?
var onePlusPlus = 2;

// Problem 2:
// What is the result of applying the decrement (--) operator to var two?
var twoMinusMinus = 1;

// Problem 3:
// What is the result of three += 3?
var threePlusAssignmentThree = 6;

// Problem 4:
// What is the result of four -= 3?
var fourMinusAssignmentThree = 1;

// Problem 5:
// What is the result of five *= 2?
var fiveMultiplicationAssignmentTwo = 10;

// Problem 6:
// What is the result of six /= 3?
var sixDivisionAssignmentThree = 2;

// ****
// Loops
// ****

// DO NOT MODIFY
var whileLoopArray = [];
var whileLoopCounter = 0;
while (whileLoopCounter < 10) {
  whileLoopArray.push(whileLoopCounter);
  whileLoopCounter++;
}

// Problem 7:
// Fill in whileLoopArrayResult so that it matches whileLoopArray
var whileLoopArrayResult = [];
for (let val of whileLoopArray) {
  whileLoopArrayResult.push(val);
}

// DO NOT MODIFY
var forLoopArray = [];
var forLoopCounter;
for (forLoopCounter = 0; forLoopCounter > -10; forLoopCounter--) {
  forLoopArray.push(forLoopCounter);
}

// Problem 8:
// Fill in forLoopArrayResult so that it matches forLoopArray
var forLoopArrayResult = [];
for (let val of forLoopArray) {
  forLoopArrayResult.push(val);
}

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What are loops? Why do we use them?
// Loops are instructions that run repetatively if a certain condition satisfied. There are sevaral types loops in js. They are for, while, do-while, for-of and for-in loops.
// We can use loops to perform certain instructions repetatively, transverse arrays, etc. 

// ****
// Tests
// DO NOT MODIFY CODE BELOW!!!!!
// ****

describe('Lesson 5 Homework', function () {

  describe('More Operators', function () {

    describe('Problem 1: increment operator, one plus plus', function () {
      it('should add one to the original number', function () {
        assert.equal(onePlusPlus, 2);
      });
    });

    describe('Problem 2: decrement operator, two minus minus', function () {
      it('should subtract one from the original number', function () {
        assert.equal(twoMinusMinus, 1);
      });
    });

    describe('Problem 3: plus assigment operator', function () {
      it('should add 3 to the original number', function () {
        assert.equal(threePlusAssignmentThree, 6);
      });
    });

    describe('Problem 4: minus assigment operator', function () {
      it('should subtract 3 from the original number', function () {
        assert.equal(fourMinusAssignmentThree, 1);
      });
    });

    describe('Problem 5: multiplication assigment operator', function () {
      it('should multiply the original number by two', function () {
        assert.equal(fiveMultiplicationAssignmentTwo, 10);
      });
    });

    describe('Problem 6: division assigment operator', function () {
      it('should divide the original number by three', function () {
        assert.equal(sixDivisionAssignmentThree, 2);
      });
    });
  });

  describe('Loops', function () {

    describe('Problem 7: while loop array push result', function () {
      it('should match the result of the while loop', function () {
        assert.deepStrictEqual(whileLoopArray, whileLoopArrayResult);
      });
    });

    describe('Problem 8: for loop array push result', function () {
      it('should match the result of the for loop', function () {
        assert.deepStrictEqual(forLoopArray, forLoopArrayResult);
      });
    });

  });

});
