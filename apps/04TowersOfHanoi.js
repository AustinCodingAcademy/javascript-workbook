'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
// This code below enables the user to move the peices in the array
function movePiece(startStack, endStack) {
  stacks[endStack].push(stacks[startStack].pop());
}
// This code below checks to see if the users move was legal
function isLegal(startStack, endStack) {
  // Your code here
  var startBlock = stacks[startStack][stacks[startStack].length - 1];
  var endBlock = stacks[endStack][stacks[endStack].length - 1];
  if (startBlock < endBlock || endBlock === undefined) {
    movePiece(startStack, endStack);
    return true;
  } else if (startBlock > endBlock) {
    console.log("Try Again");
    return false;

  }

}
// This code below checks for a in - if the stack equals 4
function checkForWin() {
  // Your code here
  if (stacks.c.length === 4 || stacks.b.length === 4) {
    return true;
    console.log("You Won!!!");
  } else {
    return false;
    // console.log("Try Again");
  }
}
// The code below checks to see if they move is legal and if it is, then it permits it.
function towersOfHanoi(startStack, endStack) {
  // Your code here
  isLegal(startStack, endStack)
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

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
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function() {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function() {
    it('should detect a win', function() {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
