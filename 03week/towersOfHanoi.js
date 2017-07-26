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

function movePiece (first, second) {
  var piece = stacks[first].pop();
  stacks[second].push(piece);
}

function isLegal (first, second) {
  var legal = false;
  var firstVal = 5;
  var secondVal = 5;
  if (stacks[first].length > 0) {
    debugger;
    firstVal = stacks[first].pop();
    stacks[first].push(firstVal);
    debugger;
  }
  if (stacks[second].length > 0) {
    debugger;
    secondVal = stacks[second].pop();
    stacks[second].push(secondVal);
    debugger;
  }
  if (firstVal < secondVal) {
    debugger;
    legal = true;
  }
  debugger;
  return legal;
}

function checkForWin () {
  var win = false;
  var aLengthTest = stacks.a.length + 1;
  var bLengthTest = stacks.b.length + 1;
  var cLengthTest = stacks.c.length + 1;
  if (aLengthTest * bLengthTest * cLengthTest === 5) {
    win = true;
  }
  return win;
}

function towersOfHanoi (startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
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
