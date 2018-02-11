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
  if (startStack === 'a' && endStack === 'b') {
    let movedPiece = stacks.a.shift();
    stacks.b.unshift(movedPiece)
    return stacks //is this the right return?
  } else if (startStack === 'a' && endStack === 'c') {
      let movedPiece = stacks.a.shift();
      stacks.c.unshift(movedPiece)
      return stacks //is this the right return?
  } else if (startStack === 'b' && endStack === 'a') {
      let movedPiece = stacks.b.shift();
      stacks.a.unshift(movedPiece)
      return stacks //is this the right return?
  } else if (startStack === 'b' && endStack === 'c') {
      let movedPiece = stacks.b.shift();
      stacks.c.unshift(movedPiece)
      return stacks //is this the right return?
  } else if (startStack === 'c' && endStack === 'a') {
      let movedPiece = stacks.c.shift();
      stacks.a.unshift(movedPiece)
      return stacks //is this the right return?
  } else  if (startStack === 'c' && endStack === 'b') {
      let movedPiece = stacks.c.shift();
      stacks.b.unshift(movedPiece)
      return stacks //is this the right return?
  }

  // Your code here
  //should pop last piece
  //unshift that piece onto new tower

}

function isLegal() {
  if (endStack.length === 0) {
    return true
  } else if (startStack[0] > endStack[0]){
    return false
  } else {
    return true
  }

  // Your code here
  //if user tried to move from a to b but piece moved is bigger than piece on b, then move is not legal
  //if piece on stack and if currentPiece > piece on stack, then move is illegal
  //if stack empty or piece on stack is > than currentPiece, then move is legal
}

function checkForWin() {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)){
    return "congrats on winning this totally fun game"
  } //close if
} //close checkForWin

function towersOfHanoi(startStack, endStack) {
  if (isLegal === true) {
    movePiece(startStack, endStack)
  }
  // Your code here
  //future test: TowersOfHanoi(a,c) should move the top piece from column a, to column c
  //future test: TowersOfHanoi(b,c) should move the top piece from column b, to column c
}
towersOfHanoi()

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
