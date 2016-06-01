'use strict';

var assert = require('assert');

function returnTrue() {
    return true;
}


// Tests

describe('#returnTrue()', function () {
    it('should return true', function () {
      assert.equal(returnTrue(), true);
    });
});
