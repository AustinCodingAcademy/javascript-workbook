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

function movePiece(startStack,endStack) {
  // Your code here
  var block = stacks[startStack].pop(); //pick the last block from a stack and assign it to variable block
  stacks[endStack].push(block); //place that block to another stack

}

function isLegal(startStack,endStack) {
  // Your code here
  if ((stacks[endStack].length === 0) || ((stacks[startStack][stacks[startStack].length-1]) < (stacks[endStack][stacks[endStack].length-1]))) {
    //if there is no block on the stack or current block is less than the last block
    return true; //allow to move the block
  }else { //otherwise
    return false; //do not allow to move the block
    alert('Illegal move. Try again!'); //warn the user about illegal move
  }
}

function checkForWin(startStack,endStack) {
  // Your code here
  if((stacks.b.length || stacks.c.length) === 4) { //if stack b or c has 4 elements
    return true //player wins
    console.log('You win!'); //print to congratulate the user
  }else { //otherwise
    return false; //player keeps playing
  }
}

function towersOfHanoi(startStack, endStack) {
  //this is where the game starts
  if (isLegal(startStack,endStack)) { // before you move any block, check if it is allowed
    movePiece(startStack,endStack); //if so, move the block properly
  }

  checkForWin(); //after each move, check to see if the player wins
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
