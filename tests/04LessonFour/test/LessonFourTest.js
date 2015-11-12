var assert = require('assert');
var LessonFour = require('../LessonFour');

describe('LessonFour', function() {
  var lessonFour = new LessonFour();

  describe('#arrayPop', function () {
    it('should remove the last item in the array, then return the array', function () {
      assert.deepEqual(lessonFour.arrayPop(['a', 'b', 'c']), ['a', 'b']);
      assert.deepEqual(lessonFour.arrayPop(['d', 'e', 'f']), ['d', 'e']);
    });
  });

  describe('#arrayPush', function () {
    it('should add these items onto the end of the array, then return the array', function () {
      assert.deepEqual(lessonFour.arrayPush(['a'], 'b', 'c', 'd'), ['a', 'b', 'c', 'd']);
      assert.deepEqual(lessonFour.arrayPush(['d'], 'e', 'f', 'g'), ['d', 'e', 'f', 'g']);
    });
  });

  describe('#arrayShift', function () {
    it('should remove the first item in the array, then return the array', function () {
      assert.deepEqual(lessonFour.arrayShift(['a', 'b', 'c']), ['b', 'c']);
      assert.deepEqual(lessonFour.arrayShift(['d', 'e', 'f']), ['e', 'f']);
    });
  });

  describe('#arrayUnshift', function () {
    it('should add these items onto the front of the array, then return the array', function () {
      assert.deepEqual(lessonFour.arrayUnshift(['a'], 'b', 'c', 'd'), ['b', 'c', 'd', 'a']);
      assert.deepEqual(lessonFour.arrayUnshift(['d'], 'e', 'f', 'g'), ['e', 'f', 'g', 'd']);
    });
  });

  describe('#createObject', function () {
    it('should return an object with keys "first", "second", "third" mapped to values 1, 2, 3', function () {
      assert.deepEqual(lessonFour.createObject(), { first: 1, second: 2, third: 3 });
    });
  });

  describe('#returnValueByKey', function () {
    it('given an object and a key, should return the value assigned to the key', function () {
      assert.equal(lessonFour.returnValueByKey({ 'a': 1, 'b': 2, 'c': 3}, 'a'), 1);
      assert.equal(lessonFour.returnValueByKey({ 'a': 1, 'b': 2, 'c': 3}, 'b'), 2);
      assert.equal(lessonFour.returnValueByKey({ 'a': 1, 'b': 2, 'c': 3}, 'c'), 3);
    });
  });

  describe('#assignKeyValue', function () {
    it('given an object, key, and value, add the key/value pair to the object. return the object', function () {
      assert.deepEqual(lessonFour.assignKeyValue({}, 'a', 1), { a: 1 });
      assert.deepEqual(lessonFour.assignKeyValue({}, 'b', 2), { b: 2 });
    });
  });
});
