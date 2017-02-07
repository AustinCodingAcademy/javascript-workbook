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

// Prints the starting board
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Accepts two inputs: first is the stack where the piece starts and the second is the stack where the piece will end up
function movePiece(startStack,endStack) {  

// Assigns the variable "poppedPiece" to the value of the piece that has been popped from Stack A  
  var poppedPiece = stacks[startStack].pop();

// Adds the popped piece to the top of the end stack
  stacks[endStack].push(poppedPiece);
}

// Checks to see if the move is legal or illegal
function isLegal(startStack, endStack) {

// If the end stack's length is zero or the start stack is less than the end stack than the move is legal 
  if ((stacks[endStack].length === 0 ) || (stacks[startStack] < stacks[endStack])) {
    return true;
  }
  return false;
}

// Checks to see if all of the pieces are on one stack constituting a win
function checkForWin() {
  if ((stacks['b'].length === 4) || (stacks['c'].length === 4)) {
    console.log('You Won!');
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  isLegal(startStack,endStack);
  movePiece(startStack,endStack);
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt ();
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
