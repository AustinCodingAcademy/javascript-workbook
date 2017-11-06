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
  let myMove = stacks[startStack].pop();
  stacks[endStack].push(myMove);
}

function isLegal(startStack, endStack) {
  let startTest = stacks[startStack][stacks[startStack].length - 1];
  let endTest = stacks[endStack][stacks[endStack].length - 1];

  if ((startTest < endTest) || (stacks[endStack].length == 0)){
    return true;
  } else {
    return false;
  }

}

function checkForWin() {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    console.log('YOU WIN!');
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    return true;
  } else {
    return false;
  };
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    return console.log('Invalid move. You can only move a smaller piece on top of a larger piece, or to an empty stack.');
  };

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
