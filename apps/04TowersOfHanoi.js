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

var counter = 0;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// starts a new game when won.
function newGame() {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
  //resets the amount of moves the user makes in the new game.
  counter = 0;
  return stacks;
}

//Moving a piece from one stack to another
function movePiece(startStack, endStack) {
  var move = stacks[startStack].pop();
  stacks[endStack].push(move);
  //number of moves increases by 1
  counter++;
  return true;
}


function isLegal(startStack, endStack) {
  var startLength = stacks[startStack].length;
  var endLength = stacks[endStack].length;
  //if the end stack is empty, any piece can go there.
  if(stacks[endStack].length < 1) {
    return true;
  //if the piece being moved is smaller than the piece on the end stack, it is a legal move.
  } else if((stacks[startStack][startLength - 1]) < (stacks[endStack][endLength - 1])) {
    return true;
  //otherwise illegal
  } else {
    console.log("Not a valid move. Try again!");
    return false;
  }
}

//checks if the user has won.
function checkForWin() {
  if(stacks['b'].length === 4 || stacks['c'].length === 4) {
    console.log("You Won!");
    newGame();
    return true;
  } else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();
//if the move is legal, move the piece
  if(isLegal(startStack, endStack) === true) {
    movePiece(startStack, endStack);
    // Prints out how many moves user makes.
    console.log("Number of moves: " + counter);
    checkForWin();
    return true;
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
