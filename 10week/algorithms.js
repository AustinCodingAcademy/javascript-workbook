"use strict";

const assert = require("assert");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(getRandomInt(0, 20));
}

function bubbleSort(arr) {
  let sorted;
  do {
    sorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = true;
      }
    }
  } while (sorted);
  return arr;
}

function mergeSort(arr) {
  // Your code here
  let leftarr;
  let rightarr;
  console.log("array came in: ", arr);

  if (arr.length < 2) {
    return arr;
  } else {
    leftarr = mergeSort(arr.slice(0, arr.length / 2));
    console.log("left array: ", leftarr);

    rightarr = mergeSort(arr.slice(arr.length / 2));
    console.log("right array: ", rightarr);
  }

  return mergeCompare(leftarr, rightarr);
}

function mergeCompare(arr1, arr2) {
  console.log("arr1: ", arr1, "arr2: ", arr2);
  let result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  console.log("mergeCompare result: ", result);

  return result.concat(arr1.length ? arr1 : arr2);
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

  describe("#bubbleSort()", () => {
    it("should sort array", () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe("#mergeSort()", () => {
    it("should sort array", () => {
      const sorted = mergeSort(arr);
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
      assert.equal(idx, false);
    });
  });
} else {
  console.log("Run the tests!");
}
