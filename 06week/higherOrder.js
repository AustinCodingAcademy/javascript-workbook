'use strict';

const assert = require('assert');
//
//
// // for filter test:
// let array1 = [1,2,3,4,5];
//
// let evenFilter = function(num){
//   return num%2 === 0;
// };
//
// let oddFilter = function(num){
//   return !evenFilter(num);
// };
//
// function myFilterImpl(arr, callback) {
//   let savedOff = [];
//   for (let i=0; i<arr.length; i++){
//     let element = arr[i];
//     if (callback(element) === true){
//       savedOff.push(element);
//     }
//   }return savedOff;
// }
//
//   // let expected = [2,4];
//
//   let mappedEven = array1.map(myFilterImpl())
//   let evenResults = myFilterImpl(array1, evenFilter);
//   console.log("evenResults: " +evenResults);
//   let oddResults = myFilterImpl(array1, oddFilter);
//   console.log("oddResults: " +oddResults);
//
// // for map:
//
// let array2 = [99,87,23,67,13,77];
//
// let gradeConverter = function(num){
//   let round = parseInt(num/10);
//   if (round <7) {
//     return 'F';
//   } else if (round ===7){
//     return 'C';
//   } else if (round === 8){
//     return 'B';
//   } else if (round >8) {
//     return 'A';
//   }
// };
//
// function map(arr, callback) {
//   let results = [];
//   for (let i=0; i<arr.length; i++){
//     let element = arr[i];
//     results.push(callback(element));
//   }return results;
// };
//
// let converted = myMapImpl(array2, gradeConverter);
// console.log(converted);
//
// // for some
// let array3 = [1,2,3,4,5,6,7,8,9,10];
// let array4 = [1,2,3,4,-5,6,7,8,9,10];
//
// let isPos = function(num) {
//   if (num>0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// let isNeg = function(num) {
//   if (num<0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// let mySomeImp = function (arr,callback) {
//   for (var i=0; i<arr.length; i++){
//     let numb = arr[i];
//     if (callback(numb) === true) {
//       return true;
//     }
//   }
//   return false;
// }
//
// console.log('array3 has some negative values: '+mySomeImp(array1,isNeg));
// console.log('array4 has some negative values: '+mySomeImp(array2,isNeg));
//
// // for Every
//
// let myEveryImp = function(arr,callback) {
//   for (var i=0; i<arr.length; i++){
//     let numb = arr[i];
//     if (callback(numb) === false) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log('Ever value in array3 is a positive value: '+myEveryImp(array1,isPos));
// console.log('Ever value in array4 is a positive value: '+myEveryImp(array2,isPos));

function forEach(arr, callback) {
  let count = 0;
  for (var a=0; a<arr.length; a++){
    count++;
    let element = arr[a];
    callback(element);
  }
  return count;
}

function map(arr, callback) {
  let results = [];
  for (let i=0; i<arr.length; i++){
    let element = arr[i];
    results.push(callback(element));
  }return results;
};


function filter(arr, callback) {
  let savedOff = [];
  for (let i=0; i<arr.length; i++){
    let element = arr[i];
    if (callback(element) === true){
      savedOff.push(element);
    }
  }return savedOff;
};

function some(arr, callback) {
  for (var i=0; i<arr.length; i++){
      let numb = arr[i];
      if (callback(numb) === true) {
        return true;
      }
    }
  return false;
}

function every(arr, callback) {
  for (var i=0; i<arr.length; i++){
    let numb = arr[i];
    if (callback(numb) === false) {
      return false;
    }
  }
  return true;
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
