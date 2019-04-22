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
let winner = false;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

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
    return true;
  } else if (verticalWin()) {
    console.log('Player ' + playerTurn + ' wins!');
    return true;
  } else if (diagonalWin()) {
    console.log('Player ' + playerTurn + ' wins!');
    return true;
  }
}

function ticTacToe(row, column) {
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
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
    console.log('SPOT TAKEN')
  }
  return playerTurn;
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      try {
        ticTacToe(row, column);
      }
      catch (err) {
        console.log("WHAT DID YOU DO!!!!!! PLEASE ENTER CORRECT VALUE")
      }

      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [[' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [['0', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
    });
    it('should check for vertical wins', () => {
      board = [[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}