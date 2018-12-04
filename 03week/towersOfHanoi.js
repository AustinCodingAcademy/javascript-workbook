"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// reference stacks with dot notation (example stacks.a will grab row "a:" of stacks)
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// reset function is called when win condition is met (all disks on stack b)
const resetStacks = () => {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// keep in mind that .pop can't take in any parameters and can only be used on an array. Wrap the stack.pop in stacks.push as a parameter.
const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop());
};

// the challenge (for me) was to grab the specific piece of the startStack and endStack. using the parameter from the function in bracket notation. startStackLength helps to elinminate a bug when moving emptly stacks which creates commas (bug)
const isLegal = (startStack, endStack) => {
  let startStackLength = stacks[startStack].length;
  if (
    startStackLength === 0 ||
    stacks[endStack].slice(-1)[0] < stacks[startStack].slice(-1)[0]
  ) {
    console.log("that move is totally illegal!");

    return false;
    // if false stop and give console.log message ('illegal move')
  }
  return true;
  // if true move on to the next thing...
};

const checkForWin = () => {
  //if all stacks.b is 4,3,2,1 print out "Congratulations! You Win!" and game resets
  // convert stacks.b array into string stacksBWins so it can be compared without writing a giant function
  let stacksBWins = stacks.b.join(",");
  if (stacksBWins === "4,3,2,1") {
    printStacks();
    resetStacks();
    console.log("Congratulations! You Win!!");
    return true;
  } else {
    return false;
  }
};
// towersOfHanoi() function checks to make sure a move isLegal() then moves onto movePiece() - finally, it checkForWin() - if checkForWin() is true, "congrats you win" message is displayed and game is reset
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  }
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

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
