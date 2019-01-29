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
  console.log("c: " + stacks.c);;
}

function movePiece(startStack,endStack) {
  // takes last number in startStack and end adds it to the end of endStack
  stacks[endStack].push(stacks[startStack].pop())
};

function isLegal(startStack,endStack) {
  //var. for last number is Stark Stack
  let lastStartPiece = stacks[startStack].length-1;
  // var. for last number is End Stack
  let lastEndPiece = stacks[endStack].length-1;
  // checks is last peice of start stack is greater than last of end stack or if end stack is empty 
  if (stacks[startStack][lastStartPiece] < stacks[endStack][lastEndPiece] || stacks[endStack][lastEndPiece] == undefined) {
    return true;
  } else {
    return false;
  }
};

function checkForWin() {
  // checks to see if stack b or c has a length of 4;
  if (stacks.c.length == 4){
    return true;
  } else if (stacks.b.length == 4){
    return true;
  } else {
    return false;
  }
};
function towersOfHanoi(startStack, endStack) {
  // checks to see if isLegal is true if it is, it runs movePiece; if not logs 'invalid move'
  if (isLegal(startStack,endStack)){
    movePiece(startStack,endStack);
  } else {
    console.log('This is not a valid move!')
  }
  // checks to see if there are 4 discs on any row besides a, if console log 'you won'
  if (checkForWin()) {
    console.log('You have won!');
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