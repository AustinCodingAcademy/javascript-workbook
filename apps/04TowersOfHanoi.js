'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//object containing each stack
var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//print the stacks to the console
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  //stores the last item in arrays 'a' 'b' or 'c'
  var store = stacks[startStack].pop();
  //pushes the stored item to 'a' 'b' or 'c'
  stacks[endStack].push(store);
}

//makes sure the only valid user inputs are 'a' 'b' or 'c'
function validInput(startStack, endStack) {
  if ((startStack === "a" || startStack === "b" || startStack === "c") && (endStack === "a" || endStack === "b" || endStack === "c")) {
    return true;
  } else {
    return false;
  };
}

function isLegal(startStack, endStack) {
  //stores the length of 'a' 'b' or 'c'
  var startStackLength = stacks[startStack].length;
  var endStackLength = stacks[endStack].length;
  //checks to make sure startStack is smaller than endStack and run movePiece function if so
  if (stacks[endStack].length === 0 || stacks[startStack][startStackLength - 1] < stacks[endStack][endStackLength - 1]) {
    movePiece(startStack, endStack);
    return true;
  } else {
    console.log("Invalid move. Try again.");
    return false;
  };
}

function checkForWin() {
  //checks lengths of 'b' or 'c' to see if win condition is met
  if (stacks["b"].length === 4 || stacks["c"].length === 4) {
    console.log("You won!");
    return true;
  } else {
    return false;
  };
}

//main fuction
function towersOfHanoi(startStack, endStack) {
  if (validInput(startStack, endStack) === true) {
    isLegal(startStack, endStack);
    checkForWin();
  } else if (validInput(startStack, endStack) === false) {
    console.log("Invalid input. Try again.");
    return false;
  };
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
