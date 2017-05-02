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

function movePiece(start, place) {
  // Your code here
  let hold = stacks[start].pop();
  stacks[place].push(hold);
}

function isLegal(start, place) {
  // Start and End represent the user response. It will vary (a b or c), so give
  // assign it a variable that is simple and makes sense.
 // Regarding the first line below, how can we rewrite stacks.a[3]
  // and make it last, no matter how many indices are in the array.
  if (stacks[place].length === 0) return true;
  else if ((stacks[start].length -1) > (stacks[place].length -1)) return false;
    else return true;
}

function checkForWin() {
// Check for Win dept only has to determine if it is true. The rest will be done below.
  if (stacks[b].length === 4 || stacks[c].length === 4) {
   return true;
  } else {
   return false;
  }
}

// Greg is fancy...
// function checkForWin() {
//   if (stacks.b.length === 4 || stacks.c.length === 4) return true;
//   else return false;
// }

function towersOfHanoi(startStack, endStack) {
  // Your code here Start out by keeping this really simple.
  // Each dept (the 3 functions above) will have their own if statements and return values. KSS.
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    if (checkForWin()) {
      console.log('You Win!');
      process.exit();
    } else {
      getPrompt ();
    }
  } else {
    console.log('Nope! Try again!')
  }
    getPrompt();
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
