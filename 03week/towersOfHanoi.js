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
  if((startStack === "a" || startStack === "b" || startStack === "c") &&
     (endStack === "a" || endStack === "b" || endStack === "c")){
    return true
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
      return true
  }
}

//the checkMoveCounter function references the moveCounter variable at the end of the game when it is called
// if it is less than or equal to 15 (the minimum number of moves possible) it returns true.
const checkMoveCounter = (moveCounter) => {
  if(moveCounter <= 15){
    return true
  }else{
    return false
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
      }else return false
    }
  }
}

//the checkForWin function calls the compareWinningArrays function and checkMoveCounter function
//to check for a winning score.
const checkForWin = (startStack, endStack) => {
  let finalArray = stacks[endStack].valueOf()
  let winningArray = [4, 3, 2, 1]
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
    if(movePiece(startStack, endStack)){
      if(checkForWin(startStack, endStack)){
        return console.log("Congratulations you win!")
      }
      else console.log("Next Move") + printStacks()
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
