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
  //putting popped index item in a variable so that it can be pushed onto endStack once it has been popped
  var poppedItem = stacks[startStack].pop();
  stacks[endStack].push(poppedItem);
}

function isLegal(startStack, endStack) {
  // Your code here

  var start = stacks[startStack];
  var end = stacks[endStack];

  //getting the last element of the array, to be ready for comparison in later 'if' statements

  var lastElementOfStartStack = start[start.length - 1];
  var lastElementOfEndStack = end[end.length - 1];

  
//if the startStack doesnt have anything there, nothing can be moved from it
  if (start.length === 0) {
    return false;
  }
// if endstack is empty, you can place something there
  if (end.length === 0) {
    return true;
  }

  if (lastElementOfStartStack > lastElementOfEndStack) {
    return false;
  }
// added this because if i did not, it would not meet any of the above criteria... it needed to have a true outcome in order to do anything
  if (lastElementOfStartStack < lastElementOfEndStack) {
    return true;
  }
}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('You Won!!!');
    return true
  } else {
    return false
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    console.log('Move Not Allowed.')
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

  describe('#towersOfHanoi()', function() {
    it('should be able to move a block', function() {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', function() {
    it('should not allow an illegal move', function() {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function() {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function() {
    it('should detect a win', function() {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
