'use strict';

var assert = require('assert');

// ****
// Popular Array Methods
//
// Refer to your textbook, MDN, and other good documentation online.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ****

// DO NOT MODIFY
var numberArray = [1, 2, 3, 4, 5];

// Problem 1:
// Show what numberArray would look like if we called numberArray.pop()
var numberArrayAfterPop = [];

// Problem 2:
// Show what numberArray would look like if we called numberArray.shift()
var numberArrayAfterShift = [];

// Problem 3:
// Show what numberArray would look like if we called numberArray.push(6)
var numberArrayAfterPush = [];

// Problem 4:
// Show what numberArray would look like if we called numberArray.unshift(0)
var numberArrayAfterUnshift = [];

// Problem 5:
// Use pop() and shift() to make the array bravestWarriors look like this:
// ['Danny', 'Chris', 'Beth', 'Wallow']
var bravestWarriors = ['Catbug', 'Danny', 'Chris', 'Beth', 'Wallow', 'Impossibear'];

// Problem 6:
// Use push() and unshift to make the array fruit look like this:
// ['banana', 'kiwi', 'apple', 'orange', 'grapes', 'mango']
var fruit = ['kiwi', 'apple', 'orange', 'grapes'];

// ****
// Objects (Associative Arrays)
// ****

// Problem 7:
// Create an empty object
var emptyObject;

// Problem 8:
// Create an object with the following key, value pairs:
// 1) emptyObject:  {}
// 2) emptyArray:   []
// 3) name:         'bob'
// 4) number:       42
var problemEightObject;

// Problem 9:
// DON'T EDIT problemNineObject!!!!
var problemNineObject = {
  'fav food': 'pizza',
  city:       'houston'
};
// update 'fav food' so that its value is tacos
// update city so that its value is austin

// Problem 10:
// DON'T EDIT nestedObjects!!!!
var nestedObjects = {
  someNumbers: [1, 2, 3.14159, 4, 5, 6],
  users: {
    'fred astaire': {
      hometown: 'Omaha'
    },
    'bob roberts': {
      starring: 'John Cusack'
    }
  }
};
// update the starring property to have the value 'Tim Robbins'


// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is an associative array? What is the difference between an array and an associative array?
//
// Your Answer Goes Here:
//
//

// ****
// Tests
// DO NOT MODIFY CODE BELOW!!!!!
// ****

describe('Lesson 4 Homework', function () {

  describe('Popular Array Methods', function () {

    var newNumberArray;
    beforeEach(function () {
      newNumberArray = numberArray.map(function (number) { return number; });
    });

    describe('Problem 1: numberArray after pop()', function () {
      it('should be missing the last element', function () {
        newNumberArray.pop();
        assert.deepStrictEqual(numberArrayAfterPop, newNumberArray);
      });
    });

    describe('Problem 2: numberArray after shift()', function () {
      it('should be missing the first element', function () {
        newNumberArray.shift();
        assert.deepStrictEqual(numberArrayAfterShift, newNumberArray);
      });
    });

    describe('Problem 3: numberArray after push(6)', function () {
      it('should be the same array with 6 added at the end', function () {
        newNumberArray.push(6);
        assert.deepStrictEqual(numberArrayAfterPush, newNumberArray);
      });
    });

    describe('Problem 4: numberArray after unshift(0)', function () {
      it('should be the same array with zero added at the beggining', function () {
        newNumberArray.unshift(0);
        assert.deepStrictEqual(numberArrayAfterUnshift, newNumberArray);
      });
    });

    describe('Problem 5: bravestWarriors pop() and shift()', function () {
      it('should be missing Impossibear and Catbug', function () {
        assert.deepStrictEqual(bravestWarriors, ['Danny', 'Chris', 'Beth', 'Wallow']);
      });
    });

    describe('Problem 6: fruit push() and unshift()', function () {
      it('should have added mango and banana', function () {
        assert.deepStrictEqual(fruit, ['banana', 'kiwi', 'apple', 'orange', 'grapes', 'mango']);
      });
    });
  });


  describe('Objects (Associative Arrays)', function () {

    describe('Problem 7: create empty object', function () {
      it('should be an empty object', function () {
        assert.deepStrictEqual(emptyObject, {});
      });
    });

    describe('Problem 8: create an object with keys and values', function () {
      it('should be an object with the right keys and values', function () {
        assert.deepStrictEqual(problemEightObject, {
          emptyObject: {},
          emptyArray: [],
          name:       'bob',
          number:     42
        });
      });
    });

    describe('Problem 9: update an object', function () {
      it('should have fav food as tacos, city as austin', function () {
        assert.deepStrictEqual(problemNineObject, {
          'fav food': 'tacos',
          city: 'austin'
        });
      });
    });

    describe('Problem 10: update properties in a nested object', function () {
      it('should should have the key starring with value Tim Robbins', function () {
        assert.deepStrictEqual(nestedObjects, {
          someNumbers: [1, 2, 3.14159, 4, 5, 6],
          users: {
            'fred astaire': {
              hometown: 'Omaha'
            },
            'bob roberts': {
              starring: 'Tim Robbins'
            }
          }
        });
      });
    });
  });

});
