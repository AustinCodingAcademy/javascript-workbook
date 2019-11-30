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

let newStacks = {
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
  // Your code here
  // move a piece from one stack to another, push and pop
  stacks[endStack].push(stacks[startStack].pop())
}
  // check to make sure a piece can move
  function isLegal (startStack, endStack) {
    let validMove = ['a', 'b', 'c'];

    if(validMove.includes(startStack) && validMove.includes(endStack)) {
      let startTop = stacks[startStack][stacks[startStack].length - 1];
      let endTop = stacks[endStack][stacks[endStack].length - 1];

      if((startTop < endTop) || (endTop === undefined)) {
        return true;
      } else 
      {
        return false;
      }
    }
  }
    // check to see if the game is won
  // If stack 1 or 2 have the pyramid
function checkForWin() {
  // Your code here
  if(stacks.b.length === 4) {
    console.log("You win");
    return true;
  } else if (stacks.c.length === 4){
    console.log("You win");
    return true;
  } else {
    return false;
  }
}

// function checkForWin() {
//   // Your code here

// }

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // if a move isLegal
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);

    if(checkForWin()) {
      stacks = newStacks; 
    }
  } else {
  // return an error message if not allowed
    console.log('Not a valid move. Do it right')
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
