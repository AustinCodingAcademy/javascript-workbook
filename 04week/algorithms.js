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
  for (var i = arr.length-1; i >=0; i--){
    for (var j = 1; j <=i; j++){
      if (arr[j-1] > arr[j]){
        let holder = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = holder;
      }
    }
  }
  return arr;
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

function binarySearch(arr, item) {
  let halfIdx     = Math.ceil((arr.length - 1) / 2);
  let needleIdx   = halfIdx;
  let firstHalf   = arr.slice(0, halfIdx);
  let secondHalf  = arr.slice(halfIdx);
  while (firstHalf.length > 1 || secondHalf.length > 1) {
     if (item     < secondHalf[0]) {
       halfIdx    = Math.ceil((firstHalf.length - 1) / 2);
       secondHalf = firstHalf.slice(halfIdx);
       firstHalf  = firstHalf.slice(0, halfIdx);
       needleIdx  -= secondHalf.length;
     } else {
       halfIdx    = Math.ceil((secondHalf.length - 1) / 2);
       firstHalf  = secondHalf.slice(0, halfIdx);
       secondHalf = secondHalf.slice(halfIdx);
       needleIdx  += firstHalf.length;
     }

   }

   if (firstHalf[0] === item) {
     return needleIdx - 1;
   } else if (secondHalf[0] === item) {
     return needleIdx;
   }
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
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  // describe('#bubbleSort()', () => {
  //   it('should sort array', () => {
  //     const sorted = bubbleSort(arr);
  //     assert.deepEqual(sorted, arr.sort());
  //   });
  // });
  //
  // describe('#mergeSort()', () => {
  //   it('should sort array', () => {
  //     const sorted = mergeSort(arr);
  //     assert.deepEqual(sorted, arr.sort());
  //   });
  // });

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
