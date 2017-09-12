'use strict';
// Try to understand testing better
const assert = require('assert'); // Mocha assertion library
const readline = require('readline'); // node readline prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
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
  // Test to see if move is legal and if it is, pop startStack and push to endStack
  if (isLegal(startStack, endStack)) {
    stacks[endStack].push(stacks[startStack].pop());
    return true;
  } else {
    return false;
  }
}

function isLegal (startStack, endStack) {
  var begin = stacks[startStack];
  var finish = stacks[endStack];

  if (begin.length === 0) {
    return false;
  } else if (finish.length === 0) {
    return true;
  } else {
    var topStart = begin[begin.length - 1];
    var topEnd = finish[finish.length - 1];
    return topStart < topEnd;
  }
}

function checkForWin () {
  // If either stacks b or c have an index of 4 check declare win
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('You Won!!!');
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi (startStack, endStack) {
  movePiece(startStack, endStack);
}

function getPrompt () {
  printStacks();
  rl.question('start stack: ', (startStack) => { // node prompt question
    rl.question('end stack: ', (endStack) => { // node prompt question
      towersOfHanoi(startStack, endStack);
      checkForWin();
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {
  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => { // Describes exactly what should occur when the test is run
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
