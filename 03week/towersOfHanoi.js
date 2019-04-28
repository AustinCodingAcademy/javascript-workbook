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
  // Your code here
  stacks[endStack].push(stacks[startStack].pop());

}

function isLegal(startStack, endStack) {
  // Your code here
  let startBlock = stacks[startStack][stacks[startStack].length - 1];
  let endBlock = stacks[endStack][stacks[endStack].length - 1];
  let emptyBlock = stacks[endStack].length;

  if (emptyBlock === 0 || startBlock < endBlock) {
    return true;
  }
  else {
    console.log("FOLLOW GAME RULES, PLEASE TRY AGAIN!!!");
    return false;
  }
}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("CONGRATULATION, YOU WON!!!!");
    return true;
  } else {
    return false;
  }
}

function gameReset() {
  if (checkForWin()) {
    let stacks = {
      a: [3, 2, 1],
      b: [],
      c: []
    };
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  //Your code here
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
    gameReset();
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
  describe('#gameReset', () => {
    it('should reset game', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(gameReset(), true);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(gameReset(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(gameReset(), false);
    });
  });
} else {
  getPrompt();
}
