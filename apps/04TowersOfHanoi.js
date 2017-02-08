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
// var popped = stacks[startStack].pop();

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
//VARIABLE TO HOLD POPPED ITEM
  var popped = stacks[startStack].pop();
//ADD THAT ITEM TO USER SELECTED STACK
  stacks[endStack].push(popped);
}

function isLegal(startStack, endStack) {
//CREATE NEW VARIABLES TO REDUCE AMOUNT OF CODE TO TYPE IN THE LONG RUN
  var tower1 = stacks[startStack];
  var tower2 = stacks[endStack];
//ALLOW ANY PIECE TO BE PLACED IN AN EMPTY STACK
  if (tower2 == '') {
    return true;
  }
//CHECK TO SEE IF START PIECE IS SMALLER THAN END PIECE THAT IT IS BEING PLACED ON
  if (tower1[tower1.length - 1] < tower2[tower2.length-1]) {
    return true;
  } else {
      console.log('Ahh Ahh Ah, you didnt say the magic word!!')
        return false;
  }
}

function checkForWin() {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    console.log('ERES EL GANADORRRRR!!!');
      return true;
  } else {
      return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
      checkForWin();
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
