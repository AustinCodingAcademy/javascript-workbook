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
  //removes the last element of the chosen array
  let movedPiece = stacks[startStack].pop();
  //pushes it to the chosen end stack
  stacks[endStack].push(movedPiece);
}

function isLegal(startStack, endStack) {
  // Your code here
  //sets variables to make the code more manageable
  let chosenPiece = stacks[startStack][stacks[startStack].length-1];
  let chosenDest = stacks[endStack][stacks[endStack].length-1];
  //checks if the last element of the start array is less than the last element of the end array
  if (chosenPiece < chosenDest || chosenDest == undefined) {
    return true;
  } else {
    console.log("\n Illegal Move! \n");
    return false;
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
     //checks if the isLegal function/check passed
    isLegal(startStack, endStack) === true) {
    //moves the chosen array element
    movePiece(startStack, endStack);
    //checks if the game is won
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
    // Added test
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3],
        b: [],
        c: [1, 2]
      };
      assert.equal(isLegal('a', 'c'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
    // Added test
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'b'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      console.log(checkForWin());
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
    });
    // Added test
    it('should detect a win', () => {
      console.log(checkForWin());
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });

} else {

  getPrompt();

}
