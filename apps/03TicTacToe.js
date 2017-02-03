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

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
// win conditions
function horizontalWin() {
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
    (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
    (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  }
}

function verticalWin() {
  if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
    (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  }
}

function diagonalWin() {
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
    return true;
  }
}
//win condition check
function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log('Player ' + playerTurn + ' Won!');
    return true;
  }
}
// checking for a full board
function isSpaceAvailable(row, column) {
  return (board[row][column] === ' ');
}

//checking for a tie
function checkForFullBoard() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      if (board[i][j] === ' ') {
        return false;
      }
    }
  }
  console.log('It\'s a tie');
  return true;
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;

  // exit if someone won
  if (checkForWin()) {
    process.exit();
    return;
  }
  // exist if the board is full
  if (checkForFullBoard()) {
    process.exit();
    return;
  }

  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}

//checks for win conditions and if a space is taken while it executes the game
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      if (isSpaceAvailable(row, column)) {
        ticTacToe(row, column);
        getPrompt();
      } else {
        console.log('Square taken, try again');
        getPrompt();
      }
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
    it('should detect a taken square', function () {
      assert.equal(isSpaceAvailable(1, 1), false);
    });
    it('should detect a free square', function () {
      assert.equal(isSpaceAvailable(2, 2), true);
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
    it('should check for a tie', function () {
      board = [
        ['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X']
      ];
      assert.equal(checkForFullBoard(), true);
    });
  });

} else {

  getPrompt();

}
