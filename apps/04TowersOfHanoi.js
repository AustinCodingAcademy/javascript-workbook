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
// This function prints the starting board
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


// This function takes two arguments: first is the stack where the piece starts and the second is the stack where the piece will end up
function movePiece(startStack, endStack) {
  
// Assigns the variable "poppedPiece" to the value of the piece that has been popped from Stack A 
  var poppedPiece = stacks[startStack].pop();
// Adds the popped piece to the top of the end stack
  stacks[endStack].push(poppedPiece);
}



// This function checks to see if a move is legal or illegal 
function isLegal(startStack, endStack) {
  var start = stacks[startStack].length;
  var end = stacks[endStack].length;
  // If the end stack's length is zero or the start stack is less than the end stack than the move is legal 
  if (stacks[endStack].length === 0 || stacks[startStack][start - 1] < stacks[endStack][end - 1]) {
    return true;
  }
  else {
    //if the move is illegal, the previous move will be reversed by popping the endStack back on to the startStack  
    var wrongMove = stacks[endStack].pop();
    stacks[startStack].push(wrongMove);
    console.log('Invalid move. Pick again.')
    return false;
  }
}

// Checks to see if all of the pieces are on one stack constituting a win
function checkForWin() {
  // This conditional statement returns true if stacks b or c contain all four pieces
  if ((stacks['b'].length === 4) || (stacks['c'].length === 4)) {
 // If true, will return "You Won!"
    console.log('You Won!');
    return true;
  }
  else {
    return false;
  }
}
// This function will run the function towersOfHanoi with startStack and endStack passed through.
function towersOfHanoi(startStack, endStack) {
 if(isLegal(startStack, endStack)){
  movePiece(startStack, endStack);
  checkForWin();
 } 
 else {
   console.log('not legal');
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
