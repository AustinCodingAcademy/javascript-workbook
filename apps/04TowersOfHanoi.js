'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks = {
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

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  //starttack and endstack variable will have whatever user typed in
  //endstack is a variable that has the string 
  //      word of what the user typed in
  var tower1 = ["piece1","piece2",'piece3'];
  var tower2 = [];
  var tower3 = [];
  // variable to store what got popped
  var garbonzobeans = null;
  if(startStack === "tower1"){
    //it pops off the last piece and it goes no where at the moment
   garbonzobeans = tower1.pop();

   //this is hard coded to tower 2 every time, no bueno
   //endStack.push(garbonzobeans);
   
   if("tower2" === endStack){
    tower2.push(garbonzobeans);
   }else if("tower3" === endStack){
     tower3.push(garbonzobeans);
   }


  }
  else if(startStack === "tower2"){

   garbonzobeans = tower2.pop();
     
   if("tower2" === endStack){
    tower2.push(garbonzobeans);
   }else if("tower3" === endStack){
     tower3.push(garbonzobeans);
   }
  }
  else if(startStack === "tower3"){

   garbonzobeans = tower3.pop();
     
   if("tower2" === endStack){
    tower2.push(garbonzobeans);
   }else if("tower3" === endStack){
     tower3.push(garbonzobeans);
   }
  }
  









}

function getPrompt() {
  printStacks();
  //answer could be tower1, tower2 or tower3
  rl.question('from which tower do you want to move, tower1, tower2, tower3: ', (startStack) => {
    //answer could be tower1, tower2 or tower3
    rl.question('where do you want to move it to: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();


