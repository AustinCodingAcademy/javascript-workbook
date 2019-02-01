"use strict";

const assert = require("assert");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(getRandomInt(0, 1000));
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      }
    }
  }
  return arr;
  // arr[i] > arr[j]
  //set 1 to temp
  // set number 2 to number 1
  // set number 1 to number 2
  //continue on checking starting at number 2 working through the array
}

//sorting entire array from smallest to largest number by comparing values side by side

function mergeSort(arr) {
  //splitting array into pieces and comparing the smaller pieces then placing them in order by small pieces and then make
  // pices larger then continue to sort.
  let midArr = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midArr);
  console.log("TCL: mergeSort -> leftArr", leftArr);
  let rightArr = arr.slice(midArr);
  console.log("TCL: mergeSort ->  rightArr", rightArr);
  return mergeSort(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let Array = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      reult.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

function binarySearch(arr, item) {
  // Your code here
}

// Tests

if (typeof describe === "function") {
  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  xdescribe("#bubbleSort()", () => {
    it("should sort array", () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe("#mergeSort()", () => {
    it("should sort array", () => {
      const sorted = mergeSort(arr);
      console.log("TCL: sorted", sorted);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  xdescribe("#binarySearch()", () => {
    it("should return the index of given item if sorted array contains it", () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it("should return false if item not in sorted array", () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      console.log(idx);
      assert.equal(idx, false);
    });
  });
} else {
  console.log("Run the tests!");
}
