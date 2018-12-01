"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let gameOver = false;

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  if (gameOver) {
    //reset stacks
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    //turn game over back to false;
    gameOver = false;
    console.log("Starting a new game...");
  }
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  //Moves piece from end of startStack to end of endStack
  return stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  //Check if same stack is selected as start and end, if so prevent
  if (startStack === endStack) {
    console.log("Cannot move into same stack as start");
    return false;
  }
  let startStackLength = stacks[startStack].length;
  let endStackLength = stacks[endStack].length;
  //check if last number on stack moving to is larger than number moving from
  if (stacks[startStack][startStackLength - 1] === undefined) {
    console.log("Cannot move from empty column");
    return false;
  } else if (stacks[endStack][endStackLength - 1] != undefined) {
    //If number from startStack is smaller than number in endStack
    if (
      stacks[startStack][startStackLength - 1] <
      stacks[endStack][endStackLength - 1]
    ) {
      console.log(
        "Number from startStack: " +
          stacks[startStack].slice(-1)[0] +
          " is smaller than number from endStack: " +
          stacks[endStack].slice(-1)[0]
      );
      return true;
    } else {
      console.log("Number is too large, denying");
      return false;
    }
  } else {
    //column moving to is empty, allow
    console.log("Column is empty, allowing move");
    return true;
  }
}

function checkForWin() {
  //if stack c contains all numbers
  let stringOfStackB = stacks.b.join(",");
  let stringOfStackC = stacks.c.join(",");
  if (stringOfStackB === "4,3,2,1" || stringOfStackC === "4,3,2,1") {
    //player wins
    printStacks();
    console.log("You Win!!");
    gameOver = true;
    return true;
  } else {
    return false;
  }
}

function isStack(startStack, endStack) {
  if (
    (startStack != "a" && startStack != "b" && startStack != "c") ||
    (endStack != "a" && endStack != "b" && endStack != "c")
  ) {
    //one of the stack inputs is not valid
    console.log("Not a valid input!");
    return false;
  } else {
    return true;
  }
}

function towersOfHanoi(startStack, endStack) {
  //check if input is actually a valid stack
  if (isStack(startStack, endStack)) {
    //if isLegal passes, allow movePiece
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      checkForWin();
    }
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
