'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//array to receive playerTurn values

var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

//variable for mark on the board

var playerTurn = 'X';

//display the board

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//tic tac toe function

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  checkForWin();
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}

// conditions for horizontal win

function horizontalWin() {
  if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn || 
      board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn ||
      board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
      return true;
  }
}

// conditions for vertical win

function verticalWin() {
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn || 
      board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
      board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
      return true;
  }
}

// conditions for diagonal win

function diagonalWin() {
  if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn || 
      board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
      return true;
  }
}

// check for win

function checkForWin() {
  if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
    console.log('Player' + " " + playerTurn + " " + 'Wins!')
    startOver();
    return true;
  };
}

//function to provide a clear board after a winner is found

function startOver() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  return board;
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
