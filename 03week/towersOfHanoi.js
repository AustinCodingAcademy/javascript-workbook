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

//i need fresh version of the board to easily clear the board after the user wins
let freshStacks = {
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
//since pop targets the last index of an array, I'm using it here to make a variable that takes the last index of the array that the user inputs (geez putting this in english is a good exercise)
  let endPiece = stacks[startStack].pop();
//after the last piece is popped, i'm sending it to the array that the user declares on endStack
  stacks[endStack].push(endPiece);
}

//i need to check if a move is legal. legal moves can only place smaller blocks(numbers) on larger blocks(numbers)
function isLegal(startStack, endStack) {
//first I'm declaring some variables. the startBlock and endBlock target the index -1 because the array starts at 0. -1 will give me the last index in the array everytime
  let startBlock = stacks[startStack].length -1;
  let endBlock = stacks[endStack].length -1;
//if the array is empty, it doesn't matter which block(number) gets pushed there. But if there is a block there, the startBlock must be a smaller number than the endBlock
  if ((stacks[endStack].length == 0) || (stacks[startStack][startBlock] < stacks[endStack][endBlock])) {
    movePiece(startStack, endStack);
    return true;
  } else {
//cheeky console log if users make a mistake
    console.log('Warning: Illegal move attempted. A log of this instance has been created.')
    return false;
  };
};

//this function checks to see if the user wins. Because my test checks for all four blocks(numbers) to be in the array 'c', i'm just going to check for the length of stacks.c
function checkForWin() {
  if (stacks.c.length === 4) {
    console.log('Nice Job!');
    return true;
  } else {
    return false;
  }
};

//this is going to replace the user's board with a fresh version to play again. if the user wins, it will exit the terminal 1 sec later, and the tests still pass!!
function clearBoard() {
  if (checkForWin() == true) {
    stacks = freshStacks;
    setTimeout(process.exit(), 1000);
  } 
};

function validInput(startStack, endStack){
  let userInput = ['a' , 'b', 'c']
//i'm comparing the user's input (startStack, endStack) with an array I created called userInput. If the input DOES NOT include a, or b, or c, then the function returns false with a console.log that explains that input is invalid. If they type a, b, or c then it proceeds.
  if(!userInput.includes(startStack) || !userInput.includes(endStack)){
    console.log('Invalid entry. Type a, b, or c')
    return false;
  } else {
    return true;
  }
};

//the main game checks for valid input and then pushes to isLegal function which calls the movePiece function. 
function towersOfHanoi(startStack, endStack) {
//if the use puts in a, b, or c then check to see if isLegal returns true
  if(validInput(startStack, endStack)) {
    isLegal(startStack, endStack);
    clearBoard();
  }
};

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};


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

};