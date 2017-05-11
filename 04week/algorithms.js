'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function comparator(a, b) {
  if (Number(a) < Number(b)) return -1;
  if (Number(a) > Number(b)) return 1;
  return 0;
}

const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let done = false;
  let countswitch = 0;

  while (countswitch = 0) {
    for (let i = 0; i < arr.length-2; i++) {
      if (!arr[i] < arr[i+1]) {
        countswitch = 0;
        const highnum = arr[i];
        arr.splice(i,1);
        arr.splice(i+1, 0, highnum);
      } else countswitch = 1;
    }
  }
  return arr;
}
// -----------------------------------------------------------------
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2); // goes to end

  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  let sortedArr = [];

  while (sortedFirst.length && sortedSecond.length) {
    if (sortedFirst[0] < sortedSecond[0]) {
      sortedArr.push(sortedFirst.shift());
    } else {
      sortedArr.push(sortedSecond.shift());
    }
  }

  if (!sortedFirst.length) {
    sortedArr = sortedArr.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    sortedArr = sortedArr.concat(sortedFirst);
  }
  return sortedArr;
}
// --------------------------------------------------------------------
function binarySearch(needle, haystack) {
  let halfIdx = Math.ceil((haystack.length - 1) / 2);
  let needleIdx = halfIdx;
  let firstHalf = haystack.slice(0, halfIdx);
  let secondHalf = haystack.slice(halfIdx);
  while (firstHalf.length > 1 || secondHalf.length > 1) {
    if (needle < secondHalf[0]) {
      halfIdx = Math.ceil((firstHalf.length - 1) / 2);
      secondHalf = firstHalf.slice(halfIdx);
      firstHalf = firstHalf.slice(0, halfIdx);
      needleIdx -= secondHalf.length;
    } else {
      halfIdx = Math.ceil((secondHalf.length - 1) / 2);
      firstHalf = secondHalf.slice(0, halfIdx);
      secondHalf = secondHalf.slice(halfIdx);
      needleIdx += firstHalf.length;
    }

  }

  if (firstHalf[0] === needle) {
    return needleIdx - 1;
  } else if (secondHalf[0] === needle) {
    return needleIdx;
  }
  return false;
}


// Tests
// ***********************************************************************
if (typeof describe === 'function') {

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

  console.log('Run the test!');

}
