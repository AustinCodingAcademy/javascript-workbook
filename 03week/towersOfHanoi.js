'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stacks = {
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
  var pop = stacks[startStack].pop();
  stacks[endStack].push(pop);
  return stacks;
}
console.log(stacks);
console.log(movePiece('a', 'c'));
console.log(stacks);

function isLegal() {
  // Your code here
  var stackLength = stacks.a.length - 1;
  console.log(stackLength - 1);
  console.log(stacks.a[stackLength]);

}

function checkForWin(endStack) {
  // Your code here
  if(endStack == 4) {
    return "You win!";
  }
  else(endStack = 4);
  return "You win!";

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  var discs = ['1', '2', '3', '4'];
  var towers = ['A', 'B', 'C'];
  discs.pop('1');
  towers.push('C');
}
console.log("Nice move!");


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
