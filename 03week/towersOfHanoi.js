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
// move the top piece from startStack to top of endStack
  // Your code here

}



function isLegal(startStack, endStack) {
// if the move is legal return true
// if the move is not legal return false
// A legal move is....
  // when at least 1 piece in the start stack
    // 1. when the endStack is empty
    // 2. when the top pieve in the start stack is smaller than the top piece in the endstack

// Your code here





}

function checkForWin() {
// if the player won, return true
// if the player did not win, return false
// a win is when all 4 blocks are in stack b or stack c


  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // takes in the userInput for startStack and endStack
  // and digitally plays the round
  

  
  // Your code here

  // check to see if the move is legal
    // move the piece
  // esle if the move is not legal
    // tell user the move is not legal

  // check if they won
    // if they won, tell them they won,
    // if they did not win, do nothing
    
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
