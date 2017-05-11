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
//console.log(arr);
function bubbleSort(arr) {
  // Your code here
  var changed = true;
  while (changed){
    var swapTemp = 0;
    for (let i = 0; i < arr.length-1; i++){
      if (arr[i] > arr[i+1]){
        //console.log(i);
        swapTemp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = swapTemp;
      } else {
        changed = false;
      }
    }

  }
  return arr;
}

function mergeSort(arr) {
  // Your code here
  if (arr.length < 2){
    return arr;
  }
  var middle = parseInt(arr.length / 2);
  var leftArr = arr.slice(0, middle);
  var rightArr = arr.slice(middle, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right){
  var mergedArray = [];
  while(left.length && right.length){
    if(left[0] <= right[0]){
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift())
    }
  }

  while(left.length){
    mergedArray.push(left.shift());
  }

  while(right.length){
    mergedArray.push(right.shift());

  }
  return mergedArray;

}

function binarySearch( haystack, needle) {
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
      //console.log(sorted, " sorted");
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1,2,3,4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log("Run the tests");

}
