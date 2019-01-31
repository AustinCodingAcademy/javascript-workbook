"use strict";

const assert = require("assert");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 10));
}

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //Notice that j < (length - i)
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       //compare positions
//       if (arr[j] > arr[j + 1]) {
//         //swich the numbers
//         let temp = arr[j]; //variable to hold the current number
//         arr[j] = arr[j + 1]; //swap current number with adjacent number
//         arr[j + 1] = temp; //swap adjacent number with current number
//       }
//     }
//   }
//   return arr;
// }

// bubbleSort(arr);

function mergeHelper(newLeftArr, newRightArr) {
  if (newLeftArr[0] < newRightArr[0]) {
    newRightArr.unshift(newLeftArr.shift());
  } else {
    newLeftArr.unshift(newRightArr.shift());
  }
  return newLeftArr.concat(newRightArr);
}

function mergeSort(arr) {
  // Your code here
  let temp = [];
  let leftArr;
  let rightArr;
  leftArr = arr.slice(0, arr.length / 2);
  rightArr = arr.slice(arr.length / 2);
  mergeHelper(leftArr, rightArr);
  if (arr.length !== 1) {
    newLeftArr = mergeSort(leftArr);
    newRightArr = mergeSort(rightArr);
  }
  return arr;
}

function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  console.log(x, "*", x - 1);
  return x * factorial(x - 1);
}
// console.log(factorial(7));

function binarySearch(arr, item) {
  // Your code here
}

// Tests

if (typeof describe === "function") {
  function comparator(a, b) {
    // console.log("TCL: comparator -> a, b", a, b);

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
      // console.log("TCL: arr.sort(comparator)", arr.sort(comparator));
      assert.strictEqual(sorted, arr.sort(comparator));
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
