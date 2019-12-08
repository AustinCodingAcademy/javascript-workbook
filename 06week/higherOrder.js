'use strict';

const assert = require('assert');

// map function
function map(arr, callback) {
let newArr = [];
for(let i = 0; i < arr.length; i++) {
newArr.push(callback(arr[i]));
}
return newArr;
}

map([1, 2, 3], function(num) {
return num * num;
});

// filter function
function filter(arr, callback) {
let newArr = [];
for(let i =0; i < arr.length; i++) {
if (callback(arr[i]) === true) {
newArr.push(arr[i]);
}
} return newArr;
}

filter([1, 2, 3], function(x) {
return x % 2 === 0;
});

//reduce function
function reduce(arr, callback) {
let count = 0;
for( let i = 0; i < arr.length; i++) {
count = callback(count, arr[i]);
}
return count;
}

reduce( [1, 2, 3], (accumulator, currentValue) => accumulator + currentValue);

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

describe('#filter()', () => {
it('should return an array of items that pass the predicate test', () => {
const filtered = filter([1, 2, 3], (num) => {
return num % 2 === 0;
});
assert.deepEqual(filtered, [2]);
});
});

describe('#reduce()', () => {
it('should return the total of all the numbers in an array', () => {
const reduced = reduce([1, 2, 3], (accumulator, currentValue) => {
return accumulator + currentValue;
});
assert.deepEqual(reduced, 6);
});
});

} else {

console.log('Only run the tests on this one!')

}