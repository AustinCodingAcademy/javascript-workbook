'use strict';
const assert = require('assert');

function map(array, callback) {
    let returnArray = [];
    for (let index = 0; index < array.length; index++) {
        let elements = callback(array[index]);
        returnArray.push(elements);
    }
    return returnArray;
}

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

function filter(array, callback, thisObject) {
    var filteredArray = [];
    var filterCallback = callback;
    if (thisObject) {
        filterCallback = callback.bind(thisObject);
    }
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] == 'number') {
            if (filterCallback(array[index], index, array)) {
                filteredArray.push(array[index]);
            }
        } else if(typeof array[index] == 'object') {
            for(let i in array[index]){
                if (filterCallback(array[index][i], index, array)) {
                    filteredArray.push(array[index][i]);
                }
            }
        }   
    }
    return filteredArray;
}

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
        const reducedObj = reduce([{price: 30}, {price: 40}, {price: 50}], 0);
        assert.deepEqual(reduced, 6);
        assert.deepEqual(reducedObj, 120);
      });
    });
  
    describe('#filter()', () => {
      it('should return an array of items that pass the predicate test', () => {
        const filtered = filter([1, 2, 3], (num) => {
          return num % 2 === 0;
        });
        const filteredObj = filter([{price: 30}, {price: 41}, {price: 50}], (num) => {
            return num % 2 === 0;
          });
        assert.deepEqual(filtered, [2]);
        assert.deepEqual(filteredObj, [30,50])
      });
    });
  } else {
    console.log('Only run the tests on this one!')
  }