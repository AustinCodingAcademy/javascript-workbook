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
  let left = 0;
  let right = 0;
  let i = 0;

  for (i = 0; i < arr.length; i++) {
    left = arr[i]; //
    right = arr[i + 1]; //
    if (left > right) { // left = 7, right = 5/7-2
      let mover = null;
      mover = arr.splice(i, 1); // i = 0, i+1 = 1, mover is now 7, arr is now [5,2,9,4,3,1]
      const input = arr.splice(i + 1, 0, mover[0]);
      // console.log(arr);
      // bubbleSort(arr);
    }
  }
  return arr;
}

function mergeSort(arr) {
  // Your code here
  // console.log(arr)
  if (arr.length < 2) {
    return arr;
  }

  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2); // goes to end

  // console.log(firstHalf);

  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  // console.log(sortedFirst, sortedSecond)

  let sortedArr = [];
  let smallestFirst = null;
  let smallestSecond = null;
  while (sortedFirst.length && sortedSecond.length) {
    smallestFirst = sortedFirst[0];
    smallestSecond = sortedSecond[0];
    // console.log(smallestFirst, smallestSecond)
    if (smallestFirst < smallestSecond) {
      sortedArr.push(sortedFirst.shift());
      smallestFirst = null;
    } else {
      sortedArr.push(sortedSecond.shift());
      smallestSecond = null;
    }
    // console.log('sortedArr', sortedArr)
  }

  // console.log(sortedFirst.length, sortedSecond.length)
  if (!sortedFirst.length) {
    sortedArr = sortedArr.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    sortedArr = sortedArr.concat(sortedFirst);
  }
  // console.log(sortedArr)
  return sortedArr;
}

function binarySearch(arr, item) {
  // Your code here
  function binarySearch(needle, haystack) {
    // grab the middle index, rounding up if it isn't an integer
    let halfIdx = Math.ceil((haystack.length - 1) / 2);
    // set the needle index to keep track of absolute middle index value
    let needleIdx = halfIdx;
    // break up array into two halves
    let firstHalf = haystack.slice(0, halfIdx);
    let secondHalf = haystack.slice(halfIdx);
    // as long as either half has at least two items
    while (firstHalf.length > 1 || secondHalf.length > 1) {
      // if the needle is less than the first item in the second half, the
      // item must be in the first
      if (needle < secondHalf[0]) {
        // calculate middle index of first half
        halfIdx = Math.ceil((firstHalf.length - 1) / 2);
        // break up arrays
        secondHalf = firstHalf.slice(halfIdx);
        firstHalf = firstHalf.slice(0, halfIdx);
        // correct the absolute position of the needle index to match
        // the first item in the second array
        needleIdx -= secondHalf.length;
      } else { // needle must be in second half
        // calculate middle index of second half
        halfIdx = Math.ceil((secondHalf.length - 1) / 2);
        // break into halves
        firstHalf = secondHalf.slice(0, halfIdx);
        secondHalf = secondHalf.slice(halfIdx);
        // correct the absolute position of the needle index to match
        // the first item in the second half
        needleIdx += firstHalf.length;
      }

    }

    // Eventually we'll get down to either on or both halves have a
    // a single item.
    if (firstHalf[0] === needle) {
      // if it's in the first half, then need to subtract one to move
      // it back from the first index in the seconf half
      return needleIdx - 1;
    } else if (secondHalf[0] === needle) {
      // otherwise we are right on the money
      return needleIdx;
    }
    // if item is in neither array at this point, no dice
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
