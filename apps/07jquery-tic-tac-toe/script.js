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

var moves = 0;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  var piece = stacks[startStack][stacks[startStack].length - 1];
  if (isLegal(startStack, endStack)) {
    stacks[startStack].pop();
    stacks[endStack].push(piece);
    moves += 1;
    console.log("You've made " + moves + " moves...");
    return;
  }
  console.log('That is not a valid move.  Please try again.');
}

function isLegal(startStack, endStack) {
  // Your code here
  if (stacks[endStack].length === 0 ||
    stacks[startStack][stacks[startStack].length - 1] < stacks[endStack][stacks[endStack].length - 1]) {
    return true;
  }
  return false;
}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("You won!!!");
    printStacks();
    console.log("Your final score is " + moves + " moves!");
    console.log("Try again.");
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (['a','b','c','x'].indexOf(endStack) != -1 ||
    ['a','b','c','x'].indexOf(startStack) != -1) {
    if (startStack === 'x' || endStack === 'x') {
      console.log("Move canceled");
      return;
    } else {
      movePiece(startStack, endStack);
      //checkForWin();
      if (checkForWin()) {
        resetGame();
      }
      return;
    }
  }
  console.log("Invalid entry.  Please enter a, b, c, or x.");
}

function resetGame() {
  stacks.a = [4, 3, 2, 1];
  stacks.b = [];
  stacks.c = [];
  moves = 0;
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
