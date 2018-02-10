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

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  return stacks[endStack].push(stacks[startStack].pop());

  // if isLegal, proceed otherwise exit


  // if it is, pop it
  // push it to the end of the destination array
  // call the checkForWin
}

const stackTest = (startStack, endStack) => {
  if ((startStack === 'a') && (endStack === 'b' || endStack === 'c')) {
    // console.log('stackTest True')
    return true;
  } else if ((startStack === 'b') && (endStack === 'a' || endStack === 'c')) {
    // console.log('stackTest True')
    return true;
  } else if ((startStack === 'c') && (endStack === 'a' || endStack === 'b')) {
    // console.log('stackTest True')
    return true;
  } else {
    // console.log('invalid selection');
    return false;
  }
}



const isLegal = (startStack, endStack) => {
  if (stackTest(startStack, endStack)) {



    let startTest = stacks[startStack][stacks[startStack].length - 1];
    let endTest = stacks[endStack][stacks[endStack].length - 1];


    if ((startTest < endTest) || (stacks[endStack].length === 0)) {
      return true;
    } else {
      console.log('I-N-V-A-L-I-D S-E-L-E-C-T-I-O-N');
      return false;
    }
  } else {
    console.log('I-N-V-A-L-I-D S-E-L-E-C-T-I-O-N');
    return false;
  }

}











// check to make sure start stack is a, b, or c
// check to make sure that there is a piece to be moved
// check to make sure there is a piece to movePiece
// check to make sure the piece to be moved is less than the last piece in the destination array

const checkForWin = () => {
  if (stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }

  // Is the length of array c === 4?
  // If yes, true, if no, false

}

const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)) { // if isLegal is true then movePiece
    // movePiece(startStack, endStack)
    movePiece(startStack, endStack)
  }
  if (checkForWin()) {
    console.log('winner winner chicken dinner');
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }


  // if checkForWin is true then console.log winner and exit
  // else keep going

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
