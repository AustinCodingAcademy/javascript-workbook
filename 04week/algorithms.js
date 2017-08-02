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
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i] = temp;
      }
    }
    return arr;
  }
  return arr;
}


// example:  [2, 5, 9, 7]
function mergeSort (arr) {
  // Your code here
  if (arr.length < 2) return arr;
  var middle = Math.floor(arr.length / 2); // middle = 2
  var left = arr.slice(0, middle); // left = [2, 5]
  var right = arr.slice(middle, arr.length); // right = [9, 7]
  // return: merge(mergeSort([2, 5]), mergeSort([9, 7]));
  // will cycle through each array until arr.length is less than 2
  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
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



// arr = [1, 2, 3, 4] item = 3 min = 1 max = 4 average = 2
function binarySearch (arr, item) {
  // Your code here
  let min = 1;
  let max = arr.pop();
  let average = Math.floor((max + min) / 2);
  if (arr.includes(item)) {
   if (item = average) {
    return item;
    console.log('you guessed it');
  } else if (item < average) {
    return item + 1;
  } else if (item > average) {
    return max - 1;
  }
} else {
  return false;
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
