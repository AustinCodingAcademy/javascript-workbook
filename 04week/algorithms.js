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
  // Iterate through each index of the array given
  for (i = 0; i < arr.length; i++) {
    // If the number at the current index is larger than the number to the right
    if (arr[i] > arr[i + 1]) {
      // Hold the number at the current index in a temporary variable
      let temp = arr[i];
      // Switch the number at the current index with the (smaller) number to the right
      arr[i] = arr[i + 1];
      // Put the larger number in the position to the right of the current index's number
      arr[i + 1] = temp;
    }
  }
  // After the loop is done, give me back the mutated array
  return arr;

}

function mergeSort(arr) {
  // Return once we hit an array with a single item, breaks the recursion
  if (arr.length === 1) {
    return arr;
  }
  // Get the middle item of the array rounded down
  const middle = Math.floor(arr.length / 2);
  // Items on the left side
  const left = arr.slice(0, middle);
  // Items on the right side
  const right = arr.slice(middle);
  // Merge the sorted left and right sorted arrays; Merge() defined below.
  return merge(
    // Recursively divide the array in half again and again until the arr lenght is a single item
    mergeSort(left),
    // Recursively divide the array in half again and again until the arr lenght is a single item
    mergeSort(right)
  )
}

function binarySearch(arr, item) {
  // Begin an array to put the new array in
  let result = [];
  // Create iterator for left side
  let indexLeft = 0;
  // Create iterator for right side
  let indexRight = 0;
  // While there are items in each array
  while (indexLeft < left.length && indexRight < right.length) {
    // If the item at the beginning of the LEFT sorted array is larger
    // than the item at the beginning of the right sorted array
    if (left[indexLeft] < right[indexRight]) {
      // Add a copy of the left array's first number to the end of the 'result' array
      result.push(left[indexLeft])
      // Move the iterator on the left sorted array to the right by one index
      indexLeft++
      // The item at the beginning of the RIGHT sorted array is larger
    } else {
      // Add a copy of the right array's first number to the end of the 'result' array
      result.push(right[indexRight])
      // Move the iterator on the right sorted array to the right by one index
      indexRight++
    }
  }
  // Add and return the remaining items in the left and right arrays
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}



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
