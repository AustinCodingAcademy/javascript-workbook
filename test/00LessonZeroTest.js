'use strict';

var assert = require('assert');

function returnTrue() {
    // should return true
    return false;
}


// Tests
//test update

describe('#returnTrue()', function () {
    it('should return true', function () {
      assert.equal(returnTrue(), true);
    });
});
