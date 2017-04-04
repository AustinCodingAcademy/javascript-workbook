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
// this creates a varable that stores a pop so that you can push that value to aother stack
function movePiece(startStack, endStack) {
  var storage = stacks[startStack].pop();
  stacks[endStack].push(storage);
}
//this determines a leagal move.  it compares lentgh values from the peices to be moved.  If the piece that is getting moved 
//is smaller than the piece that you are putting it on.  or if the stack is empty. if so the move is legal.  if not them you 
//cant make that move.
function isLegal(startStack, endStack) {
  if  (stacks[startStack[startStack.length - 1]] < stacks[endStack[endStack.length - 1]] || stacks[endStack].length === 0) {
    return true;
  } 
  else {
    console.log("Invalid move. Try again.");
    return false;
  }
}
//this simply checks for the lenght of the stack.  if it reaches 4 in lengthe then you are a winner.
function checkForWin() {
  if (stacks["b"].length === 4 || stacks["c"].length === 4) {
    console.log("You won!");
    return true;
  } else {
    return false;
  }

}
//all the functions come together. Is the move legal?  move piece.  check for win.
function towersOfHanoi(startStack, endStack) {
  isLegal(startStack, endStack);
  movePiece(startStack, endStack);
  checkForWin();

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
