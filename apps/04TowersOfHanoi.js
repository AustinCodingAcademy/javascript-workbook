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
  var poppedItem =
  stacks[startStack].pop();
  stacks[endStack].push(poppedItem);
}

function isLegal(startStack, endStack) {
  // Your code here
  var startBlock = stacks[startStack][stacks[startStack].length -1];

  var endBlock =
  stacks[endStack][stacks[endStack].length -1];
  // console.log('blocks', startBlock, endBlock);
  if (stacks[startStack].length === 0) {
    console.log('You can not do that silly')

    return false;
  }
  if (stacks[endStack].length === 0) {
    console.log('You can totally do that')
    return true;
  }
  if (startBlock < endBlock) {
    console.log ('Good Move!')
    return true;
}
if (startBlock > endBlock) {
  console.log('You can not do that')
  return false;
}
}


function checkForWin() {
  // Your code here
if (stacks ['b'].length === 4 || stacks ['c'].length === 4) {
  console.log ('You Won!!!')
  return true;
} else {
  return false;
}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
if (isLegal(startStack,endStack)) {
  movePiece(startStack, endStack);
}  else {
  console.log('Move is not Legal!')
  return false
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
