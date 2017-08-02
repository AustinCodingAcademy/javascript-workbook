'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr) {
  // Your code here
  // bubbleSort takes a do while loop
  // Also takes a for loop and a condition
  do {
    var swapped = false; //must have a boolean
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]; //this is to hold the value
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    //this is for the boolean
  } while (swapped);
  //if no return, then it keeps on running
  return arr;
}

// Divides the array into equal halfs
function mergeSort(arr) {
  // Your code here
  if (arr.length < 2) return arr;

  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}
// Combines the array into a sorted manner
function merge(left, right) {
  // Define and store
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

function binarySearch(arr, item) {
  // Your code here
  var min = 0;
  var max = arr.length - 1;
  var guess = Math.floor(min + max / 2);
  var correct = false;

  if (arr.indexOf(item) === -1) {
    return false;
  } else {
    do {
      if (arr[guess] === item) {
        correct = true;
        return guess;
      } else if (arr[guess] < item) {
        // min = guess + 1;
        guess = Math.floor((guess + arr.length - 1) / 2);
      } else {
        // max = guess - 1;
        guess = Math.floor(min + guess / 2);
      }
    } while (!correct);
  }
}

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {
  console.log('Run the tests!')
}
