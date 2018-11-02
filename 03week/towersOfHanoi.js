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

//Print the currenct stack elements
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
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
//This function will perform the mobe from source stack to destination stack
function movePiece(startStack,endStack) {
  if((startStack === 'a') && (endStack === 'b'))
  {
    stacks.b.push(stacks.a.pop());
  }
  else if((startStack === 'a') && (endStack === 'c'))
  {
    stacks.c.push(stacks.a.pop());
  }
  else if((startStack === 'b') && (endStack === 'a'))
  {
    stacks.a.push(stacks.b.pop());
  }
  else if((startStack === 'b') && (endStack === 'c'))
  {
    stacks.c.push(stacks.b.pop());
  }
  else if((startStack === 'c') && (endStack === 'a'))
  {
    stacks.a.push(stacks.c.pop());
  }
  else if((startStack === 'c') && (endStack === 'b'))
  {
    stacks.b.push(stacks.c.pop());
  }

}

//This function will check if the move is legal or not.
//A move is legal only when the top entry of destination stack is higher than
//the top entry in the source stack
//Also a move is illegal from an empty stack
function isLegal(startStack,endStack) {
  if((startStack === 'a') && (endStack === 'b'))
  {
    if(stacks.a.length <= 0)
       return false;
    if(stacks.a[stacks.a.length-1] >= stacks.b[stacks.b.length-1])
      return false;
  }
  else if((startStack === 'a') && (endStack === 'c'))
  {
    if(stacks.a.length <= 0)
       return false;
    if(stacks.a[stacks.a.length-1] >= stacks.c[stacks.length-1])
      return false;
  }
  else if((startStack === 'b') && (endStack === 'a'))
  {
    if(stacks.b.length <= 0)
    return false;
    if(stacks.b[stacks.b.length-1] >= stacks.a[stacks.a.length-1])
      return false;
  }
  else if((startStack === 'b') && (endStack === 'c'))
  {
    if(stacks.b.length <= 0)
    return false;
    if(stacks.b[stacks.b.length-1] >= stacks.c[stacks.b.length-1])
     return false;
  }
  else if((startStack === 'c') && (endStack === 'a'))
  {
    if(stacks.c.length <= 0)
    return false;
    if(stacks.c[stacks.c.length-1] >= stacks.a[stacks.a.length-1])
     return false;
  }
  else if((startStack === 'c') && (endStack === 'b'))
  {
    if(stacks.c.length <= 0)
    return false;
    if(stacks.c[stacks.c.length-1] >= stacks.b[stacks.b.length-1])
     return false;
  }
  return true;
}

//This function will check if if peg b or c has completed the tower. If so, it will display on
//console which peg has the completed tower
function checkForWin() {
    if(stacks.c.length == 4)
    {
      console.log('Peg C complete. Yo win!');
      return true;
    }
    else if(stacks.b.length == 4)
    {
      console.log('Peg B complete. Yo win!');
      return true;
    }
    return false;
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

 //This function resets the stack to intial state
 function resetStacks(){
  stacks.a = [];
  for(let i=0;i<4;i++)
  {
    stacks.a.push(4-i);
  };
  stacks.b = [];
  stacks.c = [];
  console.log('Reset complete.');
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
 // Tests
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
