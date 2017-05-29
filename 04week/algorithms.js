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
}

function mergeSort(arr) {
  // Your code here
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

function binarySearch(arr, item) {
  // Your code here
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
