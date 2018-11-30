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

function movePiece(stack1, stack2) {
  // Your code here

  if (isLegal(stack1, stack2)) {
    console.log("LOG: Legal!");
    stack2.push(stack1.pop());
  } else console.log("LOG: Illegal!");
}

function isLegal(stack1, stack2) {
  // Your code here
  // get last number in stack 1
  let num1 = stack1[stack1.length - 1];

  // if we didnt get a num1, stack 1 is empty, illegal move
  if (!num1) {
    console.log("LOG: isLegal returning FALSE (num1 does not exist)");
    return false;
  }

  // if stack2 is not empty
  if (stack2.length > 0) {
    // get last number in stack 2
    let num2 = stack2[stack2.length - 1];

    // if legal move
    if (num2 > num1) {
      console.log("LOG: isLegal returning TRUE ( " + num2 + " > " + num1 + " )");
      return true;
    } else {
      console.log("LOG: isLegal returning FALSE ( " + num2 + " < " + num1 + " )");
    return false;
    }
    // stack2 is empty, legal
  } else {
    console.log("LOG: isLegal returning TRUE (stack2 is empty)");
    return true;
  }
}

function checkForWin() {
  // Your code here
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  movePiece(stacks[startStack], stacks[endStack]);
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
