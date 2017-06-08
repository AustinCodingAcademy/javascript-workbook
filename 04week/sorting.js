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

//Bubble Sort

function bubbleSort(arr) {
  var arr = [1, 3, 2, 9, 12, 4, 5];

function bubbleSort() {
  var i, j, x;
}
  i = arr.length; while(++j, ++x) {
  for(i = 0, j = 1; i < x; ++i, ++j)
    if(arr[i] > arr[j]) { x = arr[i]; arr[i]=arr[j]; arr[j]= x;}
  }
  return arr;
}
console.log(bubbleSort);

//Merge Sort

function mergeSort(arr) {
  var arr = [5, 3, 4, 10, 7, 11, 6, 2];

function mergeSort(arr) {
  var len   = arr.length;
  var mid   = len/2;
  var left  = arr.slice(0,mid);
  var right = arr.slice(mid);

    return merge(mergeSort(left)),mergeSort(right);
}

function binarySearch(arr) {
  var a = [1, 2, 4, 6, 1, 100, 0, 10000, 3];

a.sort(function (a, b) {
    return a - b;
});

console.log('a,', a);

function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);
    console.log(arr[mid], i);

    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        console.log('mid lower', arr[mid], i);
        binarySearch(arr.splice(mid, Number.maxValue), i);
    } else if (arr[mid] > i && arr.length > 1) {
        console.log('mid higher', arr[mid], i);
        binarySearch(arr.splice(0, mid), i);
    } else {
        console.log('not here', i);
        return -1;
    }

}
var result = binarySearch(a, 100);
console.log(result);
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
