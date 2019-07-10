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

let freshStacks = {
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
  let endPiece = stacks[startStack].pop();
  stacks[endStack].push(endPiece);
}

function isLegal(startStack, endStack) {
  let startBlock = stacks[startStack].length -1;
  let endBlock = stacks[endStack].length -1;

  if ((stacks[endStack].length == 0) || (stacks[startStack][startBlock] < stacks[endStack][endBlock])) {
    movePiece(startStack, endStack);
    return true;
  } else {
    console.log('Warning: Illegal move attempted. A log of this instance has been created.')
    return false;
  };
};

function checkForWin() {
  if (stacks.c.length === 4) {
    console.log('Nice Job!');
    setTimeout(process.exit(), 5000);
    console.log('here')
    return true;
  } else {
    return false;
  }
};

function clearBoard() {
  if (checkForWin() == true) {
    stacks = freshStacks;
  }
};

function towersOfHanoi(startStack, endStack) {

  if(validInput(startStack, endStack)) {
    isLegal(startStack, endStack);
    clearBoard();
  }

};

function validInput(startStack, endStack){
  let userInput = ['a' , 'b', 'c']

  if(!userInput.includes(startStack) || !userInput.includes(endStack)){
    console.log('Invalid entry. Type a, b, or c')
    return false;
  } else {
    return true;
  }
};

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};


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
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

  // describe('#exitNode()', () => {
  //   it('after detecting win, close node', () => {
  //     stacks = { a: [], b: [], c: [4, 3, 2, 1] };
  //     assert.equal(process.exit(), true);
  //     stacks = { a: [1], b: [4, 3, 2], c: [] };
  //     assert.equal(checkForWin(), false);
  //   });
  // });

} else {

  getPrompt();

}
