'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// The object below is three different stacks (arrays) set up how the game starts with all of the pieces on the first stack. 

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// The function below prints all three stacks in their current state. 

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// The function below moves a piece from one stack to another.

function movePiece(startStack, endStack) {
  var piece = stacks[startStack].pop();
  stacks[endStack].push(piece);
};

// The function below is an if/else statement checking to see if the user's move is legal. Two different variables were created to store values. 
// If the start stack array is empty, the function will return false and prompt the user to choose again. 
// If the end stack array is empty, the function will return true. 
// Also, if the piece number of the start stack is less than the piece number of the end stack, then the move is legal.

function isLegal(startStack, endStack) {
  
  var startArray = stacks[startStack];
  var endArray = stacks[endStack];
  
  if (startArray == '') {
    console.log("This stack is empty. Please choose again.");
    return false;
  } else if (endArray == '') {
    return true;
  } else {
    return startArray[startArray.length - 1]
    < endArray[endArray.length - 1];
  };
};

// This function is checking to see if there is a win, meaning all four pieces have been moved to another tower.  
// If not, the function will return false.

function checkForWin() {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    console.log("Congratulations! You Won!!!");
    return true;
  } else {
    return false;
  };
};

// This function is an if/else statement first checking to see if the user's move is legal. If it is, the piece is moved to the desired location. 
// If not, the app prints that it was invalid and the user is prompted to try again. 
// After a successful legal move, this function will check for a win. If there is no win, the game proceeds.

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  } else {
    console.log('Invalid move. Please try again.');
  }
  if (checkForWin()) {
    return true;
  } else {
    return false;
  };
};

// The function below is the start of every move. It prints the stacks in their current state and prompts the user to pick a piece to move and where to move it.
// After this, it runs the towers function above and then starts over if it wasn't a winning move.

function getPrompt() {
  printStacks();
  rl.question('Pick a stack to pull a piece from: ', (startStack) => {
    rl.question('Pick a stack to move your piece to: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

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
};
