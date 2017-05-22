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

function comparator(a, b) {
  if (Number(a) < Number(b)) return -1;
  if (Number(a) > Number(b)) return 1;
  return 0;
}

function bubbleSort(arr) {
  // Your code here
  for (let i=0; i<arr.length; i++) { //look for each array item
    if (arr[i] > arr[i+1]) { // if the item on the left is > than on right
      let value = arr[i+1]; //assign it to the variable 'value'
      arr[i+1] = arr[i]; //swap the value
      arr[i] = value; //assign the holding value to the first item
    }
  }
  return arr; //return array
}

function mergeSort(arr) {
  // Your code here
  if (arr.length < 2) {
    return arr;
  }
  //start by finding the median then divide arrays by half
  let median = Math.floor(arr.length / 2); //round down to an integer
  let firstPart = arr.slice(0,median); //first half of the array
  let secondPart = arr.slice(median); //second half of the array

  //recursive array which divides by half
  let sortedFirst = mergeSort(firstPart);
  let sortedSecond = mergeSort(secondPart);

  //define an empty array and push the elements in order after comparing
  let newArray = [];

  while (sortedFirst.length && sortedSecond.length) { //loop stops when both arrays are empty
    //take first elements of each array
    let element1 = sortedFirst[0];
    let element2 = sortedSecond[0];
    //compare them and push it into the new array
    if(element1 < element2) {
      newArray.push(sortedFirst.shift()); //place element1 in the array if it is smaller
    } else {
      newArray.push(sortedSecond.shift());
    }
  }

  if (!sortedFirst.length) {
    newArray = newArray.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    newArray = newArray.concat(sortedFirst);
  }
  return newArray;
}

function binarySearch(arr, item) {
  // Your code here
  let firstIndex = 0; //start with index 0 and assign to firstIndex
  let lastIndex = arr.length - 1; //find the last index and assign to lastIndex
  let currentIndex; // declaring variable to hold current index
  let currentElement; //declaring variable to hold current element

  while (firstIndex <= lastIndex) { //loop through as long as first index is <= to the last index
    currentIndex = Math.floor((firstIndex + lastIndex) / 2);//find the median by rounding the number down to an integer
    currentElement = arr[currentIndex]; //find the element by looking at its index
    if (currentElement < item) { //if the target is greater than the current element
      firstIndex = currentIndex + 1; //reaasign first index and eliminate half of the items
    } else if (currentElement > item) { //if the current element is greater than target
      lastIndex = currentIndex - 1; //reaasign last index and eliminate other half of the array
    } else {
      return currentIndex; //if it is found, return its index
    }
  }
  return false; //if the item is not in the array, return false
}

// Tests =======================================================

if (typeof describe === 'function') {

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
      const idx = binarySearch([1,2,3,4], 3);
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
