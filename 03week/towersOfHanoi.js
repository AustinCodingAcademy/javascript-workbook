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

function movePiece(start, end) {
  var toMove = start.pop();
  // removes last element from array
  end.push(toMove);
  // adds item to the end of a different array
}

function isLegal(startStack, endStack) {
  let startArr = stacks[startStack]
  let endArr = stacks[endStack]
  // the only way the move was possible was if the value of the peice moved was less than the value of the existing item in that stack's array or if the stack was empty
  var popOff = startArr[startArr.length - 1];
  var pushOn = endArr[endArr.length - 1];
  if (endArr.length === 0 || popOff < pushOn) {
    return true;
  }
  else return false;
}

function checkForWin() {
  if (stacks['b'].length === 4 || stacks['c'].length === 4) {
    console.log("You Won!");
    let stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    // resets the array after you win
    return true;
  }
  else return false;
  // basically I just set the function to check if stacks b or c had an array with a length of 4
}

function towersOfHanoi(startStack, endStack) {
  var end = stacks[endStack];
  var start = stacks[startStack];
  if (isLegal(startStack, endStack)) {
    movePiece(start, end);
    checkForWin();
  }
  // simply made it possible to move the piece from stack a to stack b or c when prompted if the move is legal.
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
