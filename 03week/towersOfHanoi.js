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
  console.log("\na: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c + "\n");
}

//Moves last entry in startStack to last place in endStack
function movePiece(startStack, endStack) {
  let start = stacks[startStack];
  let end = stacks[endStack];
  end.push(start.pop());
}

//Checks to assert legal moves
function isLegal(startStack, endStack) {
  let start = stacks[startStack];
  let end = stacks[endStack];
  //Setting x and y to the last entry of startStack and endStack respectively
  //If startStack or endStack are empty, x/y are set to 5
  let x = (start.length===0?5:start[start.length - 1]);
  let y = (end.length===0?5:end[end.length - 1]);
  if (x === 0) { //Checks if there is anything to pick up
    console.log('Invalid move: nothing to pick up');
    return false;
  } else if (x > y) { //Checks if picked up piece is better than end location
    console.log('Invalid move: can not place larger on smaller');
    return false;
  } else if (x === y) { //Checks if both startStack and endStack are empty
    console.log('Invalid move: start and end are empty');
    return false;
  } else { //If none of the above are triggered, move is legal
    return true;
  }
}

//Checks if either stack c has all pieces on it
function checkForWin() {
  if (stacks.c.join('') === '4321') {
    return true;
  } else {
    return false;
  }
}

//Main function
function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  }
}

function getPrompt() {
  printStacks();
  rl.question('Start stack: ', (startStack) => {
    rl.question('End stack: ', (endStack) => {
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
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
