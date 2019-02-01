"use strict";

const assert = require("assert");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

//for (let i = 0; i < 1000; i++) {
//arr.push(getRandomInt(0, 1000));
//}

function bubbleSort(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomInt(0, 1000));
  }
  return arr;
}
//swap

//function swap(x, y) {
//var t = x;
//x = y;
//y = t;
//return [x, y];
//}
const swap = (arr, i, j) => {
  const akum = arr[i];
  arr[i] = arr[j];
  arr[j] = akum;
};

function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;

    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] - array[i] > 0) {
        swap(array, i - 1, i);
        swapped = true;
      }
    }
  } while (swapped !== false);
  return array;
}

const arr1 = bubbleSort(1000);

console.time("test");
bubbleSort(arr1);
console.timeEnd("test");

function shakerSort(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    for (let idx = leftIndex; idx < rightIndex; idx++) {
      if (array[idx] > array[idx + 1]) {
        swap(array, idx, idx + 1);
      }
    }
    rightIndex--;

    for (let idx = rightIndex; idx > leftIndex; idx--) {
      if (array[idx] < array[idx - 1]) {
        swap(array, idx, idx - 1);
      }
    }
    leftIndex++;
  }

  return array;
}
let arr2 = 1000;

console.time("Test 2");
shakerSort(arr2);
console.timeEnd("Test 2");

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.lenght / 2);
  var subLeft = mergeSort(arr.slice(0, mid));
  var subRight = mergeSort(arr.slice(mid));

  return mergeSort(subLeft, subRight);
}

function merge(node1, node2) {
  var result = [];
  while (node1.lenght > 0 && node2.lenght > 0)
    result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
  return result.contact(node1.lenght ? node1 : node2);
}

function binarySearch(arr, item) {
  // initial values for start, middle and end
  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  // While the middle is not what we're looking for and the list does not have a single item
  while (arr[middle] !== item && start < stop) {
    if (item < arr[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2);
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return arr[middle] !== item ? -1 : middle;
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

  describe("#binarySearch()", () => {
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
