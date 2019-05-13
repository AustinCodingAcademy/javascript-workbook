'use strict';

const assert = require('assert');

//.map() function that takes an array of items and a function that returns an array with each item manipulated by that function.

const arr = [1, 2, 3];
const mapped = arr.map(number => number * number);

console.log(mapped);

//.reduce() function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

const checkObject = [{price: 10},{price: 20},{price: 30}];
const checkArray = [10, 20, 30];
function reduce(array, accumulator) {
    accumulator = accumulator || 0;
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] == 'number') {
            accumulator = accumulator + array[index];
        } else if(typeof array[index] == 'object') {
            for(let i in array[index]){
                accumulator = accumulator + array[index][i];
            }
        }   
    }
    return accumulator;
}
 // Set accumulator to 10
const sum = reduce(checkArray, 10);
console.log("ANSWER: ",sum);

//.filter() function that takes an array of items and a function that returns an array with only the items that return true in the function.

const nums = [1, 2, 3]
const filtered = nums.filter(number => (number % 2 === 0));

console.log(filtered)
  
if (typeof describe === 'function') {
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

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], 0);
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}
