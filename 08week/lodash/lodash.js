'use strict';
const assert = require('assert');
var _ = require('lodash');


const strNums = ["1","4","1","5","9","2","6","5","3","5","8","9","7","9","3",
"2","3","8","4","6","2","6","4","3","3","8","3","2","7","9","5","0","2","8",
"8","4","1","9","7","1","6","9","3","9","9","3","7","5","1","0","5","8","2",
"0","9","7","4","9","4","4","5","9","2","3","0","7","8","1","6","4","0","6",
"2","8","6","2","0","8","9","9","8","6","2","8","0","3","4","8","2","5","3",
"4","2","1","1","7","0","6","7","9","8","2","1","4","8","0","8","6","5","1",
"3","2","8","2","3","0","6","6","4","7","0","9","3","8","4","4","6","0","9",
"5","5","0","5","8","2","2","3","1","7","2","5","3","5","9","4","0","8","1",
"2","8","4","8","1","1","1","7","4","5","0","2","8","4"];

const strNums2 = ["1","4","1","5","9","2","6","5","3","5","8","9","7","9","3",
"2","3","8","4","6","2","6","4","3","3","8","3","2","7","9","5","0","2","8",
"8","4","1","9","7","1","6","9","3","9","9","3","7","5","1","0","5","8","2",
"0","9","7","4","9","4","4","5","9","2","3","0","7","8","1","6","4","0","6",
"2","8","6","2","0","8","9","9","8","6","2","8","0","3","4","8","2","5","3",
"4","2","1","1","7","0","6","7","9","8","2","1","4","8","0","8","6","5","1",
"3","2","8","2","3","0","6","6","4","7","0","9","3","8","4","4","6","0","9",
"5","5","0","5","8","2","2","3","1","7","2","5","3","5","9","4","0","8","1",
"2","8","4","8","1","1","1","7","4","5","0","2","8","4"];

const strNums3 = ["1","4"];


//chunk function
function chunk(arr, num) {
  return _.chunk(arr, num);
}

//reverse function
function reverse(arr) {
  return _.reverse(arr);
}

//without function
function without(arr, num1, num2) {
  return _.without(arr, num1, num2);
}

//shuffle function
function shuffle(arr) {
  return _.shuffle(arr);
}

//last function
function last(arr) {
  return _.last(arr);
}



if (typeof describe === 'function') {
  describe('chunk', () => {
    it('should return an array of arrays the size of the chunk number', () => {
      const array = chunk(strNums, 5);
      assert.equal(
        array[0].length, 5);
    });
  });

  describe('reverse', () => {
    it('should reverse an array, making the last element the first', () => {
      let arr = reverse(strNums);
      assert.equal(
        arr[arr.length-1], '1');
    });
  });

  describe('without', () => {
    it('should return an array of arrays the size of the chunk number', () => {
      const array = without(strNums, '1', '2');
      assert.equal(
        array[0], '4');
    });
  });

  describe('shuffle', () => {
    it('should return an array of randomized elements from the original array', () => {
      const array = shuffle(strNums3);
      assert.notEqual(
        ['1', '4']);
    });
  });

  describe('last', () => {
    it('should return the last element in the array', () => {
      const array = last(strNums2);
      assert.equal(
        array[0], '4');
    });
  });
}