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
}

function horizontalWin() {
  // Your code here

  for (let i = 0 ; i < board.length ; i++) {
    if (
      board[i][0] === playerTurn &&
      board[i][1] === playerTurn &&
      board[i][2] === playerTurn
      ) {
      return true
    } 
  }
}

function verticalWin() {
  // Your code here
  // board[0][1] board[1][1] board[2][1]
  for(let i = 0 ; i < board.length ; i++) {
    if (
      board[0][i] === playerTurn && 
      board[1][i] === playerTurn && 
      board[2][i] === playerTurn
    ) {
      return true;
    }
  }
}

function diagonalWin() {
  // Your code here
  if(
    board[0][0] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][2] === playerTurn
  ) {
    return true
  } else if (
    board[0][3] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][0] === playerTurn
  ) {
    return true;
  } else {
    return false;
  }

}

function checkForWin() {
  // Your code here
  if( verticalWin || horizontalWin || diagonalWin ) {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;
  (playerTurn === 'X') ? playerTurn = 'O' : playerTurn = 'X';
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}


