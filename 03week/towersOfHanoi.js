"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here
}

function isLegal(numToMove, currentStack) {
  // Your code here
  console.log("LOG: In isLegal, currentStack = " + currentStack);
  // if stack to check isnt empty
  if (currentStack.length > 0) {
    // ensure numToMove is less than last number of current stack
    let numToCompare = currentStack.pop();   
    console.log("LOG: Comparing " + numToMove + " < " + numToCompare);
    if (numToMove < numToCompare) {
      currentStack.push(numToCompare);
      return true;
    }
    else {
      currentStack.push(numToCompare);
      return false;
    }
  }
  // stack is empty, is legal
  else return true;
}

function checkForWin() {
  // Your code here
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  let numToMove = stacks[startStack].pop();
  
  // if isLegal to endStack, push to endStack
  if(isLegal(numToMove, stacks[endStack])) {
    console.log("LOG: isLegal passed");
    stacks[endStack].push(numToMove);
  // else, illegal put the number back in startStack
  } else {
    stacks[startStack].push(numToMove);
  }


}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
