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

//shows the player the game
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//moving pieces from one stack to another
function movePiece(startInput, endInput) {
  console.log("start " + startInput);
  console.log("end " + endInput);

  const lastItem = startInput.pop();
  const newStack = endInput.push(lastItem);
  return newStack;
}

//check if the number I am moving is larger than the last number in the destination array
function isLegal(startInput, endInput) {
  const myNum = startInput[startInput.length - 1];
  const dest = endInput[endInput.length - 1];

  if (myNum > dest) {
    return false;
  } else {
    return true;
  }
}

//check if player has successfully moved the pieces in the correct order to another stack that isn't a

function checkForWin() {
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  const startInput = stacks[startStack];
  const endInput = stacks[endStack];

  if (isLegal(startInput, endInput)) {
    movePiece(startInput, endInput);
  } else {
    console.log("Illegal move");
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
        a: [4, 3],
        b: [1],
        c: [2]
      };
      assert.equal(isLegal("c", "b"), false);
    });
    it("should not allow empty array", () => {
      stacks = {
        a: [],
        b: [],
        c: []
      };
      assert.equal(isLegal("", ""), true);
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
    it("should detect a win in c", () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
    it("should detect a win in b", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
