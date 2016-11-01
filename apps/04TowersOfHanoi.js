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
  //I am saying that from the variable stacks, pop off the smallest block
  //There are the stacks, inside the stacks are the blocks
  // end stack is where the block is going or pushed

var pickedblock = stacks[startStack].pop();
stacks[endStack].push(pickedblock);
  //push on to end
}

function isLegal(startStack, endStack) {
  // This is saying if the block moving from start stack is smaller than the one on the end stack then it is legal
  // Or if there are no blocks on the end stack as in it is equal to zera the block is okay to move from the starting stack to the end stack
  if (stacks[endStack].length === 0){
    return true;
  }
  if (stacks[startStack].length < stacks[endStack].length){
    return true;
  } else {
    return false;
  }
}

function checkForWin(startStack, endStack) {
  // Your code here
if(stacks.b.length === 4 || stacks.c.length === 4){
  console.log('Good Job!!')
  return true;
} else {
  return false;
}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
if (isLegal(startStack, endStack)) {
  movePiece(startStack, endStack);
} else {
  console.log('This move is a no go, try again!');
}
 checkForWin();

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
