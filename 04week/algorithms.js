'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(getRandomInt(0, 100));
}

function bubbleSort(arr) {
  // Your code here
}

function mergeSort(arr) {
  console.log(arr)
  if (arr.length < 2) {
    return arr;
  }

  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2); // goes to end

  console.log(firstHalf);

  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  console.log(sortedFirst, sortedSecond)

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
    console.log('sortedArr', sortedArr)
  }

    console.log(sortedFirst.length, sortedSecond.length)
  if (!sortedFirst.length) {
    sortedArr = sortedArr.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    sortedArr = sortedArr.concat(sortedFirst);
  }
  // console.log(sortedArr)
  return sortedArr;
  console.log(mergeSort([0, 1, 2, 4, 5, 9, 9, 9, 10, 10, 11, 11, 13, 13, 14, 17, 17, 17, 20, 21, 22, 25]))
}




function binarySearch(needle, haystack) {
  function binarySearch(needle, haystack) {
      let firstHalf = haystack.slice(0, Math.floor(haystack.length / 2));
      let secondHalf = haystack.slice(haystack.length / 2);
      while (firstHalf.length > 1 && secondHalf.length > 1) {
        if (needle <secondHalf[0]) {
          firstHalf = firstHalf.slice(0, haystack.length / 2);
          secondHalf = secondHalf.slice(0, haystack.length / 2);
          } else {
            firstHalf = secondHalf.slice(0, haystack.length / 2);
            secondHalf = secondHalf.slice(haystack.length / 2);
          }
        }
        if (firstHalf[0] === needle || secondHalf[0] === needle) {
          return true;
          console.log(haystack.indexOf(needle));
        }
        return false;
  }
      binarySearch(needle, haystack);
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
