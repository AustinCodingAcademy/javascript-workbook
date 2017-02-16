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
  var piece = stacks[startStack].pop();
  stacks[endStack].push(piece);
}

  // You will get a return of false if the startStack is bigger than the endStack.
  // You will get a return of true If the starkStack is smaller.

function isLegal(startStack, endStack) {
  var topStartStack = stacks[startStack][stacks[startStack].length - 1];
  var topEndStack = stacks[endStack][stacks[endStack].length - 1];
  if (stacks[endStack].length === 0) {
    return true;
  } 
  else if (stacks[startStack].length === 0) {
    console.log("This is an empty stack");
    return false;
  } 
  else {
    console.log("Value of topStart Stack: " + topStartStack + ", Value of topEndStack: " + topEndStack);
    return (topStartStack <= topEndStack);
  }
}

function checkForWin() {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    console.log("You won!!");
    return true;
  } 
  else {
    return false;
  }
}

// When checking for a win, check and see if the b stack or c stack have a .length of 4,
// If they do have a .length of 4 the console.log a message "You Won!!!"

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    return false;
  }
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
