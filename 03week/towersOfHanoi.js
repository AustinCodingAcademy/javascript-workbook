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

/*
- a, b, c are the stacks/columns that the blocks go on
- the numbers 1, 2, 3, 4 are the blocks, with 1 being the smallest block and 4 being the largest
- use .push to add something to the end
- use .pop to remove what's on the end of the stack
*/

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // when one stack is clicked, remove the last block on it
  // add that removed block to the next column the user clicks
  let strClickedPiece = stacks.a.pop();
  if (stacks.b[stacks.b.length - 1] > strClickedPiece) { // to check if the last block present is bigger than the one being appended
    let stacks.b = stacks.b.push(strClickedPiece);
  } else if (stacks.c[stacks.c.length - 1] > strClickedPiece) {
    let stacks.c = stacks.c.push(strClickedPiece);
  } else {
    console.log("Invalid move");
  }
}
//how to tell which piece the user clicks on next?

function isLegal() {
  // for each stack, check to see that there is no larger number on top of a smaller one

}

function checkForWin() {
  // if stacks "a" and "b" are empty, and "c" has 4, 3, 2, 1 on it in that order, it's a win
  if (stacks = {
      a: [],
      b: [],
      c: [4, 3, 2, 1]
    }) {
    console.log("You win!");
  }
}

function towersOfHanoi(startStack, endStack) {
  movePiece();
  if (isLegal() && checkForWin()) {
    console.log("You win!");
  } else {
    movePiece(); //if there's not a win, the user needs to click and continue moving the blocks
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