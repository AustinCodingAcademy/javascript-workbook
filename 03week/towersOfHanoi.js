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
};

function movePiece(startStack, endStack){
  // target last number in array column
//
//  let endStackLength = stacks[endStack][(stacks[endStack].length

        // if(startStackLength > 0){
        //   let startStackLastNumber = stacks[startStack][(stacks[startStack].length - 1)]
        //   console.log('start stack last value is ' + startStackLastNumber)
        // } else {
        //   return console.log('start stack is empty');
        // }
        //
        // if(stacks[endStack][(stacks[endStack].length > 0){
        //       let endStackLastNumber = stacks[endStack][(stacks[startStack].length - 1)]
        //       return console.log('end stack last value is ' + endStackLastNumber)
        //     } else {
        //       return console.log('end stack is empty')
        //     }
        //
        //

      };

          function isLegal() {
            // Your code here
            if (lastInStartStack < lastInEndStack) {
              console.log('ok to move');
            }

          }

          function checkForWin() {
            // Your code here

          }

          function towersOfHanoi(startStack, endStack) {
            // Your code here

            // target last number in array column
let startStackLength = stacks[startStack].length;
 let endStackLength = stacks[endStack].length;
console.log(startStackLength + '' + endStackLength)
      if(startStackLength > 0){
        let startStackLastNumber = stacks[startStack][(stacks[startStack].length - 1)];
        console.log('start stack last value is ' + startStackLastNumber)
      } else {
        return console.log('start stack is empty');
      }

      if(endStackLength > 0){
            let endStackLastNumber = stacks[endStack][(stacks[startStack].length - 1)];
            return console.log('end stack last value is ' + endStackLastNumber)
          } else {
            return console.log('end stack is empty')
          }
            // let endStackLastNumber = stacks[endStack][(stacks[startStack].length - 1)];
            //
            // let startStackLastNumber = stacks[startStack][(stacks[startStack].length - 1)];
            //
            // console.log(endStackLastNumber)


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
