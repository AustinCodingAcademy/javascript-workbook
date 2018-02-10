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

  // if isLegal, proceed otherwise exit


  // if it is, pop it
  // push it to the end of the destination array
  // call the checkForWin
}

function stackTest(startStack, endStack) {
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

// if ((startStack === 'b' && endStack === 'c') && ((stacks.b[stacks.b.length - 1]) < (stacks.c[stacks.c.length - 1]))   ){
//   pieceTest = true;
// } else if ((startStack === 'b' && endStack === 'a') && ((stacks.b[stacks.b.length - 1]) < (stacks.a[stacks.a.length - 1]))) {
//   pieceTest = true;
// } else if ((startStack === 'a' && endStack === 'b') && ((stacks.a[stacks.a.length - 1]) < (stacks.b[stacks.b.length - 1]))) {
//   pieceTest = true;
// } else if ((startStack === 'a' && endStack === 'c') && ((stacks.a[stacks.a.length - 1]) < (stacks.c[stacks.c.length - 1]))) {
//   pieceTest = true;
// } else if ((startStack === 'c' && endStack === 'b') && ((stacks.c[stacks.c.length - 1]) < (stacks.b[stacks.b.length - 1]))) {
//   pieceTest = true;
// } else if ((startStack === 'c' && endStack === 'a') && ((stacks.c[stacks.c.length - 1]) < (stacks.a[stacks.a.length - 1]))) {
//   pieceTest = true;
// }

// if ((stackTest === true) && (pieceTest === true)) {
//   console.log('isLegal')
//   return true;
// }









// check to make sure start stack is a, b, or c
// check to make sure that there is a piece to be moved
// check to make sure there is a piece to movePiece
// check to make sure the piece to be moved is less than the last piece in the destination array

function checkForWin() {
  if (stacks.c.length === 4){
    return true;
  }else{
    return false;
  }

  // Is the length of array c === 4?
  // If yes, true, if no, false

}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) { // if isLegal is true then movePiece
    // movePiece(startStack, endStack)
    movePiece(startStack, endStack)
  } else {
    return 'Illegal Move'
  }if (checkForWin()){
    console.log('winner winner chicken dinner')
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
