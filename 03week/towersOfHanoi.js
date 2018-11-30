"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// reverence stacts with dot notation (example stacks.a will grab row a of stacks)
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
  // keep in mind that .pop can't take in any parameters and can only be used on an array. Wrap the stack.pop with stacks.push.
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  // the challenge (for me) was to grab the specific piece of the startStack and endStack. using the parameter from the function in bracket notation
  if (stacks[endStack].slice(-1)[0] < stacks[startStack].slice(-1)[0]) {
    console.log("that move is totally illegal");

    return false;
    // if false stop and give console.log message ('illegal move')
  }
  return true;
  // if true move on to the next thing...
}

function checkForWin() {
  if ((stacks.c = [4, 3, 2, 1])) {
  }
  console.log("Congratulations! You Win!");
  return true;
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    if (checkForWin());
    {
      return false;
    }
    movePiece(startStack, endStack);
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
