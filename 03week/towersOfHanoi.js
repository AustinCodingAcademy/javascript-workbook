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

//actually move the pieces
function movePiece(startStack, endStack) {
  // Your code here

  //grabs array from user startStack
  let fromStack = stacks[startStack];
  //grabs array from user endStack
  let toStack = stacks[endStack];
  
  // pop from startStack
  let popped = fromStack.pop();
  // push to endStack
  toStack.push(popped);
  



}

//should return true or false dependiong on if move is legal
function isLegal(startStack, endStack) {
  // Your code here

  //grabs array from user startStack
  let fromStack = stacks[startStack];
  //grabs array from user endStack
  let toStack = stacks[endStack];

  //grabs value of last item in user startStack
  let lastPieceFrom = fromStack[fromStack.length-1];
  //grabs value of last item in user endStack
  let lastPieceTo = toStack[toStack.length-1];

  
  //checks if startStack is empty of doesnt exist
  if (fromStack.length == 0 || fromStack == undefined) {
    return false;
  //check if startStack is larger than endStack
  } else if (lastPieceFrom>lastPieceTo){
    return false;
  } else {
    return true;
  }
  

}

// return true if player won
//if moved all discs to another tower
function checkForWin() {
  // Your code here

  let arrayLengthA = stacks.a.length ;
  let arrayLengthC = stacks.c.length;
  // checks if tower B is fully populated
  if( arrayLengthA == 0 &&  arrayLengthC == 0){
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  
  
  if (checkForWin() == true) {
    console.log("You've Won!");
  } else if (isLegal(startStack, endStack) == false){
    console.log("Enter a valid move");
  } else {
    movePiece(startStack, endStack);
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
