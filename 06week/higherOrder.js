"use strict";

const assert = require("assert");

// function forEach(arr, callback) {
//   // Your code here
// }

function map(arr, callback) {
  // Your code here
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let elements = callback(arr[i]);
    newArray.push(elements);
  }
  return newArray;
}
const mapIt = map([10, 20, 30], function(n) {
  return n * n;
});
//console.log(mapIt);

function filter(arr, callback) {
  // Your code here
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const filterIt = filter([1,2,3], function(num) {
  return num % 2 === 0;
});


// function some(arr, callback) {
//   // Your code here
// }

// function every(arr, callback) {
//   // Your code here
// }


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
const sum = reduce(checkArray, 10); // Set accumulator to 10
console.log("ANSWER: ",sum);

if (typeof describe === "function") {
  // describe('#forEach()', () => {
  //   it('should call the callback the array.length number of times', () => {
  //     let count = 0;
  //     forEach([1, 2, 3], () => {
  //       count++;
  //     });
  //     assert.equal(count, 3);
  //   });
  // });

  describe("#map()", () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, num => {
      return num * num;
    });
    it("should return new array with mapped items", () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it("should not affect the original array", () => {
      assert.deepEqual(arr, [1, 2, 3]);
    });
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], 0);
      assert.deepEqual(reduced, 6);
    });
  });

  describe("#filter()", () => {
    it("should return an array of items that pass the predicate test", () => {
      const filtered = filter([1, 2, 3], num => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
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
  console.log("Only run the tests on this one!");
}
