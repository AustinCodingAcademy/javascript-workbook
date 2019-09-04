'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Create game board

//Object of arrays.
//Key value pairs.

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//print

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//To movePiece

//We want to remove or pop() the last index from stacks, startStack, whichever is the last in that stack.
//Then, store the function/call the function, and push() what we pop() from stacks, startStack to stacks, endStack.

function movePiece(startStack, endStack) {

let remove = stacks[startStack].pop()

stacks[endStack].push(remove)

}

//Check to see if move isLegal?

//No larger value may be placed on top of a smaller value. 
//Create a function to access the board: stacks, startStack, 
//Compare the .length of stacks, startStack (object = {property or key : a, b, c}, which is inputed by the user) to stacks, endStack. 
//The stacks, startStack .length must be less than < the .length of stacks, endStack. 
//Must be less than, cannot be equal to in order for movePiece() to run, or return true.
// Use -1 to create the 0 index.

//If the stack, endStack is empty or the .length of stacks, endStack is equal to 0 then allow movePiece() to run, or return true

//If neither of these apply the move is not legal, or false and will return "Not A Valid Move"

function isLegal(startStack, endStack) {

if(stacks[startStack][stacks[startStack].length -1] < stacks[endStack][stacks[endStack].length -1]){

return true }  

else if (stacks[endStack].length === 0){
  return true
}

else return false
}

//Check for win 

//Win can only occur in endStack
//First create a winning stack array = [4, 3, 2, 1]
//winStack can only happen in stacks. 'b' || 'c'
//Create a for loop, to compare [i] to winStack.length
//If stack, endStack [i] is not equal to winStack return false or movePiece()
//If stack, endStack [i] does equal winStack return true

function checkForWin() {
  let winStack = [4, 3, 2, 1]
  let winB= true
  let winC = true

    for(let i = 0; i < winStack.length; i++){

      if(stacks['b'][i] !== winStack[i]){
        winB = false
      }
      if(stacks['c'][i] !== winStack[i]){
        winC = false
    }
  }
      if (winB || winC){
      return true
      }
  }


//Play towersOfHanoi

//Using the readlines startStack, and endStack
//Create a function to see if move isLegal(startStack, endStack) by comparing integers.
//movePiece by using pop() to remove the last index from startStack.
//Then push() what we pop() to endStack.
//checkForWin by comparing [i] to winStack.length using a for loop.
//If stack, endStack length of [i] is equal to winStack.length console.log "We've Got A Winner!".

//else, if move was not legal, console.log "Not A Valid Move". 

function towersOfHanoi(startStack, endStack) {
if (isLegal(startStack, endStack)){
movePiece (startStack, endStack) 
if(checkForWin()){
  console.log("We've Got A Winner!")
}
}

else {
  console.log('Not A Valid Move')
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
