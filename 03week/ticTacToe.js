'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let board = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ];

// let board = [];
// let playerTurn = 'X';

let players=[];
let markers=["X", "O"];
let players[0]= "";
let players[1]= "";
let

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // horizontal w
  let winArrH = board[0][0];
  if ((board[0][0] == playerTurn && board[0][1] == playerTurn && board[0][2] == playerTurn) || (board[1][0] == playerTurn && board[1][1] == playerTurn && board[1][2] == playerTurn) || (board[2][0] == playerTurn && board[2][1] == playerTurn && board[2][2] == playerTurn)) {
    return true;
  }
}

function verticalWin() {
  // vertical w
  let winArrV = board[0][0];
  if ((board[0][0] == playerTurn && board[1][0] == playerTurn && board[2][0] == playerTurn) || (board[0][1] == playerTurn && board[1][1] == playerTurn && board[2][1] == playerTurn) || (board[0][2] == playerTurn && board[1][2] == playerTurn && board[2][2] == playerTurn)) {
    return true;
  }
}

function diagonalWin() {
  // diagonal w
  let winArrD = board[0][0];
  if ((board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) || (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn)) {
    return true;
  }
}

function checkForWin() {
  // win
  if (horizontalWin()) {
    return true;
  } else if (verticalWin()){
    return true;
  } else if (diagonalWin()){
    return true;
  }
}

function play(clickedDiv) {
  clickedDiv.innerHTML = "<span>O</span>";
  // Your code here
  // if (playerTurn === "X") {
  //   board[row][column] = playerTurn;
  //   playerTurn = "O";

  // } else if (playerTurn === "O") {
  //   board[row][column] = playerTurn;
  //   playerTurn = "X";
  // }
}

function togglePlayer() {

}

// function getPrompt() {
//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(row, column);
//       getPrompt();
//     });
//   });

// }



// Tests

// if (typeof describe === 'function') {

//   describe('#ticTacToe()', () => {
//     it('should place mark on the board', () => {
//       ticTacToe(1, 1);
//       assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should alternate between players', () => {
//       ticTacToe(0, 0);
//       assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should check for vertical wins', () => {
//       board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
//       assert.equal(verticalWin(), true);
//     });
//     it('should check for horizontal wins', () => {
//       board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
//       assert.equal(horizontalWin(), true);
//     });
//     it('should check for diagonal wins', () => {
//       board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
//       assert.equal(diagonalWin(), true);
//     });
//     it('should detect a win', () => {
//       assert.equal(checkForWin(), true);
//     });
//   });
// } else {

//   getPrompt();

// }
