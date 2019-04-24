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
    console.log('Player ' + playerTurn + ' wins!');
    document.getElementById("message").innerText = 'Player ' + playerTurn + ' wins!';
    return true;
  } else if (verticalWin()) {
    console.log('Player ' + playerTurn + ' wins!');    
    document.getElementById("message").innerText = 'Player ' + playerTurn + ' wins!';
    return true;
  } else if (diagonalWin()) {
    console.log('Player ' + playerTurn + ' wins!');
    document.getElementById("message").innerText = 'Player ' + playerTurn + ' wins!';
    return true;
  }
}

function ticTacToe(row, column, box) {
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
    box.innerText =playerTurn;
    if (checkForWin())
    {
      console.log("START NEW GAME")
    }
    else {
      if (playerTurn === 'X') {
        playerTurn = '0';
      } else {
        playerTurn = 'X';
      }
    }
  } else {
    console.log('THIS SPOT HAS BEEN TAKEN!!!')
  }
  return playerTurn;
}