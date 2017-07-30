'use strict';

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks () {
  console.log('a: ' + stacks.a);
  console.log('b: ' + stacks.b);
  console.log('c: ' + stacks.c);
}

function movePiece (startStack, endStack) {
  const piece = stacks[startStack].pop();
  stacks[endStack].push(piece);
}

function isLegal (startStack, endStack) {
  let startStackVal = 5;
  let endStackVal = 5;
  if (stacks[startStack].length > 0) {
    startStackVal = stacks[startStack].pop();
    stacks[startStack].push(startStackVal);
  }
  if (stacks[endStack].length > 0) {
    endStackVal = stacks[endStack].pop();
    stacks[endStack].push(endStackVal);
  }
  if (startStackVal < endStackVal) {
    return true;
  }
  return false;
}

function isValid (stackName) {
  if (stackName === 'a' || stackName === 'b' || stackName === 'a') {
    return true;
  } else {
    return false;
  }
}

function checkForWin () {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  }
  return false;
}

function towersOfHanoi (startStack, endStack) {
  startStack = startStack.trim().toLowerCase();
  endStack = endStack.trim().toLowerCase();
  if (isValid(startStack) && isValid(endStack)) {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      checkForWin();
    }
  }
}

// Tests

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt () {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

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
