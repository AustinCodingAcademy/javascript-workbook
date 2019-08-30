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
    return true;
  } else {
    console.log(
      `You entered ${moveFrom}, ${moveTo}. Please enter: a, b, or c. Try again.`
    );
    return false;
  }
}

function isLegal(startStack, endStack) {
  const moveFrom = startStack.toLowerCase().trim();
  const moveTo = endStack.toLowerCase().trim();
  const lastElement = stacks[moveFrom].pop();
  const secondToLastElement = stacks[moveTo].length - 1;

  console.log(secondToLastElement.valueOf());
  console.log(lastElement.valueOf());

  if (secondToLastElement.valueOf() === -1) {
    return true;
  } else if (secondToLastElement.valueOf() > lastElement.valueOf()) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  // Your code here
}

function towersOfHanoi(startStack, endStack) {
  // Your code here

  // if (isValid(startStack, endStack)) {
  //   console.log('isValidHere');
  //   return true;
  // }
  if (isLegal(startStack, endStack)) {
    console.log('isLegalHere');
    return true;
    // movePiece(startStack, endStack);
  } else {
    return false;
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
