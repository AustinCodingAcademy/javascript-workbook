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
  // Pop and push a piece!
  var piece = stacks[startStack].pop();
  stacks[endStack].push(piece);
}

function isLegal(startStack, endStack) {
  // Check if endStack has something in it.
  if (stacks[endStack].length < 1) {
    return true;
  }
  // Check if the last number in endStack is larger than the piece you are moving from startStack. 
  // Or if this is a legal move.
  else if ((stacks[startStack][(stacks[startStack].length-1)]) < (stacks[endStack][(stacks[endStack].length-1)])) {
    return true;
  }
  // If not, this is an illegal move.
  else {
    console.log("Illegal move! Try again!");
    return false;
  }
}

function checkForWin() {
  // Check if the b stack or c stack has a .length of 4, if yes, user wins!
  if (stacks.c.length > 3){
    console.log("You Won!!");
    return true;
  }
  else if (stacks.b.length > 3){
    console.log("You Won!!");
    return true;
  }
  else{
    console.log("Keep Going!");
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // If isLegal returns true, move a piece!
  if (isLegal(startStack, endStack)){
    movePiece(startStack,endStack);
  }
  // And also check for win every time.
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      // Check if startStack and EndStack are equal to 'a', 'b', or 'c'.
      if ((startStack === 'a' || startStack === 'b' || startStack === 'c') && 
      (endStack === 'a' || endStack === 'b' || endStack === 'c')) {
        towersOfHanoi(startStack, endStack);
      }
      // If not equal, try again!
      else {
        console.log ('Not an input silly! Pick a, b, or c!');
      }
      getPrompt();
    });
  });
}

// Tests ------------------------------------

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
