"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let stacks = {
//   a: [4, 3, 2, 1],
//   b: [],
//   c: []
// };
let currentLevel = 1;
const levelMax = 5;
let currentLevelComplete = false;
let stacks = newLevel(currentLevel);
var stackCount = stacks.a.length;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function newLevel(currentLevel) {
  currentLevelComplete = true;
  let startStackCount = currentLevel + 2;
  currentLevelComplete = false;
  let stacks = {
    a: [],
    b: [],
    c: []
  }
  for (let i = startStackCount; i > 0; i--) {
    stacks.a.push(i);
  }
  stackCount = stacks.a.length;
  return stacks;
}

function movePiece(stack1, stack2) {
  // Your code here
  stack2.push(stack1.pop());
}

function isLegal(startStack, endStack) {
  // Your code here
  let stack1 = stacks[startStack];
  let stack2 = stacks[endStack];

  // ensure we accessed stacks before doing anything
  if (stack1 && stack2) {
    // get last number in stack 1
    let num1 = stack1[stack1.length - 1];

    // if we didnt get a num1, stack 1 is empty, illegal move
    if (!num1) {
      return false;
    }

    // if stack2 is not empty
    if (stack2.length > 0) {
      // get last number in stack 2
      let num2 = stack2[stack2.length - 1];

      // ensure num in stack2 is > num being moved from stack1
      if (num2 > num1) {
        return true;
      } else {
        return false;
      }
      // stack2 is empty, no comparison needed
    } else return true;
    // stack1 and/or stack2 are undefined due to invalid input
  } else return false;
}

function checkForWin() {
  // Your code here
  let stack = stacks.c;
  // if c stack is of the same length as the starting stack length, win!
  if (stack.length === stackCount) return true;
  else return false;
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  let stack1 = stacks[startStack];
  let stack2 = stacks[endStack];

  if (isLegal(startStack, endStack)) {
    movePiece(stack1, stack2);
    // check for win
    if (checkForWin()) {
      console.log("You win!");
      currentLevel++;
      stacks = newLevel(currentLevel);
    }
  } else console.log("Illegal move. Try again.");
}

function getPrompt() {
  if (!currentLevelComplete && currentLevel < levelMax) {
    printStacks();
    rl.question("start stack: ", startStack => {
      rl.question("end stack: ", endStack => {
        towersOfHanoi(startStack, endStack);
        getPrompt();
      });
    });
  }
}

// Tests
if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [], c: [3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [], c: [3, 2] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
