'use strict';

const assert = require('assert');

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort (arr) {
  // Your code here
  var swapped = true;
  while (swapped) {
    var temp;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i] = temp;
      } else {
        swapped = false;
      }
    }
    return arr;
  }
}

function mergeSort (arr) {
  // Your code here
  if (arr.length < 2) {
    return arr;
  }
  var mid = parseInt(arr.length / 2);
  var leftArr = arr.slice(0, mid);
  var rightArr = arr.slice(mid, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge (left, right) {
  var mergedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }
  while (left.length) {
    mergedArr.push(left.shift());
  }
  while (right.length) {
    mergedArr.push(right.shift());
  }
  return mergedArr;
}

function binarySearch (arr, item) {
  // Your code here
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
  function comparator (a, b) {
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

  console.log('Run the tests!');

}
