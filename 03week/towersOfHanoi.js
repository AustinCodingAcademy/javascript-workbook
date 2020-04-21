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
//act
function movePiece(A, B) {
  if (isLegal(A,B)) {
  let temp = A[A.length -1];
  B.push(temp);
  A.pop();
  }
  checkForWin(stacks.a,stacks.b,stacks.c);

}
// source has to be less than the destination
function isLegal(A, B) {
  if ((A || B) == null) {
    return false;
  }
  if (B.length == 0){
  return true;
  }
  if (A[A.length -1]< B[B.length -1]) {
    return true;
  } else {
    return false;
  }
}

function checkForWin(A, B, C) {
  if (A.length == 0 && (B.length == 0 || C.length == 0)) {
    console.log('You win!');
    process.exit(0);
  }

}

function towersOfHanoi(startStack, endStack) {
  let fromStack = stacks[startStack];
  let toStack = stacks[endStack];
  console.log(movePiece(fromStack, toStack));


}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack.toLowerCase().trim(), endStack.toLowerCase().trim());
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

}
 else {

  getPrompt();

}
