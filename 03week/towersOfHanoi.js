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

function movePiece(startStack, endStack) {
  let temp = stacks[startStack].pop();
  stacks[endStack].push(temp);
}

function isStack(startStack, endStack) {
  const validStacks = ["a", "b", "c"];
  if (validStacks.includes(startStack) && validStacks.includes(endStack)) {
    return true;
  }
  return false;
}

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
