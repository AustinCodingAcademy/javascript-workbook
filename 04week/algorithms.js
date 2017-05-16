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
  var arr;
   do {
       arr = false;
       for (var i=0; i < a.length-1; i++) {
           if (a[i] > a[i+1]) {
               var temp = a[i];
               a[i] = a[i+1];
               a[i+1] = temp;
               arr = true;
           }
       }
   } while (swapped);
}

bubbleSort(a);
console.log(a);
}

function mergeSort(arr) {
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

console.log(mergeSort(a));/ Your code here


function binarySearch(arr, searchNumb) {
  function getMidPoint(arr, searchNumb) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var newArr = arr;
    console.log(arr);
    console.log("array midpoint value: " + arr[midPoint]);

    if (arr[midPoint] > searchNumb) {

        var newArr = arr.slice(0, arr[midPoint]);
        return getMidPoint(newArr, searchNumb);

    } else if (arr[midPoint] < searchNumb) {

        var newArr = arr.slice(midPoint, arr.length);
        return getMidPoint(newArr, searchNumb);

    } else {
        return arr
    }
}
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
