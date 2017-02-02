'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var playerTurn = 'X';
var playerO = 0;
var playerX = 0;
var tie = 0;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  } else {
    return false;
  }
}

function verticalWin() {
  if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  } else {
    return false;
  }
}

function diagonalWin() {
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
    return true;
  } else {
    return false;
  }
}

function checkTie() {
  var i = 0;
  if (board[0][0] !== ' ' && board[0][1] !== ' ' && board[0][2] !== ' ' && board[1][0] !== ' ' && board[1][1] !== ' ' && board[1][2] !== ' ' && board[2][0] !== ' ' && board[2][1] !== ' ' && board[2][2] !== ' ') {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  if (checkTie()) {
    tie++;
    console.log('It is a tie! Resetting Board. Changing player.');
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    console.log('Current score- X: ' + playerX + '   O: ' + playerO + '   Tie: ' + tie);
    return true;
  }
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log('Player ' + playerTurn + ' wins! Resetting Board.');
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    if (playerTurn === 'X') {
      playerX++;
    } else {
      playerO++;
    }
    console.log('Current score X: ' + playerX + '   O: ' + playerO + '   Tie: ' + tie);
    return true;
  }

}

function changePlayer() {
  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
}

function ticTacToe(row, column) {
  if (!(row == 0 || row == 1 || row == 2) || !(column == 0 || column == 1 || column == 2)) {
    console.log('Invalid entry, please try again')
    return;
  }
  if (board[row][column] !== ' ') {
    console.log('That spot appears taken, please try again');
    return;
  } else {
    board[row][column] = playerTurn;
  }
  checkForWin();
  changePlayer();
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



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', function () {
    it('should place mark on the board', function () {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', function () {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', function () {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function () {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function () {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function () {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}