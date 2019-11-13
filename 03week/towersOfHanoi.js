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
  // Your code here
  let movedPiece = stacks[startStack].pop();
  stacks[endStack].push(movedPiece);
}

function isLegal(startStack, endStack) {
  // Your code here
  let chosenPiece = stacks[startStack][stacks[startStack].length-1];
  let chosenDest = stacks[endStack][stacks[endStack].length-1];
  if (chosenPiece < chosenDest || chosenDest == undefined) {
    return true;
  } else {
    console.log("\n Illegal Move! \n");
  }
}

function checkForWin() {
  // Your code here 
  if ((stacks['b'][3] === 1) || (stacks['c'][3] === 1))
  {
    console.log(" \n You win! \n");
    return true
  }
} 

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // console.log("You win!");
  //  if (startStack != 'a' || 'b' || 'c') {
  //    console.log('Please enter a, b, or c.')
  //  } else 
   if (
    isLegal(startStack, endStack) === true) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    return "\n Illegal Move! \n";
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
      // towersOfHanoi('a', 'c');
      // assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
  });
  

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3],
        b: [1, 2],
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
      console.log(checkForWin());
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      // stacks = { a: [1], b: [4, 3, 2], c: [] };
      // assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
