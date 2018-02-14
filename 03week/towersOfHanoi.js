'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/*
CODE PLAN
-------------

rules:
--move one piece at a time
--larger peice cannot be placed on top of smaller
--must move all pieces to another stack (either b or c) to win

Function to-do list
-- isInputValid()
    --function to determine if input is valid by checking array of valid inputs for the argument entered
    --exapmle:  possibleStacks.indexOf(startstack) === -1 if input is invalid
    -- if input IS valid, should return isLegal function
--isLegal()
    --function to determine if the move being made is legal
    --should check that move is not drawing from empty stack
      --if endstack.length === 0, then illegal
    --should check that player is not placing larger piece on top of smaller
    --check last piece of startStack < last piece of endStack
      --last piece of stack === stacks[startStack][stacks[startStack].length-1] or stacks[endStack][stacks[endStack].length-1]
    --if move is illegal, return true, console.log('snarky comment')
    --if move is legal, return movePiece()
--movePiece()--function to move piece
  --pop() last piece off startStack and push it to endStack
  --return checkForWin()
--function to check for win -- checkForWin()
  -- check stacks.b.length and stacks.c.length. if one of them === 4, the game is won
  -- if the game is won, congradulate the winner with snarky console.logs and return startNewGame()
--startNewGame()--function to start new game after winning
  --console.log("new game") so player knows what is going on
  --stacks = {a:[4,3,2,1] b:[] c:[]}
--towersOfHanoi()--call isInputValid() --this will trigger all other functions in sequence
*/

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


function printStacks() {
  console.log(''); //to create space between game boards between turns
  console.log('Towerz of hANNOYED')
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);

}

//checks to make sure than input is either 'a', 'b' or 'c', if it is, check if move is legal
const possibleStacks = ['a', 'b', 'c']
const isInputValid = (startStack, endStack) => {
  if (possibleStacks.indexOf(startStack) === -1 || possibleStacks.indexOf(endStack) === -1) {
    console.log('--HEY! enter something valid, please. (hint: a, b or c)')
    return true;
  } else {
    return isLegal(startStack, endStack)
  }
}

//moves piece. pops off end of startStack and pushes onto the end of endStack, then checks for win
const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop())
  return checkForWin();
}

//determines if move is legal, and if so, allows move to be made
const isLegal = (startStack, endStack) => {
  if (stacks[startStack].length === 0){ /*cannot draw from an empty stack*/
    console.log('--Nice try, loser. google the rules')
    return true
  }else if (stacks[startStack][stacks[startStack].length-1] > stacks[endStack][stacks[endStack].length-1]) {
    console.log('--Illegal move. Calling the cops') /*cannot put larger piece on top of smaller*/
    return true
  } else {
    return movePiece(startStack, endStack) /*if move is legal, allow move*/
  }
}

//checks for win, if the game has been won, start a new game
const checkForWin = () => {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('--Winna, winna, chicken dinna')
    console.log('--congrats on winning this totally "fun" game')
    console.log('--proud of u')
    startNewGame();
  }
}

//starts a new game after the old one has been completed
const startNewGame = () => {
  console.log('')
  console.log("NEW GAME")
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

//plays the full game
const towersOfHanoi = (startStack, endStack) => {
  isInputValid(startStack, endStack)
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

getPrompt();


/*----------TESTS----------*/

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should detect if move is legal', () => {
      stacks = {a:[4, 3, 2], b:[1], c:[]}
      assert.equal(isLegal('a', 'b'), true);
      assert.equal(isLegal('c', 'b'), true);
    });
    it('should detect a win and detect if new game is started', () => {
      stacks = {a:[1], b:[], c:[4, 3, 2]}
      assert.equal(checkForWin('a', 'c'), startNewGame());
    });
  });
} else {

  getPrompt();

}
