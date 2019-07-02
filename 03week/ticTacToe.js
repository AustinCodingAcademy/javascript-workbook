'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
};


//for playerWins refer to 26:37 on hackOverflow if this doesn't work

function horizontalWin() {
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)){
    return true;
  } else {
    return false;
  };
};

function verticalWin() {
  if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)){
    return true;
  } else {
    return false;
  };
};

function diagonalWin() {
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0]) === playerTurn){
    return true;
  } else {
    return false;
  };
};

function checkForWin() {
  if (horizontalWin() == true || verticalWin() == true || diagonalWin() == true){
    return 'Player ' + playerTurn + ' Won!'
  };
};

function playerInput (row, column){
  // if (row === 0 && column === 0){
  //   board[0][0] = playerTurn;
  //   return;
  // };

  //   if (row === 1 && column === 0){
  //   board[1][0] = playerTurn;
  //   return;
  // };

  //   if (row === 2 && column === 0){
  //   board[2][0] = playerTurn;
  //   return;
  // };

  //   if (row === 0 && column === 1){
  //   board[0][1] = playerTurn;
  //   return;
  // };

  //   if (row === 1 && column === 1){
  //   board[1][1] = playerTurn;
  //   return;
  // };

  //   if (row === 2 && column === 1){
  //   board[2][1] = playerTurn;
  //   return;
  // };

  //   if (row === 0 && column === 2){
  //   board[0][2] = playerTurn;
  //   return;
  // };

  //   if (row === 1 && column === 2){
  //   board[1][2] = playerTurn;
  //   return;
  // };

  //   if (row === 2 && column === 2){
  //   board[2][2] = playerTurn;
  //   return;
  // };

//this way is much simpler than what I originally coded. le sigh
  //this if statement needs to check if the player's selection is valid. If the spot on the board does not equal playerTurn already, then it's good. Otherwise, the player shouldn't be allowed to placa a marker there

  if (! board[row][column] === playerTurn) {
    board[row][column] === playerTurn;
  };

};

function ticTacToe(row, column) {
//for each turn, I want the player to input their selection
  playerInput(row,column);
//then I'm going to check for win
  checkForWin();
//next we change player turns
if (playerTurn === 'X') {
  playerTurn = 'O';
} else {
  playerTurn = 'X';
};
  //your code here
};


//to check for validity: DISCUSSION IN CLASS
// first try - if (!board[1][1]){
//   return 'not available';
// } else(board[1][1] = player1){
  
// };

// if (board[row][column] === playerTurn) {
  
// }


//if play is valid, place x or o on the board. Then check for win. then switch player.

//end of notes from discussion with Dinh

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

};

console.log(getPrompt());