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
  var pieceBeingMoved = stacks[startStack].pop();
  stacks[endStack].push(pieceBeingMoved);
}

function isLegal(startStack, endStack) {
  var startBlock = stacks[startStack][(stacks[startStack].length - 1)];
  var endBlock = stacks[endStack][(stacks[endStack].length - 1)];

  if (startBlock < endBlock) {
    return true;
  }
  if (stacks[endStack].length === 0) {
    return true;
  }
  else {
    return false;
  }
}

function checkForWin() {
  if ((stacks['b'].length === 4) || (stacks['c'].length === 4)) {
    console.log('You Win!')
    return true;
  } else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  isLegal(startStack, endStack);
  movePiece(startStack, endStack);


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
