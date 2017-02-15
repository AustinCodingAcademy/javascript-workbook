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



// pop and push to move pieces from one stack to another.
function movePiece(startStack, endStack) {
  var piece = stacks[startStack].pop();
  stacks[endStack].push(piece);
}

// Check if endStack is empty.
function isLegal(startStack, endStack) {
  if (stacks[endStack].length < 1) {
    return true;
  }
  // Check if the number in endStack is smaller than the piece being moved. If so, it is a legal move.
  else if ((stacks[startStack][(stacks[startStack].length - 1)]) < (stacks[endStack][(stacks[endStack].length - 1)])) {
    return true;
  }
  // If not, the move is illegal.
  else {
    console.log("Aint gonna work sucka!!! Try again.")
    return false;
  }
}

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("Big Winner!!!");
    return true;
  } else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
  checkForWin();
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

  describe('#towersOfHanoi()', function() {
    it('should be able to move a block', function() {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', function() {
    it('should not allow an illegal move', function() {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function() {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function() {
    it('should detect a win', function() {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
