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
  // Your code here, gives the move a variable 
  let currentPiece = stacks[startStack].pop();
  // add current piece to end stack
    stacks[endStack].push(currentPiece)
}

function isLegal(startStack, endStack) {
  // need to add something it can check
  const legalMove = ["a", "b", "c"];

  if(legalMove.includes(startStack) == false || legalMove.includes(endStack) == false)
  {
    return false;
  }

  //empty stack means move is legal
  if(stacks[endStack].length == 0)
  {
    return true;
  }

  //if piece is larger move is legal
  else if(stacks[startStack].slice(-1) < stacks[endStack].slice(-1))
  {
    return true;
  }
  else 
  {
    return false;
  }

}

function checkForWin(startStack, endStack) {
  // checking to win
  if( stacks.b.length === 4 || stacks.c.length === 4)
  {
    console.log("You've won!!!!")
    return true;
  }
  else 
  {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if(isLegal(startStack, endStack) == true)
  {
    movePiece(startStack, endStack)
  }
  else
  {
    console.log("YOU SHALL NOT PASS!!")
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
