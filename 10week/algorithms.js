"use strict";

const assert = require("assert");

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
  // Your code here
  let sorted;
  do {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  } while (!sorted);
  return arr;
}

function mergeSort(arr) {
  // Your code here
  if (arr.length === 1) {
    return arr;
  } else {
    const midpoint = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, midpoint));
    let arr2 = mergeSort(arr.slice(midpoint));
    let sortedArr = [];
    while (sortedArr.length != arr.length) {
      if (!arr2[0] || arr1[0] <= arr2[0]) {
        sortedArr.push(arr1.shift());
      } else {
        sortedArr.push(arr2.shift());
      }
    }
    return sortedArr;
  }
}

function binarySearch(arr, item) {
  // Your code here
  // if (arr.length === 1)
  // const midpoint = Math.floor(arr.length / 2);
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
  let arr = [4, 7, 3, 1, 1, 2];
  console.log(arr);
  console.log(mergeSort(arr));
}
