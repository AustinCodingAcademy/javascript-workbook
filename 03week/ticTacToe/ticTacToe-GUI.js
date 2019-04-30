'use strict';

// alert("JS IS SO HARD");


let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function horizontalWin() {
  // All possible horizontal wins
  if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') {
    alert("X WINS!");
  } else if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') {
    alert("O WINS!");
  } else if (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') {
    alert("X WINS!");
  } else if (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') {
    alert("O WINS!");
  } else if (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') {
    alert("X WINS!");
  } else if (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') {
    alert("O WINS!");
  }
  return true;
}

function verticalWin() {
  // All possible vertical wins
  if (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') {
    alert("X WINS!");
  } else if (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') {
    alert("O WINS!");
  } else if (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') {
    alert("X WINS!");
  } else if (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
    alert("O WINS!");
  } else if (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') {
    alert("X WINS!");
  } else if (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') {
    alert("O WINS!");
  }
  return true;
}


function diagonalWin() {
  // All possible diagonal wins
  if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
    alert("X WINS!");
  } else if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
    alert("O WINS!");
  } else if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
    alert("X WINS!");
  } else if (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
    alert("O WINS!");
  }
  return true;
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
  return true;
}

function ticTacToe(row, column) {
  if (board[row][column] === ' ') {
    switch (playerTurn) {
    case 'X': 
      board[row][column] = playerTurn;
      let letterX = document.getElementById('s'+row+column);
      letterX.innerHTML = 'X';
      checkForWin();
      playerTurn = 'O';
      break;
    case 'O':
      board[row][column] = playerTurn;
      let letterO = document.getElementById('s'+row+column);
      letterO.innerHTML = 'O';
      checkForWin();
      playerTurn = 'X';
      break;
    }
  } else {
    ticTacToe();
  }
}
