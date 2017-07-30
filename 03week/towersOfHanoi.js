'use strict';

// This program simulates the popular "Towers of Hanoi" puzzle. The stacks
// object represents all the pegs and disks (pieces) used in the puzzle. all
// of the disks are initially placed on peg 'a' and must be placed in order
// on either peg 'b' or 'c' to solve the puzzle.

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
// If more pieces are added, maxPiece needs to be changed accordingly
const maxPiece = 4;

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
  //  endStackVal is initially set to maxPiece + 1 to represent an empty peg.
  //  It's value must be greater than the largest piece in order to allow
  //  a piece of size maxPiece to be moved onto the peg using the simple
  //  comparison used in this function.
  let endStackVal = maxPiece + 1;
  if (stacks[endStack].length > 0) {
    //  The .slice(-1)[0] method returns the last value of endStack without
    //  altering it.
    endStackVal = stacks[endStack].slice(-1)[0];
  }
  //  startStackVal is set to endStackVal prevent someone from trying to move
  //  a piece from an empty peg to an empty peg. The comparison will fail.
  let startStackVal = endStackVal;
  if (stacks[startStack].length > 0) {
    startStackVal = stacks[startStack].slice(-1)[0];
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
