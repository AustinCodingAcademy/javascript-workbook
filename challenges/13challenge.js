'use strict';

var assert = require('assert');


function buildArray(first, second, third) {
  // return array with the items first, second, and third in an array.

}

function returnThirdItem(arr) {
  // should return the third item in the array

}

function setFirstItem(arr, newFirstItem) {
  // should set the first item in the array with newFirstItem

}

function returnCenterItem(fiveByFiveArray) {
  // returns the "center" item in a 5 x 5 array
  // ex. 3 x 3 array [[1, 2, 3], [4, 5, 6], [7, 8, 9]] the center item is 5

}

function arrayJoin(arr) {
  // should return a string of the joined array items, separated by a space

}

function stringSplit(str) {
  // should return an array of the words in a string, delimited by a space

}


// Tests

describe('#buildArray()', function () {
  it('return array with the items first, second, and third in an array.', function () {
    assert.deepEqual(buildArray('a', 'b', 'c'), ['a', 'b', 'c']);
    assert.deepEqual(buildArray('d', 'e', 'f'), ['d', 'e', 'f']);
  });
});

describe('#returnThirdItem()', function () {
  it('should return the third item in the array', function () {
    assert.deepEqual(returnThirdItem(['a', 'b', 'c']), 'c');
    assert.deepEqual(returnThirdItem(['d', 'e', 'f']), 'f');
  });
});

describe('#setFirstItem()', function () {
  it('should set the first item in the array with newFirstItem', function () {
    assert.deepEqual(setFirstItem(['a', 'b', 'c'], 'g'), ['g', 'b', 'c']);
    assert.deepEqual(setFirstItem(['d', 'e', 'f'], 'h'), ['h', 'e', 'f']);
  });
});

describe('#returnCenterItem()', function () {
  it('returns the "center" item in a 5 x 5 array', function () {
    var arr = [
      [1, 2, 1, 4, 5],
      [1, 2, 2, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 4, 4, 5],
      [1, 2, 5, 4, 5]
    ];
    assert.equal(returnCenterItem(arr), 3);
  });
});

describe('#arrayJoin()', function () {
  it('should return a string of the joined array items, separated by a space', function () {
    assert.equal(arrayJoin(['a', 'b', 'c']), 'a b c');
    assert.equal(arrayJoin(['e', 'f', 'g']), 'e f g');
  });
});

describe('#stringSplit()', function () {
  it('should return an array of the words in a string, delimited by a space', function () {
    assert.deepEqual(stringSplit('a b c'), ['a', 'b', 'c']);
    assert.deepEqual(stringSplit('e f g'), ['e', 'f', 'g']);
  });
});
