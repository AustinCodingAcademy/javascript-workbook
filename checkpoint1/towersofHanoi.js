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
  c: [],
  arr1:[],
  arr2:[]
};



function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  console.log('start: ', stacks[startStack]);
  // Your code here
  // Here I get the start stack and end stack.
  // Check to see if the start stack has atleast one element
  // If not print "Array Empty"
  // Check to see if the move is legal
  // If not legal print Invalid move
  // If all the conditions satisfy pop the element from startStack and push it in the endStack.
 // let arrayLength = stacks.a.length;
  if(stacks[startStack].length >= 1) {
      if(!(isLegal(startStack, endStack))) {
         return console.log("Invalid move");
      }
      stacks[endStack].push(stacks[startStack].pop());
      checkForWin();
      return;
  }
  else {
          console.log("Array empty");
          return;
  } 
}

function isLegal(startStack, endStack) {
    if(stacks[endStack].length == 0) 
    return true;
    if(stacks[startStack].slice(-1) > stacks[endStack].slice(-1)) {
         return false;
    }
    return true;
  }
   

function checkForWin() {

  console.log("length of array c" +stacks.c.length);
  if(stacks.c.length == 4) {
    console.log("You made it");
    return true;
  }
  else
  return false;
  // if(stacks.c.length >= 4) {
  //   console.log(stacks.c.length);
  //   for (let i = 0; i < stacks.c.length -1; i++) {
  //     if(stacks.c[i] > stacks.c[i + 1])
  //     counter++;
  //   }
  //   if(counter >= 4) {
  //    
  //     return true;
  //   }
  //   return false;
  // }
 
}  // Your code here



function towersOfHanoi(startStack, endStack) {
  // Your code here
  movePiece(startStack, endStack);

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