'use strict';

//Accept user inputs
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Stack to work on
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//Stack array top index pointer which is not empty
//If empty array then default is -1
let stackAIndex = 3;
let stackBIndex = -1;
let stackCIndex = -1;

//This function will print present state of the stack
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//This function will be called to move elements from one peg to another
//It will first check the source and destination stack and based on that
//move will happen. stack index global variables will be utilized to do the move
//as it keeps track of the available slots in different pegs.
function movePiece(startStack,endStack) {
  if((startStack === 'a') && (endStack === 'b'))
  {
    if(stackBIndex === -1)
       stacks.b[0] = stacks.a[stackAIndex];
    else
     stacks.b[stackBIndex+1] = stacks.a[stackAIndex];

    stacks.a[stackAIndex] = '';
    stackBIndex++;
    stackAIndex--;
  }
  else if((startStack === 'a') && (endStack === 'c'))
  {
    if(stackCIndex === -1)
      stacks.c[0] = stacks.a[stackAIndex];
    else
      stacks.c[stackCIndex+1] = stacks.a[stackAIndex];
      
    stacks.a[stackAIndex] = '';
    stackCIndex++;
    stackAIndex--;
  }
  else if((startStack === 'b') && (endStack === 'a'))
  {
    if(stackAIndex === -1)
      stacks.a[0] = stacks.b[stackBIndex];
    else
      stacks.a[stackAIndex+1] = stacks.b[stackBIndex];

    stacks.b[stackBIndex] = '';
    stackAIndex++;
    stackBIndex--;
  }
  else if((startStack === 'b') && (endStack === 'c'))
  {
    if(stackCIndex === -1)
      stacks.c[0] = stacks.b[stackBIndex];
    else
      stacks.c[stackCIndex+1] = stacks.b[stackBIndex];

    stacks.b[stackBIndex] = '';
    stackCIndex++;
    stackBIndex--;
  }
  else if((startStack === 'c') && (endStack === 'a'))
  {
    if(stackAIndex === -1)
      stacks.a[0] = stacks.c[stackCIndex];
    else
      stacks.a[stackAIndex+1] = stacks.c[stackCIndex];

    stacks.c[stackCIndex] = '';
    stackAIndex++;
    stackCIndex--;
  }
  else if((startStack === 'c') && (endStack === 'b'))
  {
    if(stackBIndex === -1)
      stacks.b[0] = stacks.c[stackCIndex];
    else
      stacks.b[stackBIndex+1] = stacks.c[stackCIndex];

    stacks.c[stackCIndex] = '';
    stackBIndex++;
    stackCIndex--;
  }
}

//This function will check if the move is legal or not.
//A move is legal only when the top entry of destination stack is higher than
//the top entry in the source stack
//Also a move is illegal from an empty stack
function isLegal(startStack,endStack) {
  if((startStack === 'a') && (endStack === 'b'))
  {
    if(stackAIndex === -1)
      return false;
    else if(stackBIndex === 3)
      return false;
    else if(stackBIndex === -1)
      return true;
    else if(stacks.a[stackAIndex] >= stacks.b[stackBIndex])
      return false;
  }
  else if((startStack === 'a') && (endStack === 'c'))
  {
    if(stackAIndex === -1)
      return false;
    else if(stackCIndex === 3)
      return false;
    else if(stackCIndex === -1)
      return true;
    else if(stacks.a[stackAIndex] >= stacks.c[stackCIndex])
      return false;
  }
  else if((startStack === 'b') && (endStack === 'a'))
  {
    if(stackBIndex === -1)
      return false;
    else if(stackAIndex === 3)
      return false;
    else if(stackAIndex === -1)
      return true;
    else if(stacks.b[stackBIndex] >= stacks.a[stackAIndex])
      return false;
  }
  else if((startStack === 'b') && (endStack === 'c'))
  {
    if(stackBIndex === -1)
      return false;
    else if(stackCIndex === 3)
      return false;
    else if(stackCIndex === -1)
      return true;
    else if(stacks.b[stackBIndex] >= stacks.c[stackCIndex])
      return false;
  }
  else if((startStack === 'c') && (endStack === 'a'))
  {
    if(stackCIndex === -1)
      return false;
    else if(stackAIndex === 3)
      return false;
    else if(stackAIndex === -1)
      return true;
    else if(stacks.c[stackCIndex] >= stacks.a[stackAIndex])
      return false;
  }
  else if((startStack === 'c') && (endStack === 'b'))
  {
    if(stackCIndex === -1)
      return false;
    else if(stackBIndex === 3)
      return false;
    else if(stackBIndex === -1)
      return true;
    else if(stacks.c[stackCIndex] >= stacks.b[stackBIndex])
      return false;
  }

  return true;
}

//This function will check if if peg b or c has completed the tower. If so, it will display on
//console which peg has the completed tower
function checkForWin() {
  let stackBComplete = true;
  let stackCComplete = true;
  for(let indexB=0; indexB < 4; indexB++){
    if(stacks.b[indexB] != (4-indexB)){
      stackBComplete = false;
      break;
    }
  }

  if(stackBComplete)
  {
    console.log('Stack b tower complete. You win.');
    return stackBComplete;
  }

  for(let indexC=0; indexC < 4; indexC++){
    if(stacks.c[indexC] != (4-indexC)){
      stackCComplete = false;
      break;
    }
  }

  if(stackCComplete)
    console.log('Stack c tower complete. You win.');
  
  return stackCComplete;
}

//This method validates weather the source and destination stacks are
//valid. It can be only a,b or c.
function validateStackEntries(startStack, endStack){

  if((startStack === 'a') || (startStack === 'b') || (startStack === 'c')) 
  {
    if(startStack === endStack)
      return false;

    if((endStack === 'a') || (endStack === 'b') || (endStack === 'c'))
      return true;
    else
      return false;
  }
  else
    return false;  
}

//This function resets the stack to intial state
function resetStacks(){
  stacks.a.forEach((item,index) => {
    stacks.a[index] = 4 - index;
  });
  stackAIndex = 3;
  stacks.b = [];
  // stacks.b.forEach((item,index) => {
  //   stacks.b[index] = '';
  // });
  stackBIndex = -1;
  stacks.c = [];
  // stacks.c.forEach((item,index) => {
  //   stacks.c[index] = '';
  // });
  stackCIndex = -1;
  console.log('Reset complete.');
}

//This is the main function which will drive
//all the function calls for Towers Of Hanoi
//It will first validate the source and destinations inputs
//Then it will validate if the move is legal
//Then it will perform the move
//Then it will check if peg b or c is complete
//And if complete will display it on console
//And finally reset the stack if it is a Win
function towersOfHanoi(startStack, endStack) {
  const isValidStackEntries = validateStackEntries(startStack,endStack);
  if(isValidStackEntries === false){
    console.log('Invalid stack entry. Stack entries should be unique and a,b or c');
    return;
  }

  const isLegalMove = isLegal(startStack, endStack);
  if(isLegalMove === false){
    console.log('Illegal move.Try again.');
    return;
  }

  movePiece(startStack, endStack);

  const isItAWin = checkForWin();
  if(isItAWin === true){
    console.log('Resetting stacks...');
    resetStacks();
  }
}

//This function will prompt the inputs from the user
//And then call the towerOfHanoi function for processing
function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Pre designed test cases for validation
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
  describe('#validateStackEntries()', () => {
    it('should not allow an invalid source and destination stack entries', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('d', 'b'), false);
      assert.equal(isLegal('b', 'd'), false);
      assert.equal(isLegal('b', 'b'), false);
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

} 
else {
  getPrompt();
}