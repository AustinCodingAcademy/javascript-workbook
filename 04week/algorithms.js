'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr) {
  // Your code here
  let len = arr.length;
  do {
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sort(arr, i, i + 1);
      }
    }
  } while (len--);
  return arr;
}

function sort(arr, A, B) {
  arr[A] = arr[B];
  arr[B] = arr[A];
}



function mergeSort(arr) {
  // Your code here
  let len = arr.length - 1;
  // let half = len /2;
  // let array = arr.slice(0, half);
  // console.log(half);
  if (len < 2) {
    return arr;
  }
  let half = Math.round(len / 2);
  return merge(
    mergeSort(arr.slice(0, half)),
    mergeSort(arr.slice(half))
  );
}

function merge(left, right) {
var out = [];
while (left.length && right.length){
  out.push(left[0] < right[0] ? left.shift() : right.shift());
}
while(left.length){
  out.push(left.shift());
}
while(right.length){
  out.push(right.shift());
}
return out;

};

function binarySearch(arr, item) {
  // Your code here
}

// Tests

if (typeof describe === 'function') {

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort());
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort());
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([2, 1, 4, 3], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  getPrompt();

}
