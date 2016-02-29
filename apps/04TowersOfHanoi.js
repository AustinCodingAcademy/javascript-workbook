'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  //code
  if (isLegal(startStack, endStack)) {
    stacks[endStack].push(stacks[startStack].pop());
    return true;
  } 
  else {
    return false;
  }

}

function isLegal(startStack, endStack) {
  // Your code here

  var start = stacks[startStack];
  var end = stacks[endStack];

  if (start.length == 0){
    return false;
  }
 else if (end.length == 0) {
    return true;
  } 
  else {
    var topStart = start[start.length - 1];
    var topEnd = end[end.length - 1];
    return topStart < topEnd;
  }
}

function checkForWin() {
  // Your code here
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    console.log("You Won!!!");
    return true;
  } 
  else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  movePiece(startStack, endStack);

}

function getPrompt() {
  printStacks();
  prompt.get(['start stack', 'end stack'], function(error, result) {
    towersOfHanoi(result['start stack'], result['end stack']);
    getPrompt();
  });
}

// Tests

if (typeof describe !== 'undefined') {

  describe('#towersOfHanoi()', function() {
    it('should be able to move a block', function() {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', function() {
    it('should not allow an illegal move', function() {
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function() {
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function() {
    it('should detect a win', function() {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      }
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      }
      assert.equal(checkForWin(), false);
    });
  })
} else {

  getPrompt();

}