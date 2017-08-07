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
  do {
    var swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap
        let holding = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = holding;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

function mergeSort(arr) {
  // Your code here
  if (arr.length < 2) {
    return arr;
  }

  // split that ish
  var mid = Math.round(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  // am i doin it right?
  // console.log(`L:${left} R:${right}`);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

  // something to hold the arr
  var sorted = [];

  // checking to ensure there's stuffz here
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
      // console.log(`sorted: ${sorted}`);
    } else {
      sorted.push(right.shift());
      // console.log(`sorted: ${sorted}`);
    }
  }
  // join that ish
  return sorted.concat(left, right);
}

function binarySearch(arr, item) {
  // Your code here
  let min = 0;
  let max = arr.length - 1;
  let guess = Math.floor(min + max / 2);
  let correct = false;

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
