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
var stopGame = false;
var acceptableAnswers = [0, 1, 2];

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
  return  (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
          (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
          (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);
}

function verticalWin() {
  // Your code here
  return  (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
          (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
          (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn);
}

function diagonalWin() {
  // Your code here
  return  (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
          (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn);
}

function checkForWin() {
  // Your code here
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log('Player ' + playerTurn + ' Won!');
    stopGame = true;
    return true;
  }
}

function checkForTie() {
  var isEmpty = false;
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++) {
      isEmpty = (board[i][j] === ' ') ? true : false;
      if (isEmpty) {
        return;
      }
    }
  }
  console.log("It's a tie! Try again!");
  stopGame = true;
}

function ticTacToe(row, column) {
  // Your code here
  row = parseInt(row);
  column = parseInt(column);
  if (acceptableAnswers.indexOf(row) < 0 || acceptableAnswers.indexOf(column) < 0 ) {
    console.log('Use valid input, asshole!');
  } else if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
    checkForWin();
    checkForTie();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  } else {
    console.log('That spot is taken, try again!');
  }

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      if (!stopGame) {getPrompt();}
      else {process.exit();}
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', function () {
    it('should place mark on the board', function () {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', function () {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', function () {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function () {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function () {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function () {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
