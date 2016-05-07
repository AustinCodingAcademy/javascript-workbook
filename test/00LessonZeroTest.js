'use strict';

var assert = require('assert');

function returnTrue() {
    // should return true
    return false;
}

// new comment line in this code

// Tests
//test update - attempt 2

describe('#returnTrue()', function () {
    it('should return true', function () {
      assert.equal(returnTrue(), true);
    });
});
