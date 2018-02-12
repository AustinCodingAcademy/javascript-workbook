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
//  console.log('Towerz of Hannoying')
//  console.log(' -----------------');
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
//  console.log(' -----------------');
}

const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop())
  return stacks
}

const isLegal = (startStack, endStack) => {
  if (stacks[endStack].length === 0 || (stacks[startStack][stacks[startstack.length - 1]] < stacks[endStack][stacks[endStack.length - 1]])) {
    return true
  } else {
    return false
  }
}

const checkForWin = () => {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)){
    return "congrats on winning this totally fun game"
  } //close if
} //close checkForWin

const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)){
     movePiece(startStack, endStack)
      if (checkForWin())
      {printStacks()}
      else {
        towersOfHanoi(startStack, endStack)
      }
   }//close iflegal
}//close towersOfHanoi


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
