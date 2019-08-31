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
  const lastElementIndex = stacks[moveFrom].length - 1;
  const secondToLastElementIndex = stacks[moveTo].length - 2;
  const lastElement = stacks[moveFrom][lastElementIndex];
  const secondToLastElement = stacks[moveTo][secondToLastElementIndex];

  console.log(stacks[moveTo][0], lastElement);
  // console.log(stacks[moveTo][1], lastElement);

  // Value of is getting Index number.  Need to get the value of the dyanmic index.

  if (
    stacks[moveTo][0] > lastElement ||
    stacks[moveTo][0] === undefined ||
    secondToLastElement > lastElement
  ) {
    return true;
  } else {
    console.log(
      `You attempted to move ${lastElement} on top of a smaller number. The stack must go from largest to smallest. Try again.`
    );
    return false;
  }
}

function checkForWin() {
  const arrB = stacks.b;
  const arrC = stacks.c;

  if (arrB.length === 4 || arrC.length === 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isValid(startStack, endStack) && isLegal(startStack, endStack)) {
    console.log("is ValidHere and isLegalHere");
    movePiece(startStack, endStack);
  } else {
    return false;
  }
  checkForWin();
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
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
