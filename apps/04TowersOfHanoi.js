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

var move = 0;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  //take out the last piece of start stack
  var piece = stacks[startStack].pop();
  //push it to the end stack
  stacks[endStack].push(piece);
  move += 1;
}

function isLegal(startStack, endStack) {
  // Declare an array of valid inputs
  var stackCollection = ['a', 'b', 'c'];
  // Verify inputs 
  if ((stackCollection.indexOf(startStack) !== -1) && (stackCollection.indexOf(endStack) !== -1)) {
  // Check if endstack is empty  
    if (stacks[endStack].length === 0) {
      return true;
    } else {
  //get the index of the last item on each array, and then compare the two items
        var lastStartIndex = stacks[startStack].length -1;
        var lastEndIndex = stacks[endStack].length - 1;
        var firstItem = stacks[startStack][lastStartIndex];
        var lastItem = stacks[endStack][lastEndIndex];
    if (firstItem < lastItem) {
       return true;
  } else {
          console.log("Not a valid move!");
          return false;
        }
    }
  }
  else {
    console.log("Please enter a valid value: a, b, or c!");
  }
}

function checkForWin() {
  // Verify if either stack b or stack c is full. If so, then game over. 
   if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
     console.log("You won!! You have used " + move + " moves. Congratulations!");
     stacks = { a: [4, 3, 2, 1], b: [],c: []};
     return true; 
   } else {
     return false;
   }
}

function towersOfHanoi(startStack, endStack) {
    if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
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
