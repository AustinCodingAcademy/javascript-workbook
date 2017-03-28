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

function movePiece(startStack, endStack) {
  var starting = stacks[startStack];
  var startPiece = starting.pop();
  var end = stacks[endStack];
  var ending = null;
  ending = end.push(startPiece);
}

function isLegal(startStack, endStack) {
  var starting = stacks[startStack];
  var end = stacks[endStack];
  var ending = null;
  if (starting[starting.length - 1] > end[end.length - 1]) {
    console.log("invalid move.");
    return false;
  } else {
    return true;
  }
}

function verifyInput(startStack, endStack) {
  if ((startStack === 'a' || startStack === 'b' || startStack === 'c') && (endStack === 'a' || endStack === 'b' || endStack === 'c')) {
    return true;
  } else {
    console.log('Invalid entry');
    return false;
  }
}

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('you win');
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();
  if (verifyInput(startStack, endStack)) {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      checkForWin();
    };
  };


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

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', function () {
    it('should not allow an illegal move', function () {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function () {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function () {
    it('should detect a win', function () {
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