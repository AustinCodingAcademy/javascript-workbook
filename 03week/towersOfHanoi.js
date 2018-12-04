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
//Make pieces moving
function movePiece(startStack, endStack) {
  stacks[endStack].push(stacks[startStack].pop());
}
//Legal
function isLegal(startStack, endStack) {
  //Only one disk can be moved at a time.
  //You can only move the top disc in a stack.
  console.log(stacks[startStack].slice(-1)[0]);
  console.log(stacks[endStack].slice(-1)[0]);
  if (stacks[endStack].slice(-1)[0] === undefined) {
    return true;
  }
  if (stacks[startStack].slice(-1)[0] < stacks[endStack].slice(-1)[0]) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
  //No disk may be placed on top of a smaller disk.
}
//who is the winner?
function checkForWin() {
  let stackBConvertedToString = stacks.b.toString();
  let stackCConvertedToString = stacks.c.toString();
  if (
    stackBConvertedToString === "4,3,2,1" ||
    stackCConvertedToString === "4,3,2,1"
  ) {
    printStacks();
    console.log("Congrats you are the winner!");
    gameOver = true;
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin(startStack, endStack);
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
