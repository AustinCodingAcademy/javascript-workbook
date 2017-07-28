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
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  if(startStack.length === 0){
  console.log('This is an empty array, choose another');
  return false;
} else if(endStack.length === 0){
  return true;
} else if(stacks[startStack][stacks[startStack].length - 1] > stacks[endStack][stacks[endStack].length - 1]){
  console.log('This is illegal!  Please choose another stack');
  return false;
} else {
  return true;
}

function checkForWin() {
  if(stacks.b.length === 4 || stacks.c.length === 4){
    console.log('Congratulations!  You win!');
  } else {
    console.log('Make another move.');
  }

}

function towersOfHanoi(startStack, endStack) {
  //startStack = startStack.toLowerCase().trim();
  //endStack = endStack.toLowerCase().trim();
  /*if((startStack === 'a' || startStack === 'b' || startStack === 'c') && (endStack === 'a' || endStack === 'b' || endStack === 'c')){
    if(isLegal(startStack, endStack)){
      movePiece(startStack, endStack);
      checkForWin();
    } else {
      console.log('Make another selection, please.  That move is illegal');
    }
  } else {
    console.log('Please choose either a, b, or c, please!');
    }
  }*/
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
