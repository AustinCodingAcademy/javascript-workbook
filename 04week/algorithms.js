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
  // Assignment goes here
  if (arr.length < 2) {
    return arr;
  }
// You return the array here because at that point, all you need is order.

  let done = false;
  let countswitch = 0;

  while (countswitch = 0) {
    for (let i = 0; i < arr.length-2; i++) {
      // we only iterate through the array minus 2 because we already have rules
      // in place for the final 2 numbers
      if (!arr[i] < arr[i+1]) {
        countswitch = 0;
        const highnum = arr[i];
        arr.splice(i,1);
        // the purpose of 1 here? Are we just setting the next space
        // after zero
        // then move on to the next number below. add +1. don't remove anything (0)
        arr.splice(i+1, 0, highnum);
      } else countswitch = 1;
    }
  }
  return arr;
}

function mergeSort(arr) {
  // Assignment goes here
  // If an array has less than 2 items, it is technically sorted
  if (arr.length < 2) {
    return arr;
  }
// this next step cuts the arrays roughly in half
  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2); //goes to end

// recurse array halves
  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

//sorted array container
  let sortedArr = [];

  while (sortedFirst.length && sortedSecond.length) {
  // if the first item in the first array is smaller, push
  //it in the sorted array
    if (sortedFirst[0] < sortedSecond[0]) {
      sortedArr.push(sortedFirst.shift());
    } else {
    // else push the first item in the second array
      sortedArr.push(sortedSecond.shift());
    }
  }

// eventually one of the arrays are going to be emptied,
// meaning the other one will be presorted and attachable
// to the end
  if(!sortedFirst.length) {
    sortedArr = sortedArr.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    sortedArr = sortedArr.concat(sortedFirst);
  }
  return sortedArr;
}

console.log(mergeSort([10,9,8,7,6,5]))


function binarySearch(needle, haystack) {
  // Assignment below
  // grab the middle index, rounding up if it isn't an integer
  let halfIdx = Math.ceil((haystack.length - 1) / 2);
  // set the needle index to keep track of the absolute middle index value
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
      // break arrays
      secondHalf = firstHalf.slice(halfIdx);
      firstHalf = firstHalf.slice(0, halfIdx);
      // correct the absolute position of the needle to match
      // the first item in the second arrays
      needleIdx -= secondHalf.length;
    } else {
      // needle must be in second half
      // calculate middle index of the second half
      halfIdx = Math.ceil((secondHalf.length - 1) / 2);
      // break into halves
      firstHalf = secondHalf.slice(0, halfIdx);
      secondHalf = secondHalf.slice(halfIdx);
      // correct the absolute position of the needle index to make
      // the first item in the second halfIdx
      needleIdx += firstHalf.length;
    }

  }

  // At some point, we get down to either a single item
  // on or both halves have
  if (firstHalf[0] === needle) {
    // if its in the first half, then need to subtract one to
    // it back from the first index in the second half
    return needleIdx - 1;
  } else if (secondHalf[0] === needle) {
    // otherwise we are right on the money
    return needleIdx;
  }
  // if item is in neither array at this point, it won't work
  return false;
}

binarySearch(20, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

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
