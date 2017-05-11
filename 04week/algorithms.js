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
  let swapped;
  do {
    swapped = false
    for (let i = 0; i < arr.length-1; i++){
      let first = arr[i];
      let second = arr[i+1];
      // console.log(first + '&' + second )
      if (first > second){
        arr[i] = second;
        arr[i+1] = first;
        swapped = true;
      }
    }
    // console.log(arr)
  } while (swapped)
    return arr;
}


function mergeSort(arr) {
  if (arr.length < 2){
    return arr;
  }
  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2);

  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  let sortedArr = [];

  while (sortedFirst.length && sortedSecond.length) {
    if (sortedFirst[0] <= sortedSecond[0]){
      sortedArr.push(sortedFirst.shift());
    }
    else {
      sortedArr.push(sortedSecond.shift());
    }
  }

  if (!sortedFirst.length){
    sortedArr = sortedArr.concat(sortedSecond);
  }
  else {
    sortedArr = sortedArr.concat(sortedFirst)
  }
  return sortedArr;


}

function binarySearch(arr, item) {
  let firstHalf = item.slice(0, Math.floor(item.length / 2));
  let secondHalf = item.slice(item.length / 2);
  while (firstHalf.length > 1 && secondHalf.length > 1) {
    if (needle < secondHalf[0]) {
      firstHalf = firstHalf.slice(0, item.length / 2);
      secondHalf = firstHalf.slice(item.length / 2);
    } else {
      firstHalf = secondHalf.slice(0, item.length / 2);
      secondHalf = secondHalf.slice(item.length / 2);
    }
  }

  if (firstHalf[0] === arr || secondHalf[0] === arr) {
    return true;
  }
  return false;
}

// binarySearch(5, [10,22,33,44,55,66,76,87,98]);


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
