'use strict';

const assert = require('assert');

//This executes a provided function once for each array element.
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    callback();
  }
}

//This transforms an array by applying a function to  all of its elements
//and building a new array from the returned values.
//The new array will have the same length as the input array, but its
//content will have been “mapped” to a new form by the function.
function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

//This function filters out the elements in an array that don’t pass a test.
function filter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (callback(arr[i]))
      newArr.push(arr[i]);
  }
  return newArr;
}

//This function returns true if there is |any element in the array| that
// passes on the test provided by callback, and false otherwise.
function some(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}

//Function returns true if |every element in the array| passes on the test
// provided by callback, and false otherwise.
function every(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    if (!callback(arr[i])){
      return false;
    }
  }
  return true;
}

//Tests==================================================

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

  getPrompt();

}
