"use strict";

var assert = require("assert");
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks;

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

function resetBoard() {
  var stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

function movePiece(startStack, endStack) {

  var towerToRemoveFrom = stacks[startStack];
  var towerToAddTo = stacks[endStack];
  var poppedStack = towerToRemoveFrom.pop();

  // undefined check
  if (typeof poppedStack === "undefined") {
    return false;
  } else {
    towerToAddTo.push(poppedStack);
  }
}

function isLegal(startStack, endStack) {
  // Stack variables
  var legalStart = stacks[startStack];
  var startLength = stacks[startStack][stacks[startStack].length - 1];
  var endLength = stacks[endStack][stacks[endStack].length - 1];
  var legalEnd = stacks[endStack];

  if(legalEnd.length === 0) {
    return true;
  }
  if (legalStart === legalEnd) {
    return false;
  } 
  if (startLength < endLength) {
    return true; 
  } else {
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
    resetBoard();
  }
  return winning;
}

function towersOfHanoi(startStack, endStack) {

  if (isLegal(startStack, endStack)) {  
    movePiece(startStack, endStack);
    checkForWin();
  }
}

function getPrompt() {
  printStacks();
  resetBoard();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {

  describe("#towersOfHanoi()", function () {
    it("should be able to move a block", function () {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", function () {
    it("should not allow an illegal move", function () {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", function () {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
   /* it("should not be empty", function() {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal(b, c), false);
    });*/
  });
  describe("#checkForWin()", function () {
    it("should detect a win", function () {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
