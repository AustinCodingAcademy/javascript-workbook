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

// track the number of moves made
var counter = 0;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  var block = stacks[startStack].pop();
  stacks[endStack].push(block);

}

function isLegal(startStack, endStack) {
  var startStackLength = stacks[startStack].length;
  var endStackLength = stacks[endStack].length;
  var movedBlock = stacks[startStack][startStackLength - 1];
  var lastBlock = stacks[endStack][endStackLength - 1];

  // illegal move if the start stack is empty
  if (startStackLength === 0) {
    console.log('Move not allowed');
    return false;
  }

  if (endStackLength === 0) {
    return true;
  }
  
  if (movedBlock < lastBlock) {
    return true;
  }

  console.log('Move not allowed');
  return false;
}

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  // if the move is legal, move the piece and increment the counter
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    counter++;
    console.log('Number of moves: ' + counter);
    // exit the game if a win is detected
    if (checkForWin()) {
      console.log('You Won');
      process.exit();
    }
  }
}

function isInputValid(startStack, endStack) {
  // convert non-strings to strings
  if (typeof(startStack) !== 'string') {
    startStack = startStack.toString();
  }
  if (typeof(endStack) !== 'string') {
    endStack = endStack.toString();
  }

  // scrub uppercase input
  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();

  // make sure input is a, b, or c
  var allowedInput = ['a', 'b', 'c'];
  if (allowedInput.indexOf(startStack) < 0 || allowedInput.indexOf(endStack) < 0) {
    console.log('Invalid input');
    return false;
  }
  return true;
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      if (isInputValid(startStack, endStack)) {
        towersOfHanoi(startStack.toLowerCase(), endStack.toLowerCase());
        getPrompt();
      } else {
        getPrompt();
      }
    });
  });
}

// Tests

if (typeof describe === 'function') {

  //Add new tests
  describe('#isInputValid()', function () {
    it('should scrub input', function () {
      assert.equal(isInputValid('A', 'b'), true);
      assert.equal(isInputValid('b', 'C'), true);
      assert.equal(isInputValid('A', 'C'), true);
    });
    it('should validate input', function () {
      assert.equal(isInputValid('d', 'e'), false);
      assert.equal(isInputValid(1, 2), false);
      assert.equal(isInputValid('a', 'r'), false);
      assert.equal(isInputValid('a', 'c'), true);
    });
  });

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
    it('should increment the move counter', function() {
      assert.equal(counter, 1);
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
