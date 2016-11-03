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
  // Your code here
 if (isLegal(startStack, endStack) === false) {
   console.log('This was an illegal move!');
 } else {
 stacks[endStack].push(stacks[startStack].pop());
 }
}

function isLegal(startStack, endStack) {
  // Your code here
  var moveStack = stacks[startStack];
  var toStack = stacks[endStack];
  var movedPiece = moveStack[(moveStack.length - 1)];
  var topPiece = toStack[(toStack.length - 1)];
  if ((moveStack.length === 0 ) || (movedPiece > topPiece)) {
    return false;
  } else {
    return true;
  }
}

function checkForWin() {
  // Your code here
  return ((stacks['b'].length === 4) || (stacks['c'].length === 4))
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  movePiece(startStack, endStack);
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      if (checkForWin() != true) {
      getPrompt();
       } else {
      console.log("Look at the brains on Brad!! You just won the game!");
     }
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
