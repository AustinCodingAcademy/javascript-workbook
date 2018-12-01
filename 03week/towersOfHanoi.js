'use strict';

const assert = require('assert');
const readline = require('readline');
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
  // placing popped index onto end of end stack
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  // checks to make sure move is legal
  // defined by not placing a larger number over a smaller one 
  // example you cannot place a 2 on top of a 1
  if (stacks[endStack].slice(-1)[0] < stacks[startStack].slice(-1)[0]) {
    console.log("Not a valid move");

    return false;
  }
  return true;
};

function checkForWin() {
  console.log(stacks.b.toString());

  if (stacks.b.toString() === "4,3,2,1" || stacks.c.toString() === "4,3,2,1") {
    console.log("You Win!!");
    return true;
  }
  return false;
  // win is defined as moving the tower from a tower to b tower
  // in the order of 4, 3, 2, 1

}

function validStack(startStack, endStack) {
  if (
    (startStack != "a" && startStack != "b" && startStack != "c") ||
    (endStack != "a" && endStack != "b" && endStack != "c")) {
    console.log("not a valid stack");
    return false;
  }
  console.log("true");
  return true;
}


function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (validStack(startStack, endStack)) {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      checkForWin();
    }
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}