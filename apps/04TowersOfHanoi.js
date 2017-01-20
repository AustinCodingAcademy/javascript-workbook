'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks = {
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
  var pieceMoved = stacks[startStack].pop();
  stacks[endStack].push(pieceMoved);
}

function isLegal(startStack, endStack) {
  // Your code here
  var stackOne = stacks[startStack].length - 1;
  var stackTwo = stacks[endStack].length - 1;
  var compareOne = stacks[startStack][stackOne];
  var compareTwo = stacks[endStack][stackTwo];
  if(compareTwo === undefined){
    return true;
  }else if(compareOne < compareTwo){
    return true;
  }else{
    return false;
  };

}

function checkForWin() {
  // Your code here
  if((stacks.a.length || stacks.b.length || stacks.c.length) === 4){
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
if (isLegal(startStack, endStack)) {
  movePiece(startStack, endStack);
} else {
    console.log("Aw hell no");
}
var checkWin = checkForWin();
if (checkWin) {
  console.log("you win");
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
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

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', function () {
    it('should not allow an illegal move', function () {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function () {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function () {
    it('should detect a win', function () {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
