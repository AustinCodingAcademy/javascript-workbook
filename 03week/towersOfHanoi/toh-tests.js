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

let gameStatus = true;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function checkForWin() {
  let stackA = stacks.a
  let stackB = stacks.b
  let stackC = stacks.c
  if (stackA.length == 0 
    && (stackB.length == 4 || stackC.length == 4)) {
    console.log("YOU WON!");
    gameStatus = false;
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  let movedFrom = stacks[startStack];
  let movedTo = stacks[endStack];
  if (movedFrom.length > 0) {
    let movedPiece = movedFrom[movedFrom.length-1];
    if (movedTo.length == 0 || movedPiece < movedTo[movedTo.length-1]) {
      movedTo.push(movedPiece);
      movedFrom.pop(movedPiece);
      checkForWin();
      return true;
    } else {
      console.log("You cant move a bigger piece on a smaller piece");
      return false;
    }
  } else {
    console.log("There's nothing to move on that stack!");
  }
}

function getPrompt() {
  printStacks();
  if (gameStatus) {
    rl.question('start stack: ', (startStack) => {
      rl.question('end stack: ', (endStack) => {
        towersOfHanoi(startStack, endStack);
        getPrompt();
      });
    });
  }
}

// Tests
if (typeof describe === 'function') {
  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(towersOfHanoi('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(towersOfHanoi('a', 'c'), true);
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