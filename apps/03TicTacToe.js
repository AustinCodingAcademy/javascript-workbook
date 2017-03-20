'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var playerTurn = "X";

function horizontalWin() {
  // Your code here
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  // Your code here
}

function ticTacToe(myrow, mycolumn) {
  // Your code here

}





function getPrompt() {
  console.log("It's Player " + playerTurn + "'s turn.");
  function handlInput1(theuserinput){
    rl.question('please enter the column of the board to put your mark on: ', handleInput2);
  }
  function handleInput2(theseconduserinput){
      ticTacToe(row, column);
      getPrompt();
  }

  
  rl.question('please choose the spot on the board to place your mark: ',handlInput1 );

}
getPrompt();
