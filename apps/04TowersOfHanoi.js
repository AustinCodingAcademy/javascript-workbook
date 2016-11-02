'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks = {
  'a': [4, 3, 2, 1],
  'b': [],
  'c': []
};
var startStack='';
var endStack='';
// stacks are also called associative array or objects.
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // In movePiece(), pass in two arguments, startStack and endStack. Visualizing playing in a physical game, you .pop() off a block from the the startStack and .push() it on the endStack. Call this function from towersOfHanoi(), passing in your arguments.
  var q =stacks[startStack].pop();
  stacks[endStack].push(q);
}

function isLegal(startStack, endStack) {
  // isLegal() takes two arguments, startStack and endStack, and will check to see if the block being moved, from startStack is smaller than last block in endStack. return true if it is allowed, otherwise, return false. Also, don't forget to think about if the endStack is empty, you may put any block there. Put this check before your movePiece() function.
  var move = stacks[startStack];
  var stackblock= stacks[endStack];
  var pos=move.length - 1;
  var pos1=stackblock.length -1;
  if(( move[pos] < stackblock[pos1] )||(stacks[endStack].length === 0)){
    return true;
  }
  else {
    return false;
  }

}

function checkForWin(startStack,endStack) {
  // In checkForWin(), you can simply check if the b stack or c stack has a .length of 4, then consoleing out a message like "You Won!!!" and returning true if a win is detected, or a false if not.
  if (stacks['c'].length === 4 || stacks['b'].length === 4 ){
    console.log("You Won !!!");
    return true;
  }
  else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
 isLegal(startStack,endStack);
 movePiece(startStack,endStack);
 checkForWin(startStack,endStack);
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
