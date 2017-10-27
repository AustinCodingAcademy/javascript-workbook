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

// let pieceStart = stacks.startStack[(stacks.a.length) - 1];
// let pieceEnd = stacks.startStack[(stacks.a.length) - 1];

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  // target last number in array column

}

function isLegal() {
  // Your code here
  if(lastInStartStack < lastInEndStack){
    console.log('ok to move');
  }

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
console.log(startStack);
console.log(stacks.a);
  console.log(stacks[startStack][stacks.startStack.length]);


  // let pieceEnd = stacks.startStack[(stacks.a.length) - 1];
//
// movePiece(startStack, endStack);
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
