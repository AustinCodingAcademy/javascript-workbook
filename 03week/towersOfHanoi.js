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

function movePiece(startStack, endStack) {
  return stacks[endStack].push(stacks[startStack].pop());

  //

}

function isLegal() {
  // pop it and push it to the end of the array, then call the checkforwin function.

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  if ((startStack === 'a') && (endStack === 'b' || endStack === 'c')) {
    console.log('stackTest True')
    return true;
  } else if ((startStack === 'b') && (endStack === 'a' || endStack === 'c')) {
    console.log('stackTest True')
    return true;
  } else if ((startStack === 'c') && (endStack === 'a' || endStack === 'b')) {
    console.log('stackTest True')
    return true;
  }
}
const isLegal = (startStack, endStack) => {
  let startTest = stacks[startStack][stacks[startStack].length - 1];
  let endTest = stacks[endStack][stacks[endStack].length - 1];


  if ((startTest < endTest) || (stacks[endStack].length === 0)) {
    return true;
  } else {
    return false;
  }
  // if ((stacks[endStack].length === 0) || (stacks[startStack].length -1) < (stacks[endStack].length -1)){
  //   return true;
  // }else{
  //   console.log('not working');
}


// stackTest(startStack,endStack);
// let pieceTest = false;



// console.log('stack test = ' + stackTest);

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
