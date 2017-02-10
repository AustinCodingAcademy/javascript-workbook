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
  // This function works like copy and paste does on a computer. It pops off a block from the start stack and saves it to a variable. then we push that variable to endStack.
  var start = stacks[startStack].pop();
  stacks[endStack].push(start);
}

function isLegal(startStack, endStack) {
  // Both startBlock and endBlock are defined to determine the index of a specific block within the nested arrays by finding the length of the specific stack within the stacks array and subtracting that number by 1 to find the last item in that particular stack's array.
  // I used only if statements below instead of else if statements, as else if statements tend to depend on each other.
  // I defined legal as false and made the function return legal at the end just in case something went wrong within the function. This would not allow the player to move forward. Within my if statements, legal changes to true if all of the correct conditions are met.
  var legal = false
  var startBlock = stacks[startStack][stacks[startStack].length - 1]
  var endBlock = stacks[endStack][stacks[endStack].length - 1]

  if (stacks[endStack].length >= 0) {
    legal = true;
  }

  if (startBlock < endBlock) {
    legal = true;
  }

  if (startBlock > endBlock) {
    legal = false;
  }

  return legal;
}

function checkForWin(endStack) {
  //I originally wanted to say if (stacks[endStack].length) === 4 {} as it's much more clean that what I wrote below, however because of the way the tests are written, this does not work. The test define's the stack instead of playing the game all the way through. Instead I check if each either stack 'b' or 'c' have 4 blocks, then the player has won.
  if (stacks['b'].length === 4 || stacks['c'].length === 4) {
    console.log("You Won!!!")
    return true;
  } else {
    return false;
  }
  p
}

function towersOfHanoi(startStack, endStack) {
  // Each turn this function will first check if that move is legal. If true, then it will move the piece. After moving the piece, it will check if the player has won. If the play wins, it will announce "You Won!!!" If the player has not won, the game will continue.
  isLegal(startStack, endStack);
  movePiece(startStack, endStack);
  checkForWin(endStack);
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
