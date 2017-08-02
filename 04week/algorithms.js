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

// Bubble Sort
function bubbleSort (arr) {
  let bubbleArray = [ 2, 5, 1, 4, 3, 6, 9, 8, 10];
  var sorted;
  while (!sorted) {
    sorted = true;
    for (i=0; i < bubbleArray.length; i++) {
     if (bubbleArray[i] > bubbleArray[i + 1]) {
       sorted = false;
       let temp = bubbleArray[i]
       bubbleArray[i] = bubbleArray[i + 1];
       bubbleArray[i + 1] = temp;
     }
    }
  }
  console.log(bubbleArray);
}

// Merge Sort
var a = [25, 15, 10, 5, 30, 20];
function mergeSort (arr) {
  if (arr.length < 2)
    return arr;
  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

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
  while (left.length)
    result.push(left.shift());
  while (right.length)
    result.push(right.shift());

  return result;
}
console.log(mergeSort(a));

// Binary Search
function binarySearch (arr, item) {
  let halfIndex = Math.ceil((arr.length - 1) / 2);
  let itemIndex = halfIndex;
  let firstHalf = arr.slice(0, halfIndex);
  let lastHalf = arr.slice(halfIndex);

  while (firstHalf.length > 1 || lastHalf.length > 1) {
    if (item < lastHalf[0]) {
      halfIndex = Math.ceil((firstHalf.lenth - 1) / 2);
      lastHalf = firstHalf.slice(halfIndex);
      firstHalf = firstHalf.slice(0, halfIndex);
      itemIndex -= lastHalf.length;
    } else {
      halfIndex = Math.ceil((lastHalf.length - 1) / 2);
      firstHalf = lastHalf.slice(0, halfIndex);
      lastHalf = lastHalf.slice(halfIndex);
      itemIndex += firstHalf.length;
    }
  }
  if (firstHalf[0] === item) {
    return itemIndex - 1;
  } else if (lastHalf[0] === item) {
    return itemIndex;
  }
  return false;
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
