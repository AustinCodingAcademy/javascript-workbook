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

//I didn't write this but I like it's comprehensiveness
function bubbleSort(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) { //Number of passes
    for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
        //Compare the adjacent positions
      if(arr[j] > arr[j+1]) {
          //Swap the numbers
        var tmp = arr[j];  //Temporary variable to hold the current number
        arr[j] = arr[j+1]; //Replace current number with adjacent number
        arr[j+1] = tmp; //Replace adjacent number with current number
      }
    }
  }
  return arr;
}
  // Your code here


function mergeSort(arr) {
  if (arr.length < 2){
    return arr;
  }

  //halving the arrays
  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length /2);

  //recurse
  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  //sortedArr container
  let sortedArr = [];
//sorting
  while (sortedFirst.length && sortedSecond.length){
    if(sortedFirst[0]< sortedSecond[0]){
      sortedArr.push(sortedFirst.shift());
    } else {
      sortedArr.push(sortedSecond.shift());
    }

  }

  if(!sortedFirst.length){
    sortedArr =sortedArr.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    sortedArr = sortedArr.concat(sortedFirst);
  }
  return sortedArr;
}

//console.log(mergeSort(arr))

function binarySearch(needle, haystack) {

//half the index, rounding up if necc.
  let halfIdx = Math.ceil((haystack.length - 1) / 2);
  console.log(haystack);
  //set the needle to keep track of the exact middle
  let needleIdx = halfIdx;

//split the array
  let firstHalf = haystack.slice(0, halfIdx);
  let secondHalf = haystack.slice(halfIdx);

  //while at least one half has at least 2 items
  while (firstHalf.length > 1 || secondHalf.length > 1){
  //if the needle is less than the first item of the second half, the item must be
  //in the first half

    if (needle < secondHalf[0]) {
    //calc middle of first half
      halfIdx = Math.ceil((firstHalf.length -1)/ 2);
      //halving the 1st halfIdx
      secondHalf = firstHalf.slice(halfIdx);
      firstHalf = firstHalf.slice(0, halfIdx);
      //move the needle to the first item of the second half(of the first half)
      needleIdx -= secondHalf.length;
    } else{ //needle must be in second half
      halfIdx - Math.ceil((secondHalf.length - 1) / 2);
      //split in half
      firstHalf = secondHalf.slice(0, halfIdx);
      secondHalf = secondHalf.slice(halfIdx);
      needleIdx +=firstHalf.length;
    }
  }
  //eventually both or one half will have one item
  if (firstHalf[0] === needle) {
    //if it's in the first half, then subtract 1 to move it back from the second
    //half
    return needleIdx - 1;

  } else if (secondHalf[0] === needle) {
    //otherwise we got it
    return needleIdx;

  }
  //or we don't
  return false;


}


// function binarySearch(needle, haystack) {
//
// //half the index, rounding up if necc.
// let halfIdx = Math.ceil((haystack.length - 1) / 2);
//
// //set the needle to keep track of the exact middle
// let needleIdx = halfIdx;
//
// //split the array
// console.log(haystack);
// let firstHalf = haystack.slice(0, halfIdx);
// let secondHalf = haystack.slice(halfIdx);
//
// //while at least one half has at least 2 items
// while (firstHalf.length > 1 || secondHalf.length > 1){
// //if the needle is less than the first item of the second half, the item must be
// //in the first half
//
// if (needle < secondHalf[0]) {
//   //calc middle of first half
//   halfIdx = Math.ceil((firstHalf.length -1)/ 2);
//   //halving the 1st halfIdx
//   secondHalf = firstHalf.slice(halfIdx);
//   firstHalf = firstHalf.slice(0, halfIdx);
//   //move the needle to the first item of the second half(of the first half)
//   needleIdx -= secondHalf.length;
//   } else{ //needle must be in second half
//     halfIdx - Math.ceil((secondHalf.length - 1) / 2);
//     //split in half
//     firstHalf = secondHalf.slice(0, halfIdx);
//     secondHalf = secondHalf.slice(halfIdx);
//
//     needleIdx +=firstHalf.length;
//
//     }
//
//   }
//   //eventually both or one half will have one item
//   if (firstHalf[0] === needle) {
//     //if it's in the first half, then subtract 1 to move it back from the second
//     //half
//     return needleIdx-1;
//
//   } else if (secondHalf[0] === needle) {
//     //otherwise we got it
//     return needleIdx +1;
//
//   }
//   //or we don't
//   return false;
//
//
// }
// console.log(binarySearch(3, [1,2,3,4,5,6,7,8,9,10]));
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
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch( [1,2,3,4],5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
