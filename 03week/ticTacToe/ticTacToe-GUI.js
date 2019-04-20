'use strict';

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function horizontalWin() {
  // All possible horizontal wins
  let hWin = board[0][0];
  if ((board[0][0] == playerTurn && board[0][1] == playerTurn && board[0][2] == playerTurn) || (board[1][0] == playerTurn && board[1][1] == playerTurn && board[1][2] == playerTurn) || (board[2][0] == playerTurn && board[2][1] == playerTurn && board[2][2] == playerTurn)) {
    return true;
  }
}

function verticalWin() {
  // All possible vertical wins
  let vWin = board[0][0];
  if ((board[0][0] == playerTurn && board[1][0] == playerTurn && board [2][0] == playerTurn) || (board[0][1] == playerTurn && board[1][1] == playerTurn && board [2][1] == playerTurn) || (board [0][2] == playerTurn && board[1][2] == playerTurn && board [2][2] == playerTurn)) {
    return true;
  }
}

function diagonalWin() {
  // All possible diagonal wins
  let dWin = board[0][0]; 
  if ((board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) || (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn)) {
    return true;
  }
}

function checkForWin(move) {
  if (horizontalWin()) {
    return true;
  } else if (verticalWin()) {
    return true;
  } else if (diagonalWin()) {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here
  if (playerTurn === 'X') {
    board[row][column] = playerTurn;
    playerTurn = 'O';
  } else if (playerTurn === 'O') {
    board[row][column] = playerTurn;
    playerTurn = 'X';

  } else {
    return "This is an invalid entry";
  }
}

function getPrompt() {
  printBoard();
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}