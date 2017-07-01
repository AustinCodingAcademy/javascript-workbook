'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr) {

  var sorted;;
  do {
    sorted = false;
    for(var i=0; i<arr.length; i++){
      if(arr[i] > arr[i+1]){
       let temp = arr[i];
       arr[i] = arr[i+1];
       arr[i+1] = temp;
       sorted = true;
      }
    }
  } while (sorted);
  return arr;
 }


function mergeSort(arr) {
  if(arr.length < 2){
    return arr;
  }
  var middle = arr.length / 2;
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right){
  var final = [];
  while (left.length && right.length){
    if (left[0] <= right[0]){
    final.push(left.shift());
  }
  else {
    final.push(right.shift());
  }
  while(left.length){
    final.push(left.shift());
  }
  while(right.length){
    final.push(right.shift());
  }
  return final;
}
}

function binarySearch(arr, item) {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max)/2);

  while (arr[mid] !== item && min < max){
    if (item < arr[mid]){
      max = mid - 1;
    }
    else if (item > arr[mid]){
      min = mid + 1;
    }
    mid = Math.floor((min + max)/2);
  }
  return (arr[mid]!==item) ? false : mid;
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
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
