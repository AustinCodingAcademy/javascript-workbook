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

function movePiece(moveFrom, moveTo) {
  // Created variable that represents the startStack array input from user. Pop takes last element from that array and removes it.
  const lastElement = stacks[moveFrom].pop();

  // statement pushes the above element that was popped off the start array and pushes it onto the endStack (moveTo) array.
  stacks[moveTo].push(lastElement);
}

function isValid(moveFrom, moveTo) {
  // Defines what inputs are acceptable.
  const validInput = ["a", "b", "c"];

  // if the validInput array contains the input from the user, then it is ok to continue.
  if (validInput.includes(moveFrom) && validInput.includes(moveTo)) {
    return true;
  } else {
    console.log(
      `You entered ${moveFrom}, ${moveTo}. Please enter: a, b, or c. Try again.`
    );
    return false;
  }
}

function isLegal(moveFrom, moveTo) {
  // Getting the last index, and second to last index of moveFrom array and moveTo array respectively.
  const fromLastElementIndex = stacks[moveFrom].length - 1;
  const toLastElementIndex = stacks[moveTo].length - 1;

  // creating a variable that is the lastElement and secondToLastElement in moveFrom and moveTo arrays.
  const fromLastElement = stacks[moveFrom][fromLastElementIndex];
  const toLastElement = stacks[moveTo][toLastElementIndex];

  if (
    // First Element is Undefined (Because there is no element in the array)
    stacks[moveTo][0] === undefined ||
    // Ensuring that the last element of the endStack array is larger than the popped element from the start stack array.
    toLastElement > fromLastElement
  ) {
    console.log(
      `*** ${fromLastElement} moved from stack ${moveFrom} to stack ${moveTo}.***`
    );
    return true;
  } else {
    console.log(
      `You attempted to move ${fromLastElement} on top of ${toLastElement}. The stack must go from largest to smallest. Try again.`
    );
    return false;
  }
}

function checkForWin() {
  // Defines variables for arrays b and c
  const arrB = stacks.b;
  const arrC = stacks.c;

  // A win is having 4 valid and legal values in stacks.b or stacks.c **I changed the win test to include C**
  if (arrB.length === 4 || arrC.length === 4) {
    console.log("!!!You Win!!! The Board has been reset!");
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  const moveFrom = startStack.toLowerCase().trim();
  const moveTo = endStack.toLowerCase().trim();

  // Checks Valid Input logic and Legal Move logic.
  if (isValid(moveFrom, moveTo) && isLegal(moveFrom, moveTo)) {
    // console.log("is ValidHere and isLegalHere");
    // If Valid and Legal, movePiece function is called.
    movePiece(moveFrom, moveTo);
  } else {
    // If not legal and valid, no move is allowed.
    return false;
  }
  // Check for Win is called for array B & C. I altered the win scenario in tests.
  if (checkForWin()) {
    return stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
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
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
