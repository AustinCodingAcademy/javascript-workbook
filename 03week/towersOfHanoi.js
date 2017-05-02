'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
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
  // will alow for the last block to be taken off and then added to a new stack
  // startStack = where we first want to take a block from
  // endStack = where we want to add it
  var block = stacks[startStack].pop();
  stacks[endStack].push(block);
};



function isLegal(startStack, endStack) {
  // we check if the stack where we want to put our block is empty
  // or if the last block in that stack is greater than what we are about to push
  if (stacks[endStack].length === 0 ||
    stacks[startStack].length - 1 < stacks[endStack].length - 1) {
    return true;
  } else {
    return false;
  }
};

function checkForWin() {
  // the only two ways to win the game is if there are four blocks in either b or c
  // we check for the length on both those stacks
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
};


function towersOfHanoi(startStack, endStack) {
  movePiece(startStack, endStack);
};


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

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
