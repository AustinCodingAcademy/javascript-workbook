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

function validInput(input1, input2) {
  // Check that input is leter a, b, or c
  let valid = ["a", "b", "c"];

  for (let i = 0; i < 3; i++) {
    if (input1 !== valid[i] || input2 !== valid[i]) {
      return false;
    } else {
      return true;
    }
  }

}

function movePiece() {
  // Your code here

}

function isLegal(start, end) {
  // Your code here
  // If starting stack is not empty
  // Pop last element of stack
  // If end stack is not empty then compare the last element of that stack with popped element
  // If it is empty then it's a legal move automatically
  // If the popped element is bigger than the last element then the move is illegal.
  console.log(stacks.${end});
  if (stacks.start.length !== 0) {
    let hand = stacks.start.pop();
    if(stacks.end.length === 0) {
      return true;
    }else {
      if (hand > stacks.end[this.length]){
        //Something
      }
    }
  }else {
    return false;
  }

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  let start = startStack.toLowerCase();
  let end = endStack.toLowerCase();

  isLegal(start, end);


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