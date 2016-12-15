'use strict';

var assert = require('assert');

function returnTrue() {
  // should return true
  //test changes
  //another test
  return true;
}


// Tests

describe('#returnTrue()', function () {
  it('should return true', function () {
    assert.equal(returnTrue(), true);
  });
});
