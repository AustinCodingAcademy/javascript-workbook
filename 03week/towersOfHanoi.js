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
  const block = stacks[startStack].pop();
  stacks[endStack].push(block);
}


function isLegal(startStack, endStack) {
  // how to determine the value of the last item in the start array
  let LastStartStack = stacks[startStack][stacks[startStack].length - 1];
  // how to determine the value of the last item in the ending array
  let LastEndStack = stacks[endStack][stacks[endStack].length - 1];

  if (LastStartStack > LastEndStack) {
    console.log("you can't do that man");
    return false;
  } else if (LastEndStack === undefined) {
    console.log('cool');
    return true;
  } else {
    console.log('cool');
    return true;
  };

}

function checkForWin() {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    console.log('You have won!');
    return true;
  } else {
    return false;
  };

}

function towersOfHanoi(startStack, endStack) {

  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  } else {
    return console.log('incorrect move');
  };



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
