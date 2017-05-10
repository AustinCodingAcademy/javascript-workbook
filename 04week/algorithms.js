'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const arr = [];
//var needle = [2];
for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 10));
}

function bubbleSort(arr) {
  var length = arr.length; //setting var to keep up with length of total array
  for (var i = length - 1; i >= 0; i--) { //starting a count with a for loop from the end of the array(ie right to left)
    for (var j = 1; j <= i; j++) { //starting count from other direction (ie left to right)
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log('11', arr);
}


function mergeSort(arr) {
  // Your code here
  var len = arr.length; //setting var to hold length of entire array
  if (len < 2) //this verifies that the array is large enough to be split in half
    return arr; //array either not big enough or no longer big enough so function is escaped
  var mid = Math.floor(len / 2), //setting up cuts. setting var=mid to the rounded down index of arrays length divided by 2
    left = arr.slice(0, mid), //slicing from beginning to mid defined just above^^^^^
    right = arr.slice(mid); //slicing from end to mid defined 2 lines above^^^^^^^^

  return merge(mergeSort(left), mergeSort(right)); //returning value of each slice and sending them to the merge function which will sort and recombine the data
}


function merge(left, right) {
  var result = [], //empty array to hold finished product
    lLen = left.length, //setting lLen = length of 1 array
    rLen = right.length, //setting rLen = length of other array
    l = 0, //setting constant integer to compare against
    r = 0; //^^^^^^^^^see just above ^^^^^^^
  while (l < lLen && r < rLen) { //starting the code running here
    if (left[l] < right[r]) { //if left arrays index of 0 is less than right arrays index of 0 data will be pushed to left array with next command below this
      result.push(left[l++]); //pushing data onto end of left array, creating new array
    } else {
      result.push(right[r++]); //if conditional above isn't met then data will be pushed to end of other array resulting in a sorting type action
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r)); //i think this is building new array to return to above statement and continue to be sorted

}

function binarySearch(needle, arr) {
  //return index or false if nothing is there}
  let splitIndex = Math.ceil((arr.length - 1) / 2);
  let arrIndex = splitIndex;
  var firstHalf = arr.slice(0, splitIndex);
  var secondHalf = arr.slice(splitIndex);
  while (firstHalf.length > 1 && secondHalf.length > 1) {
    if (needle < secondHalf[0]) {
      splitIndex = Math.ceil(firstHalf.length - 1 / 2);
      secondHalf = firstHalf.slice(splitIndex);
      firstHalf = firstHalf.slice(0, splitIndex);
      arrIndex = secondHalf.length;
    } else {
      splitIndex = Math.ceil((secondHalf.length - 1) / 2);
      firstHalf = secondHalf.slice(0, splitIndex);
      secondHalf = secondHalf.slice(splitIndex);
      arrIndex += firstHalf.length;
    }
  }

  if (firstHalf[0] === needle) {
    return arrIndex - 1;
  } else if (secondHalf[0] === needle) {

    return arrIndex;
  }
  return false;

}

function getPrompt() {
  bubbleSort(arr);
  mergeSort(arr);
  binarySearch(20, arr);

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
