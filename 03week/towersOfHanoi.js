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


function movePiece() {
  // Your code here

}

function isLegal() {
  // Your code here
  //if user tried to move from a to b but piece moved is bigger than piece on b, then move is not legal
  //if piece on stack and if currentPiece > piece on stack, then move is illegal
  //if stack empty or piece on stack is > than currentPiece, then move is legal
}

function checkForWin() {
  // Your code here
  //if c: [4, 3, 2, 1] then you win
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  //future test: TowersOfHanoi(a,c) should move the top piece from column a, to column c
  //future test: TowersOfHanoi(b,c) should move the top piece from column b, to column c
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

// Write 2 test cases that you will test for
// For Example:
// It should be able to move a block, if I ran towersOfHanoi(‘a’, ‘b’), the stacks would look like { a: [4, 3, 2], b: [1], c: [] }
