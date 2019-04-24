'use strict';

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
let winner = false;

function horizontalWin() {
  board.forEach((row) => {
    if (row[0] === playerTurn && row[1] === playerTurn && row[2] === playerTurn) {
      winner = true;
    }
  })
  return winner;
}

function verticalWin() {

  for (let i = 0; i < 3; i++) {
    if (board[0][i] === playerTurn && board[1][i] === playerTurn && board[2][i] === playerTurn) {
      winner = true;
    }
  }
  return winner;
}

function diagonalWin() {
  if (
    (board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) ||
    (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn)
  ) {
    winner = true;
    return winner;
  }
  else return winner;
}

function checkForWin() {
  if (horizontalWin()) {
    return true;
  } else if (verticalWin()) {
    return true;
  } else if (diagonalWin()) {
    return true;
  }
}

function ticTacToe(row, column, box) {
  document.getElementById("message").innerText = 'PLAYER ' + playerTurn + ' TURNS';
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
    box.innerText = playerTurn;
    if (checkForWin()) {
      document.getElementById("message").innerText = 'PLAYER ' + playerTurn + ' WINS! START NEW GAME?';
    }
    else {
      if (playerTurn === 'X') {
        playerTurn = '0';
      } else {
        playerTurn = 'X';
      }
    }
  } else {
    document.getElementById("message").innerText = 'PICK ANOTHER BOX, THIS SPOT HAS BEEN TAKEN!!!';
  }
  return playerTurn;
}