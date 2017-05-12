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
  let swapped = false;
  // If the first item is greater than the second, the items will swap
  // arr[i] indicates the first one and then arr[i] + 1 the next
  // they get compared and then swapped
  for (let i = 0; i < (arr.length - 1); i++) {
    if (arr[i] > arr[i + 1]) {
      let current = arr[i];
      let next = arr[i + 1];
      arr[i] = next;
      arr[i + 1] = current;
      swapped = true;
    }
  }
  // At some point, as it goes through the array and stop swapping items
  // the array will be sorted at the end, returning the sorted array or else
  // it will keep sorting and swapping
  if (!swapped) {
    return arr;
  } else {
    bubbleSort(arr);
  }
  return arr;
}


function mergeSort(arr) {
  // mergeSort and binarySearch by Kevin
  // base case: if array less than two items, then technically it's sorted
  if (arr.length < 2) {
    return arr;
  }
  // cut arrays roughly in half
  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2); // goes to end
  // recurse array halves
  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);
  // sorted array container
  let sortedArr = [];
  while (sortedFirst.length && sortedSecond.length) {
    // if the first item in the first array is smaller, push
    // it in the sorted array
    if (sortedFirst[0] < sortedSecond[0]) {
      sortedArr.push(sortedFirst.shift());
    } else {
      // else push the first item in the second array
      sortedArr.push(sortedSecond.shift());
    }
  }
  // eventually one of the arrays are going to be emptied,
  // meaning the other one will be pre sorted and attachable
  // to the end
  if (!sortedFirst.length) {
    sortedArr = sortedArr.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    sortedArr = sortedArr.concat(sortedFirst);
  }
  return sortedArr;
}

function binarySearch(haystack, needle) {
  // function binarySearch(needle, haystack) {
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
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {
  console.log('Run the tests');
}
