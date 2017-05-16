'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const arr = [12,16,6,8,19,20,14];

for (let i = 0; i < 100; i++) {
  arr.push(getRandomInt(0, 100));
}

function bubbleSort(arr) {
  var swapped;
  do {
    swapped = false;
    for (var i=0; i<arr.length-1; i++){
      if (arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleSort(arr);
console.log(arr);
//End of bubbleSort



// mergesort and merge
function merge(left, right){
    var result = [],
    il = 0,
    ir = 0;

  while (il < left.length && ir < right.length){
    if (left[il] < right[ir]){
      result.push(left[il++]);
    } else{
      result.push(right[ir++])
    }
  }
return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(arr) {
  if (arr.length <2){
    return arr;
  }

  var middle = Math.floor(arr.length / 2),
  left = arr.slice(0, middle),
  right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}
mergeSort(arr);
//End of mergeSort



//Start of binarySearch
var arr2 = mergeSort(arr);
function binarySearch(arr2, item) {
  // Your code here
  let min = 0;
  let max = arr.length-1;
  var mid;
  var element;

  while (min <= max){
    mid = Math.floor((max + min)/2);
    element = arr2[mid];
    if (element < item){
      min = mid +1;
    } else if (element > item){
      max = mid -1;
    } else {
      return mid;
    }
  }
  return -1;
}

// Tests

if (typeof describe === 'function') {

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort());
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort());
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
