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
  //Take peice 
  var piece = stacks[startStack].pop();
  //Place piece
  stacks[endStack].push(piece);
}

function isLegal(startStack, endStack) {
 
   if  (stacks[endStack].length < 1) {
     console.log("bacon")
    return true;
  }
  
   if (endPiece > startPiece) {
    console.log("ham")
    return true;
  }
 
  
  // you done messed up
  else {
    console.log("This is not a valid move");
    return false;
  }
  
  var startPiece = stacks[startStack][(stacks[startStack].length-1)];
  var endPiece = stacks[endStack][(stacks[endStack].length-1)];

}

function checkForWin() {
  var hasWon = stacks.b.length === 4 || stacks.c.length === 4;

  if(hasWon) {
    console.log('Whoooooopie!!');

      stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};
  }

   return hasWon;
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
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
