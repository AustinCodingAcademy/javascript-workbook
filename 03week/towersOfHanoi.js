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
// this function
function movePiece(startStack,endStack) {
  // Your code here

  let o = stacks[startStack]
  let p = o.pop()
  let a = stacks[endStack]
    a.push(p)



}
/* this function basically sets the t variable to stacks[startstack]
 which will allow the letter that is passed in to be set to the startstack equal to t,
then the the the length of the stack -1 is set to y because it selects the last object in that array
it then checks if the value of the object you are trying to move is larger than the object that already in the place
that you are trying to move it, or if the location you are trying to move it to is empty if you have made an incorrect move,
it console.logs a message
*/
function isLegal(startStack,endStack) {
  // Your code here
  let t = stacks[startStack]
  let y= t[t.length-1]
  let u =stacks[endStack]
  let i = u[u.length-1]
  //console.log(i)
//console.log(' i am after endstackslast number ')
 if (y< i || i==undefined){
   return true
 } else{
   console.log('this is an incorrect move')
   return false
 }
}
// this function checks if the c array is equal to 4, if it is, it console.logs that you have won!
function checkForWin() {
  // Your code here
  if (stacks['c'].length === 4){
    console.log('you win!')
    return true
  }

}
/*this function calls the islegal function, with the two arguments that the user has passed in
and checks if the move is legal, then if it is legal it calls the movepiece function which moves the pieces
finally it checks the checkForWin function to see if you have
*/
function towersOfHanoi(startStack, endStack) {
  // Your code here
  if(isLegal(startStack,endStack)){
    movePiece(startStack,endStack)
    checkForWin()
  }

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
