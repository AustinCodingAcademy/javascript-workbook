'use strict';

var assert = require('assert');


function returnTrue() {
  return true;
    // should return true
}

function returnFalse() {
  return false;
    // should return false
}

function greaterThan(big, small) {
  if(big>small){
    return true;
  }
    else {
      return false;
    }
    var big = 10;
    var small = 0;
    // should return true if the first argument is greater than the second argument
    // and return false if the first argument is less than the second argument

}

function lessThan(small, big) {
  if(small<big){
    return true;
  }
    else {
      return false;
    }
    var big = 10;
    var small = 0;
    // should return true if the first argument is less than the second argument
    // and return false if the first argument is greater than the second argument

}

function equalTo(a, b) {
    if (a===b){
      return true;
    }
    else{
      return false;
    }
    var a=1;
    var b=1;
    // should return true if the first argument is equal to the second argument
    // and should return true if the first argument is equal to the second argument

}

function notEqualTo(a, b) {
  if (a!==b){
    return true;
  }
  else {
    return false;
  }
  var a=0;
  var b=1;
    // should return true if the first argument is not equal to the second argument
    // and should return false if the first argument is equal to the second argument

}


// Tests

describe('#returnTrue()', function () {
    it('should return true', function () {
        assert.equal(returnTrue(), true);
    });
});

describe('#returnFalse()', function () {
    it('should return false', function () {
        assert.equal(returnFalse(), false);
    });
});

describe('#greaterThan()', function () {
    it('should return true if the first argument is greater than the second argument', function () {
        assert.equal(greaterThan(10, 4), true);
    });
    it('should return false if the first argument is less than the second argument', function () {
        assert.equal(greaterThan(4, 10), false);
    });
});

describe('#lessThan()', function () {
    it('should return true if the first argument is less than the second argument', function () {
        assert.equal(lessThan(3, 5), true);
    });
    it('should return false if the first argument is greater than the second argument', function () {
        assert.equal(lessThan(6, 3), false);
    });
});

describe('#equalTo()', function () {
    it('should return true if the first argument is equal to the second argument', function () {
        assert.equal(equalTo(6, 6), true);
    });
    it('should return false if the first argument is not equal to the second argument', function () {
        assert.equal(equalTo(6, 7), false);
    });
    it('should return false if not using ===', function () {
        assert.equal(equalTo(6, '6'), false);
    });
});

describe('#notEqualTo()', function () {
    it('should return false if the first argument is equal to the second argument', function () {
        assert.equal(notEqualTo(6, 6), false);
    });
    it('should return true if the first argument is not equal to the second argument', function () {
        assert.equal(notEqualTo(6, 7), true);
    });
    it('should return true if not using ===', function () {
        assert.equal(notEqualTo(6, '6'), true);
    });
});
