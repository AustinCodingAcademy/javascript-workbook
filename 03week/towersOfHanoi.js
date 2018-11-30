"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let turnsTaken = 0;

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
  console.log("Turns taken: " + turnsTaken);
}

// movePiece(startStack, endStack) takes in an origin stack and a destination
// stack. It pops a value off the origin stack and pushes it onto the
// destination stack.
function movePiece(startStack, endStack) {
  let temp = stacks[startStack].pop();
  stacks[endStack].push(temp);
}

// isStack(startStack, endStack) verifies that the startStack and endStack
// arguments provided by the user are valid keys in the stacks object. It
// returns true if they are and false if they aren't.
function isStack(startStack, endStack) {
  const validStacks = ["a", "b", "c"];
  if (validStacks.includes(startStack) && validStacks.includes(endStack)) {
    return true;
  }
  return false;
}

// isLegal(startStack, endStack) takes in an origin stack and a destination
// stack. It verifies that the origin stack is not empty and that the piece
// to be moved is not larger than the piece it will be placed on top of. If
// either is true, the move is not legal and the function returns false.
function isLegal(startStack, endStack) {
  const startStackLength = stacks[startStack].length;
  const endStackLength = stacks[endStack].length;
  if (
    startStackLength === 0 ||
    stacks[startStack][startStackLength - 1] >
      stacks[endStack][endStackLength - 1]
  ) {
    return false;
  }
  return true;
}

// checkForWin() checks if the tower of Hanoi has been reassembled correctly
// in stack b or c (the win condition). It returns true if it has.
function checkForWin() {
  const winningStack = "4,3,2,1";
  if (
    stacks.b.toString() === winningStack ||
    stacks.c.toString() === winningStack
  ) {
    return true;
  }
  return false;
}

// towersOfHanoi takes in an origin stack and a destination stack. It uses the
// other functions to make sure the user has input valid stacks, verify the
// move is legal, move a piece, increment the turn counter, and check for a win
// condition.
function towersOfHanoi(startStack, endStack) {
  if (isStack(startStack, endStack) && isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    turnsTaken++;
  } else {
    console.log("Invalid move! Try again.");
  }
  if (checkForWin()) {
    console.log("You win!");
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
