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
//moveCounter variable will determine if the user completed the puzzle with the least number of moves possible
let moveCounter = 0

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//the isItLegal function will be called back to determine if the input is valid.
const isItLegal = (startStack, endStack) => {
  const possibleInputs = ["a", "b", "c"]
  if(possibleInputs.includes(startStack) && possibleInputs.includes(endStack)){
    return "it is a valid input"
  }
}

//assuming the input was deemed valid the movePiece function is called to check if the designated move
//is a valid move (if the number to be moved is larger than the number in the last position of the
//ending stack it is an ivalid move) If the move is valid the the number to be moved is .pop'ed off
// and added to the end of the ending stack, as well as adding one to the moveCounter.
const movePiece = (startStack, endStack) => {
  let blockToBeMoved = stacks[startStack].valueOf()[stacks[startStack].valueOf().length-1]
  let lastBlockOfFutureStack = stacks[endStack].valueOf()[stacks[endStack].valueOf().length-1]
  if((stacks[endStack].length === 0) || (blockToBeMoved < lastBlockOfFutureStack)){
      stacks[endStack].push(stacks[startStack].pop())
      moveCounter ++
      return "block was moved!"
  }
}

//the checkMoveCounter function references the moveCounter variable at the end of the game when it is called
// if it is less than or equal to 15 (the minimum number of moves possible) it returns true.
const checkMoveCounter = (moveCounter) => {
  if(moveCounter <= 15){
    return "great job"
  }
}


//compareWinningArrays function is called in the checkForWin function it determines if the
//finalArray variable and winningArray variable both declared in the checkForWin function
//are equal to each other.
const compareWinningArrays = (finalArray, winningArray) => {
  if(finalArray.length == winningArray.length){
    for(var i = 0 ; i = finalArray.length; i++){
      if(finalArray[i] === winningArray[i]){
          return true;
      }
    }
  }
}

//the checkForWin function calls the compareWinningArrays function and checkMoveCounter function
//to check for a winning score.
const checkForWin = (startStack, endStack) => {
  const finalArray = stacks[endStack].valueOf()
  const winningArray = [4, 3, 2, 1]
  if(compareWinningArrays(finalArray, winningArray)){
    if(checkMoveCounter(moveCounter)){
      return true
    }else{
      console.log("Almost but you use too many moves, give it another trie!")
    }
  }
}

// towersOfHanoi function calls back all the previously expressed functions in order to run
// the game and comments results of invalid moves, invalid inputs as well as declaring a winner
const towersOfHanoi = (startStack, endStack) => {
  if(isItLegal(startStack, endStack)){
    console.log(`line 86`);
    if(movePiece(startStack, endStack)){
      console.log(`line 88`);
      if(checkForWin(startStack, endStack)){
        console.log(`line 90`);
         return "Congratulations you win!"
      }else console.log("line 92 Next Move");
    }
    else console.log("invalid move")
  }
  else console.log("invalid input")
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


//tests

if (typeof describe === 'function') {

  describe('towersOfHanoi()', () => {
    it('should count the number of moves', () => {
      assert.equal(checkMoveCounter('15'), "great job");
      assert.equal(checkMoveCounter('17'), undefined)
      assert.equal(checkMoveCounter('20'), undefined);
    });
    it('should check to see if the input is valid', () => {
      assert.equal(isItLegal('a', 'b'), "it is a valid input");
      assert.equal(isItLegal('h', 'd'), undefined);
    });
    it('should check if a block was moved', () => {
      assert.equal(movePiece('a', 'c'), "block was moved!");
      assert.equal(movePiece('a', 'c'), undefined);
      assert.equal(movePiece('b', 'a'), undefined);
    });
    it('should check if it completes a turn', () => {
      assert.equal(towersOfHanoi('a', 'b'), "Next Move");
      assert.equal(towersOfHanoi('a', 'c'), "Next Move");
      assert.equal(towersOfHanoi('b', 'c'), "Next Move");
    });
  });
} else {

  getPrompt();

}
