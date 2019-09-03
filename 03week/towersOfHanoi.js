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
  // Ensuring input is all lower case and with no spaces. Created from (array) to to (array) variables.
  const moveFrom = startStack.toLowerCase().trim();
  const moveTo = endStack.toLowerCase().trim();

  // Created variable that represents the startStack array input from user. Pop takes last element from that array and removes it.
  const lastElement = stacks[moveFrom].pop();

  // statement pushes the above element that was popped off the start array and pushes it onto the endStack (moveTo) array.
  stacks[moveTo].push(lastElement);
}

function isValid(startStack, endStack) {
  const moveFrom = startStack.toLowerCase().trim();
  const moveTo = endStack.toLowerCase().trim();
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

function isLegal(startStack, endStack) {
  const moveFrom = startStack.toLowerCase().trim();
  const moveTo = endStack.toLowerCase().trim();

  // Getting the last index, and second to last index of moveFrom array and moveTo array respectively.
  const lastElementIndex = stacks[moveFrom].length - 1;
  const secondToLastElementIndex = stacks[moveTo].length - 2;

  // creating a variable that is the lastElement and secondToLastElement in moveFrom and moveTo arrays.
  const lastElement = stacks[moveFrom][lastElementIndex];
  const secondToLastElement = stacks[moveTo][secondToLastElementIndex];

  // console.log(stacks[moveTo][0], lastElement);
  // console.log(stacks[moveTo][1], lastElement);

  // Value of is getting Index number.  Need to get the value of the dyanmic index.

  if (
    // First moveTo element is greater than lastElement
    stacks[moveTo][0] > lastElement ||
    // First Element is Undefined (Because there is no element in the array)
    stacks[moveTo][0] === undefined ||
    // If there are two or more elements in the moveTo array, 
    // this comparison weights that value against the moveFrom lastElement value
    secondToLastElement > lastElement
  ) {
    console.log(`*** ${lastElement} moved from stack ${moveFrom} to stack ${moveTo}.***`);
    return true;
  } else {
    console.log(
      `You attempted to move ${lastElement} on top of a smaller number. The stack must go from largest to smallest. Try again.`
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
    console.log("!!!You Win!!!");
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Checks Valid Input logic and Legal Move logic.
  if (isValid(startStack, endStack) && isLegal(startStack, endStack)) {
    // console.log("is ValidHere and isLegalHere");
    // If Valid and Legal, movePiece function is called.
    movePiece(startStack, endStack);
  } else {
    // If not legal and valid, no move is allowed.
    return false;
  }
  // Check for Win is called for array B & C. I altered the win scenario in tests.
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
