'use strict';

var assert = require('assert');

// You goal is to return a string that says "Hello!"

function sayHello() {
  console.log("says hello");
  return "Hello!"
  // Your code here

}


// Tests

describe('#sayHello()', function () {
  it('says hello', function () {
    assert.equal(sayHello(), "Hello!");
  });
});