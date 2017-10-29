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
};

function movePiece(startStack, endStack) {

};

//if the move is legal, then run this function
function isLegal(startStack, endStack) {
  let storePopped = stacks[startStack].pop();
  stacks[endStack].push(storePopped);
  return checkForWin();

}


//check for all 4 items in the C stack
function checkForWin() {
  if (stacks.c.length === 1) {
    return 'you win!',
      //Reset game
      rl.question(' Press Enter to reset ', (resetAnswer) => {
        if (resetAnswer === '') {
          stacks = {
            a: [4, 3, 2, 1],
            b: [],
            c: []
          };
          getPrompt();
        }
      })

  }
}

function towersOfHanoi(startStack, endStack) {
  //check for correct inputs, create an array with acceptable inputs and us indexOf
  let checkForExistence = ['a', 'b', 'c']
  if (checkForExistence.indexOf(startStack) != -1 && checkForExistence.indexOf(endStack) != -1) {
    //use .length of arrays to verify a stack is empty
    let startStackLength = stacks[startStack].length;
    let endStackLength = stacks[endStack].length;

    //use .length -1 for get the last value in a stack
    let startStackLastNumber = stacks[startStack][(stacks[startStack].length - 1)];
    let endStackLastNumber = stacks[endStack][(stacks[endStack].length - 1)];

    if (startStackLength === 0) {
      console.log('enter a correct start stack');
    }
    //if start stack is not empty, continue with logic if not then please re-enter starting stack
    if (startStackLength > 0) {
      if (startStackLastNumber < endStackLastNumber || endStackLength === 0) {
        isLegal(startStack, endStack);
      }
    }
  } else {
    console.log('Enter another stack');
  }

};

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
