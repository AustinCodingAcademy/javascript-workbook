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
  console.log("Stack a: " + stacks.a);
  console.log("Stack b: " + stacks.b);
  console.log("Stack c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Test - should be able to move a block
  // pop off block from the start stack
  // startStack variable contains the string name of the stack to pull block from
  var block = stacks[startStack].pop();
  // push block to new stack
  // endStack variable contains the string name of the stack to put block on
  stacks[endStack].push(block);
}

function isLegal(startStack, endStack) {
  // Test - should not allow an illegal move
  // Test - should allow a legal move
  if(stacks[endStack].length === 0) {
    return true;
  }

  if(stacks[startStack].length < stacks[endStack].length) {
    return true;
    } else {
      return false;
  }
}

function checkForWin() {
  // Test - should detect a win
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("You Won!!!");
    return true;
    } else {
      return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // This function organizes the code from the other functions
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    } else {
      console.log('Move is Not Legal!!');
  }
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('Pull block from stack: ', (startStack) => {
    rl.question('Put block on stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
  // This causes the loop, instead of only running the game one time
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
