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

  if (poppedStack === '') {
    console.log("You cannot pop this stack, its empty");
    return false;
  }
  
  // Your code here
  // receive piece information.  get piece off top of start stack and save - POP
  // move it to end stack - UNSHIFT

}

function isLegal(startStack, endStack) {

  var legalStart = stacks[startStack];
  var legalEnd = stacks[endStack];
  var emptyStack = stacks[endStack].length;
  //var poppedLegalStack = stacks[startStack].length

  console.log("legalstart", legalStart);
  console.log("legalEnd", legalEnd);
  console.log("emptyStack", emptyStack);
  //console.log(poppedLegalStack);

  if (legalStart === legalEnd) {
    console.log("Pick Different Stacks");
    return false;
  }
  if (legalStart < legalEnd) {
    console.log("Piece moved");
    return true;
  } else if (startStack === -1) {
    console.log("please enter a value");
    return false; 
  } else if (emptyStack === 0) {
    console.log("You can do that the stack is empty");
    return true;
  } else {
    console.log("Illegal Move");
    return false;
  }

  // Check to see if the array is empty?

  // Your code here
  // get a ref to actual startstack array and save it
  // does a startstack array have anything in it? 
  // get a reference to the actual endstack array and save it
  // check if the length of the startstack array is bigger or smaller than the endstack array

  // if bad return error
  // if good keep going
}

function checkForWin(startStack, endStack) {
  var winning = stacks.b.length === 4 || stacks.c.length === 4;

  if (winning) {
    console.log("You have won!");
  }
  return winning;
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
   /* it('should not be empty', function() {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal(b, c), false);
    });*/
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
