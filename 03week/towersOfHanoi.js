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

//naming of origin column and destination column for each piece.
//this allows each block to be removed from the "end" of a column and placed into a different column
function movePiece(startStack, endStack) {
  // Your code here
  let block = stacks[startStack].pop();
  stacks[endStack].push(block);
}

//defines legal moves. if a column is empty, any block can be moved there.
//if a column already contains a block that is greater than the block being moved into it, it will be rejected
function isLegal(startStack, endStack) {
  if ((stacks[endStack].length === 0) || ((stacks[endStack][stacks[endStack].length - 1]) > (stacks[startStack][stacks[startStack].length -1]))) {
    return true;
  } else {
    // return false;
    console.log("Sorry, you can't do that!");
  }
}
//checks for winning move of columns b or c containing all blocks in legal order.
function checkForWin(startStack, endStack) {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    return true;
    console.log("You win!")
  } else {
    return false;
  }
}

//calls for game to be played if moves are legal, then blocks can be moved, columns are checked for win
function towersOfHanoi(startStack, endStack) {
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
  checkForWin();
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

// Tests -----------------------------------

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
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
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
