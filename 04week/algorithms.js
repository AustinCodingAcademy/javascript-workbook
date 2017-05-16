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

var a = [24, 107, 5, 386, 170, 764, 158, 874, 4];
function bubbleSort(arr) {
  // Your code here
  var swapped;
   do {
       swapped = false;
       for (let x=0; i < a.length-1; x++) {
           if (a[x] > a[x+1]) {
               let temp = a[x];
               a[x] = a[x+1];
               a[x+1] = temp;
               swapped = true;
           }
       }
   } while (swapped);
}

function mergeSort(arr) {
  // Your code here
  if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

function binarySearch(arr, item) {
  // Your code here
   var lo = 0,
   hi = array.length - 1,
   mid,
   element;
while (lo <= hi) {
   mid = Math.floor((lo + hi) / 2, 10);
   element = array[mid];
   if (element < item) {
       lo = mid + 1;
   } else if (element > item) {
       hi = mid - 1;
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
