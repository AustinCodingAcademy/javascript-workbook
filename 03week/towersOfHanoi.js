'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stacks = {
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
  //Code goes here
  console.log("made it to MovePiece");
  var disk = start.pop();
  end.push(disk);
  return checkForWin(end);
  //return stacks;
}
//console.log(stacks);
//console.log(movePiece('a', 'c'));
//console.log(stacks);

function isLegal(start, end) {
  // Your code here
  //if it's not legal, say "not a legal move"
  //if (end[end.length-1])
  if (end[end.length-1] < start[start.length-1]){
    console.log("illegal move");
  }
  else {
    return movePiece(start, end);
  }
  //if legal eturn movePiece(startStack, endStack);
}

function checkForWin(end) {
  console.log("made it to check for win");
  if(end === [4, 3, 2, 1]) {
    console.log("You win!");
  }
}

function towersOfHanoi(startStack, endStack) {
  var start = stacks[startStack];
  var end = stacks[endStack];
  return isLegal(start, end);
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
