'use strict';

var assert = require('assert');

function loopIt() {
  // should return an array with numbers 0 - 99

}

function onlyEvens() {
  // should return an array with all even numbers between 1 - 99

}

function fizzBuzz() {
  // should return an array of numbers between 0 - 99 where the numbers
  // divisible by 3 are replaced by the string "fizz", numbers divisible by 5
  // are replaced by the string "buzz", and the numbers divisble by both 3 and
  // 5 are replaced by fizzbuzz

}


// Tests

describe('#loopIt', function () {
  it('should return an array with numbers 0 - 99', function () {
    var array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99 ];
    assert.deepEqual(loopIt(), array);
  });
});

describe('#onlyEvens', function () {
  it('should return an array with all even numbers between 1 - 99', function () {
    var array = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98 ];
    assert.deepEqual(onlyEvens(), array);
  });
});

describe('#fizzBuzz', function () {
  it('should return an array of numbers between 0 - 99 where the numbers divisible by 3 are replaced by the string "fizz", numbers divisible by 5 are replaced by the string "buzz", and the numbers divisble by both 3 and 5 are replaced by fizzbuzz', function () {
    var array = [ 'fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz', 31, 32, 'fizz', 34, 'buzz', 'fizz', 37, 38, 'fizz', 'buzz', 41, 'fizz', 43, 44, 'fizzbuzz', 46, 47, 'fizz', 49, 'buzz', 'fizz', 52, 53, 'fizz', 'buzz', 56, 'fizz', 58, 59, 'fizzbuzz', 61, 62, 'fizz', 64, 'buzz', 'fizz', 67, 68, 'fizz', 'buzz', 71, 'fizz', 73, 74, 'fizzbuzz', 76, 77, 'fizz', 79, 'buzz', 'fizz', 82, 83, 'fizz', 'buzz', 86, 'fizz', 88, 89, 'fizzbuzz', 91, 92, 'fizz', 94, 'buzz', 'fizz', 97, 98, 'fizz'];
    assert.deepEqual(fizzBuzz(), array);
  });
});
