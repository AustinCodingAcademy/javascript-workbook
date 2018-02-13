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
let moveCounter = 0

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const isItLegal = (startStack, endStack) => {
  if((startStack === "a" || startStack === "b" || startStack === "c") &&
     (endStack === "a" || endStack === "b" || endStack === "c")){
    return true
  }
}

const movePiece = (startStack, endStack) => {
  let blockToBeMoved = stacks[startStack].valueOf()[stacks[startStack].valueOf().length-1]
  let lastBlockOfFutureStack = stacks[endStack].valueOf()[stacks[endStack].valueOf().length-1]
  if((stacks[endStack].length === 0) || (blockToBeMoved < lastBlockOfFutureStack)){
      stacks[endStack].push(stacks[startStack].pop())
      moveCounter ++
      return true
  }
}

const checkMoveCounter = (moveCounter) => {
  if(moveCounter <= 15){
    return true
  }else{
    return false
  }
}

const compareWinningArrays = (finalArray, winningArray) => {
  if(finalArray.length == winningArray.length){
    for(var i = 0 ; i = finalArray.length; i++){
      if(finalArray[i] === winningArray[i]){
          return true;
      }else return false
    }
  }
}


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
//commit
