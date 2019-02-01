"use strict";

const assert = require("assert");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(getRandomInt(0, 100));
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //Notice that j < (length - i)
    for (let j = 0; j < arr.length - i - 1; j++) {
      //compare positions
      if (arr[j] > arr[j + 1]) {
        //swich the numbers
        let temp = arr[j]; //variable to hold the current number
        arr[j] = arr[j + 1]; //swap current number with adjacent number
        arr[j + 1] = temp; //swap adjacent number with current number
      }
    }
  }
  return arr;
}

// bubbleSort(arr);

// function mergeSort(arr) {
//   // Your code here
//   let leftArr;
//   let rightArr;
//   leftArr = arr.slice(0, arr.length / 2);
//   rightArr = arr.slice(arr.length / 2);
//   // mergeHelper(leftArr, rightArr);
//   if (arr.length !== 1) {
//     mergeHelper(newLeftArr, newRightArr);
//     newLeftArr = mergeSort(leftArr);
//     newRightArr = mergeSort(rightArr);
//   }
//   return arr;
// }
// console.log("TCL: mergeSort -> mergeHelper", mergeHelper);

// function mergeHelper(newLeftArr, newRightArr) {
//   if (newLeftArr[0] < newRightArr[0]) {
//     newRightArr.unshift(newLeftArr.shift());
//   } else {
//     newLeftArr.unshift(newRightArr.shift());
//   }
//   return newLeftArr.concat(newRightArr);
// }

// mergeSort function divides array --> combineMergeSort combines the divided arrays after comparing them
function mergeSort(arr) {
  // use mergeSort to cut up the array into smaller and smaller pieces (divided by 2)
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  // console.log("TCL: mergeSort -> mid", mid);
  // dividing the array into two using recursion
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  // console.log("TCL: mergeSort -> right", right);
  // return the result (calling combineMergeSort)
  return combineMergeSort(mergeSort(left), mergeSort(right));
}

function combineMergeSort(left, right) {
  let result = [];
  // console.log("TCL: combineMergeSort -> result", result);
  let leftTemp = 0;
  let rightTemp = 0;
  // when both indexes are smaller than the array length push the smaller value and move over to the next index
  while (leftTemp < left.length && rightTemp < right.length) {
    if (left[leftTemp] < right[rightTemp]) {
      result.push(left[leftTemp++]);
    } else {
      result.push(right[rightTemp++]);
    }
  }
  return result.concat(left.slice(leftTemp).concat(right.slice(rightTemp)));
}

// *******BASIC RECURSION EXPLINATION
// increment(num){
//   num++
//   if(num===10){
//     return num
//   } else {
//     return increment(num)
//   }
// }

// function factorial(x) {
//   if (x < 0) return;
//   if (x === 0) return 1;
//   console.log(x, "*", x - 1);
//   return x * factorial(x - 1);
// }
// console.log(factorial(7));

function binarySearch(arr, item) {
  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor(start + stop / 2);

  while (arr[middle] !== item && start < stop) {
    if (item < arr[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + stop) / 2);
    if (item !== arr[middle]) {
      return false;
    }
  }
  return arr[middle] !== item ? -1 : middle;
}

// Tests

if (typeof describe === "function") {
  function comparator(a, b) {
    // console.log("TCL: comparator -> a, b", a, b);

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
      // console.log("TCL: sorted", sorted);
      // console.log("TCL: arr.sort(comparator)", arr.sort(comparator));
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
