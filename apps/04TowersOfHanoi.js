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

var moves = 1;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  //Take peice 
  var piece = stacks[startStack].pop();
  //Place piece
  stacks[endStack].push(piece);
  
  
  
}

function isLegal(startStack, endStack) {
  var startPiece = (stacks[startStack][(stacks[startStack].length-1)]);
  var endPiece = (stacks[endStack][(stacks[endStack].length-1)]);
 // if array is empty it will return undefined
  if  (endPiece === undefined) {  
    return true;
  }
// check to see if the piece is smaller than the one it is moving on top of
  else if (startPiece < endPiece) { 
     return true;
  }
    
  // you done messed up
  else {
    console.log("This is not a valid move");
    return false;
  }
  
}

function checkForWin() {
  //checking to see if the endStack equals 4
  var hasWon = stacks.b.length === 4 || stacks.c.length === 4;
// Letting them know you won
  if(hasWon) {
    console.log('Whoooooopie!!');
//Resetting the board
    stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};
  }

   return hasWon;
}

function towersOfHanoi(startStack, endStack) {
  // bringing it together if the move is leagal move the piece
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
  //check to see if a player has won
  checkForWin(); 
   // move counter 
  console.log('Moves = ' + moves++);
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
