'use strict';

const assert = require('assert');

// function forEach(arr, callback) {
//   // Your code here
// }

function map (arr, callback) {
  // define a new array
  let output = [];
  // create loop to iterate through array
  for (let i = 0; i < arr.length; i++) {
    // push the matching array items to the new array
    output.push(callback(arr[i]));
  }
  // return the new array
  return output;
};

function filter (arr, callback) {
  // define a new desitnation array
  let filtered = [];
  // create loop to iterate through array
  for (let i = 0; i < arr.length; i++) {
    // check to see if the array item fits in the callback array
    if (callback(arr[i])) {
      // if so, push index to new array
    filtered.push(arr[i]);
  }
}
  return filtered
};

function reduce(arr, callback, currentValue) {
  // determine the current value, if none given it is 0, or just start at the first array[i]
  if(currentValue) {
    for(let i = 0; i < arr.length; i++) {
    // run the index item and current value through the function applied
      currentValue = callback(arr[i], currentValue);
    }
  } else {
  currentValue = arr[0];
  // if no currrent value provided, first item in array will start. begin loop on the next array index
  for (let i = 1; i < arr.length; i++) {
   currentValue = callback(arr[i], currentValue);
    }
  }
  return [currentValue];
};

// function some(arr, callback) {
//   // Your code here
// }

// function every(arr, callback) {
//   // Your code here
// }

if (typeof describe === 'function') {

  // describe('#forEach()', () => {
  //   it('should call the callback the array.length number of times', () => {
  //     let count = 0;
  //     forEach([1, 2, 3], () => {
  //       count++;
  //     });
  //     assert.equal(count, 3);
  //   });
  // });


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
  describe('#reduce()', () => {
    it('it should return a total of all the numbers in an array', () => {
      const reduced = reduce([1, 2, 3], (accumulator, currentValue) => {
        return accumulator + currentValue
      });
      assert.deepEqual(reduced, [6]);
    });
  });

  // describe('#some()', () => {
  //   let count = 0;
  //   const somed = some([1, 2, 3, 4], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return true if at least one item passes the predicate test', () => {
  //     assert.equal(somed, true);
  //   });
  //   it('should stop at the first item that passes the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  //   it('should return false if no items pass the predicate test', () => {
  //     const somed = some([1, 3, 5], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(somed, false);
  //   });
  // });

  // describe('#every()', () => {
  //   it('should return true if at all passes the predicate test', () => {
  //     const everied = every([2, 4, 6], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(everied, true);
  //   });
  //   let count = 0;
  //   const everied = every([2, 3, 4, 5], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return false if any item fails the predicate test', () => {
  //     assert.equal(everied, false);
  //   });
  //   it('should stop at the first item that fails the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  // });

} else {

  console.log('Only run the tests on this one!')

}
