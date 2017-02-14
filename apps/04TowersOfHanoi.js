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

function newGame() {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  }
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  var block = stacks[startStack].pop();
  stacks[endStack].push(block);
  return stacks;
}

  // If first number (startStack) is bigger than second number (endStack) return false.
  // If first number (startStack) is smaller return true.

function isEmpty(endStack) {
  return stacks[endStack].length === 0;
}

function isLegal(startStack, endStack) {
  // The 2 variables commented out below are not necessary in this method. They are from a previous approach I tried that didn't work. 
  //   var start = stacks[startStack];
  //   var end = stacks[endStack];

  if (isEmpty(endStack)) {
    return true;
  }
  if (stacks[startStack].slice(-1) < stacks[endStack].slice(-1)) {
    return true;
  }
  else {
    console.log('Illegal Move! The block being moved must be smaller than the block on which it is placed!');
    return false;
  }
}

// In checkForWin(), you can simply check if the b stack or c stack has a .length of 4,
// then console out a message like "You Won!!!" and return true if a win is detected, or a false if not.

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('You Won! Great Job! Try again!');
    newGame();
    return true;
  }
  else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  // I used the .toLowerCase method to scrub the input data like we did in Pig Latin.

  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();
  
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  } 
  else {
    return false;
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
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
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
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
