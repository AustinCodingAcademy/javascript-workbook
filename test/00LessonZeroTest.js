'use strict';

var assert = require('assert');

function returnTrue() {
  // should return true
  return false;
}


// Tests

describe('#returnTrue()', function () {
  it('should return true', function () {
    assert.equal(returnTrue(), true);
  });
});
