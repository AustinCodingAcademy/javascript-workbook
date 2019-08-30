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

function movePiece(startStack, endStack) {
  console.log("in movePiece");
  const moveFrom = startStack.toLowerCase().trim();
  const moveTo = endStack.toLowerCase().trim();
  const lastElement = stacks[moveFrom].pop();

  stacks[moveTo].push(lastElement);
}

function isValid(startStack, endStack) {
  const moveFrom = startStack.toLowerCase().trim();
  const moveTo = endStack.toLowerCase().trim();
  const validInput = ["a", "b", "c"];

  if (validInput.includes(moveFrom) && validInput.includes(moveTo)) {
    console.log(`Item moved from stack ${moveFrom} to ${moveTo}.`);
    console.log("true");
    return true;
  } else {
    console.log("false");
    console.log(
      `You entered ${moveFrom}, ${moveTo}. Please enter: a, b, or c. Try again.`
    );
    return false;
  }
}

function isLegal(startStack, endStack) {
  /* 
  
  if (stacks[moveTo].length - 1 > lastElement
  get the values @ above indexes to compare. )
  return true
  else 
  return false

  create variables for these items to clarify what is happening.
  */
}

function checkForWin() {
  // Your code here
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isValid(startStack, endStack)) {
    movePiece(startStack, endStack);
  } else {
  }
  return false;
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
