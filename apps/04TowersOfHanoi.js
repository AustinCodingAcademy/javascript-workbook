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

  var towerToRemoveFrom = stacks[startStack];
  //console.log(startStack);

  var towerToAddTo = stacks[endStack];
  //console.log(towerToAddTo);

  var poppedStack = towerToRemoveFrom.pop();

  towerToAddTo.push(poppedStack);
  
  /*var towerToRemoveFrom = stack[startStack];

  var towerToAddTo = stack[endStack];

  var popped = towerToRemoveFrom.pop();

  towerToAddTo.push(popped);*/

  // Your code here
  // receive piece information.  get piece off top of start stack and save - POP
  // move it to end stack - UNSHIFT

}

function isLegal(startStack, endStack) {

  var legalStart = stacks[startStack]
  var legalEnd = stacks[endStack]
  var emptyStack = stacks[endStack];

  console.log(legalStart);
  console.log(legalEnd);
  console.log(emptyStack);

  if (legalStart < legalEnd) {
    return true;
  } else if (legalEnd.length === 0) {
    return true;
  } else {
    console.log("Illegal Move");
    return false;
  }
  /*var startArray = startStack.pop();

  if (startArray > endStack.length) {
    return true;
  } else 
    return false;
  }*/

  // Check to see if the array is empty?

  // Your code here
  // get a ref to actual startstack array and save it
  // does a startstack array have anything in it? 
  // get a reference to the actual endstack array and save it
  // check if the length of the startstack array is bigger or smaller than the endstack array

  // if bad return error
  // if good keep going
};

function checkForWin(startStack, endStack) {

  var endWin = stacks[endStack];
  console.log(endWin);

  if (endWin === 4) {
    console.log("You Won!");
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {

  isLegal(startStack, endStack);
  movePiece(startStack, endStack);
  checkForWin(startStack, endStack);

 /* var towertoremovefrom = stack[startStack];

  var towertoaddto = stack[endStack];

  var popped = towertoremovefrom.pop();

  towertoaddto.push(popped);*/
  

  // Your code here
  // check length of startStack, endStack

  // check if move is okay
  // if so continue
  // check to see if player won 
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
