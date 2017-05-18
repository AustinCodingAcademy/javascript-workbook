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
 // let popped = stacks.a.pop();

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  let popped = stacks[startStack].pop();
  endStack = stacks[endStack].push(popped);
  return (popped, endStack)

}

function isLegal(startStack, endStack) {
  // Your code here
  let lastStartIndex = stacks[startStack].length - 1;
  let lastStartBlock = stacks[startStack][lastStartIndex];
  let lastEndIndex = stacks[endStack].length - 1;
  let lastEndBlock = stacks[endStacks][lastEndIndex];
  // if(popped > lastStartBlock || popped > ) {
  //   return false;
  // }
  // if (stacks.b.length === 0) {
  //   return true;
  // }
  console.log(`last start block is: ${lastStartBlock} ${lastStartIndex}`)

}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  movePiece(startStack, endStack);

  // let popped = stacks[startStack].pop();
  // endStack = stacks[endStack].push(popped);
  // return ('popped', endStack)
  // }
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
} else {

  getPrompt();

}
