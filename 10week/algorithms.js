"use strict";

const assert = require("assert");

const LIST_AMOUNT = 30;
const INT_LIMIT = 10;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];
for (let i = 0; i < LIST_AMOUNT; i++) arr.push(getRandomInt(0, INT_LIMIT));

function bubbleSort(arr) {
  let sorted = true;
  do {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
  } while (!sorted);
  return arr;
}
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

function mergeSort(arr) {
  // Your code here
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(arr1, arr2) {
  let sortedArray = [];

  while (arr1.length !== 0 && arr2.length !== 0) {
    // compare first elements of arrays, shift smaller element and push to sortedArr
    sortedArray.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  return sortedArray.concat(arr1.length ? arr1 : arr2);
}

function binarySearch(arr, item) {
  // Your code here
  let mid = Math.floor(arr.length / 2);
  let midValue = arr[mid];

  if (arr.length < 2) return false;
  if (midValue === item) return mid;

  return midValue < item
    ? binarySearch(arr.slice(0, mid))
    : binarySearch(arr.slice(mid));
}

// Tests

if (typeof describe === "function") {
  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe("bubbleSort()", () => {
    it("should sort array", () => {
      console.log("LOG: before sorting", arr);
      const sorted = bubbleSort(arr);
      console.log("LOG: after sorting ", sorted);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  xdescribe("#mergeSort()", () => {
    it("should sort array", () => {
      console.log("LOG: before sorting", arr);
      const sorted = mergeSort(arr);
      console.log("LOG: after sorting ", sorted);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe("#binarySearch()", () => {
    it("should return the index of given item if sorted array contains it", () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      console.log("LOG: idx", idx);
      assert.equal(idx, 2);
    });
    it("should return false if item not in sorted array", () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      console.log("LOG: idx", idx);
      assert.equal(idx, false);
    });
  });
} else {
  console.log("Run the tests!");
}
