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
  return stacks[endStack].push(stacks[startStack].pop())
}

function isValid(startStack, endStack) {
  // test to make sure user enters A, B, or C
  if (startStack === "a" && (endStack === "b" || endStack === "c")) {
    return true
  } else if (startStack === "b" && (endStack === "a" || endStack === "c")) {
    return true
  } else if (startStack === "c" && (endStack === "a" || endStack === "b")) {
    return true
  } else {
    return false;
  }
}



function isLegal(startStack, endStack) {
  if (isValid(startStack, endStack)) {
    let startPiece = stacks[startStack][stacks[startStack].length - 1];
    let endPiece = stacks[endStack][stacks[endStack].length - 1];
    // console.log (`${startPiece},${endPiece}`)

    if (startPiece < endPiece || stacks[endStack].length === 0) {
      return true;
    } else {
      return false;
      console.log("Invalid Move!")
    }
  }
}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4) {
    return true;
  } else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  }

  if (checkForWin()) {
    console.log("You Win!")
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
      assert.equal(isLegal('c', 'a'), false);
      assert.equal(isLegal('c', 'b'), false);
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

  describe('#isValid()', () => {
    it('should not allow an inValid move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isValid('a', 'a'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isValid('a', 'c'), true);
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
