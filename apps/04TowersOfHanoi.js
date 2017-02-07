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
  // Your code here
var poppedItem = stacks[startStack].pop();
stacks[endStack].push(poppedItem);
}

function isLegal(startStackKey,endStackKey) {
  // Your code here

  var startStack = stacks[startStack];
  var endStack = stacks[endStack];
  var lastElementOfStartStack = startStack[startStack.length -1];
  var lastElementOfEndStack = endStack[endStack.length -1];

  if (startStack.length === 0){
    return false;
  }

  if (endStack.length === 0) {
    return true;
  }

if (lastElementOfStartStack < lastElementOfStartStack){
  return false;
}
}

function checkForWin() {
  // Your code here
if(b.length === 4 || c.length ===4) {
  console.log('You Won!');
  return true
}else {
  return false
}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
if (isLegal(startStackKey,endStackKey)){
    movePiece(startStack,endStack);
    checkForWin();
}
else {
  console.log ('Move Now Allowed.')
}
  }

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi();
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
