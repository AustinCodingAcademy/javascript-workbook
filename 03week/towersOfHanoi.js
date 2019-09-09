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


// Function to reset the board
function resetBoard() {
  stacks.a = [4, 3, 2, 1];
  stacks.b = [];
  stacks.c = [];
}

function movePiece(oneStack, twoStack) {
  // Your code here



  // Here I access stacks array at wherever the placement block is,
  // then push the value of whatever is saved at the end of stacks 
  // array at removal block to its new position
  stacks[twoStack].push(stacks[oneStack].pop());

}

function isLegal(stackOne, stackTwo) {
  // Your code here


  // I access each element of the stacks object array, and check if
  // the piece waiting to move is smaller than whats on the new row
  // I also make sure that in case the row is empty, a piece can still place
  if (stacks[stackOne][stacks[stackOne].length -1] < stacks[stackTwo][stacks[stackTwo].length -1]) {
    return true;
  }
  else if (stacks[stackTwo] == '') {
    return true;
  }


}

function checkForWin() {
  // Your code here

  // This determines the winner, if the either other stack 
  // has the correct order and returns true to the towersOfHanoi function
  if (stacks.c == '4,3,2,1' || stacks.b == '4,3,2,1') {
    return true;
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here


  // first check if the move is legal, if it is move the piece and 
  // if not let the user know
  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
    
  }
  else {
    console.log('Invalid Move');
  }

  // After every move, check for a winner
  if (checkForWin()) {
    console.log(' ');
    console.log(' ');

    console.log('You Win');

    console.log(' ');
    console.log(' ');

    resetBoard()
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
