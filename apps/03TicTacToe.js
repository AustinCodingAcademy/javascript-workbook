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

function horizontalWin() {
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
  (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
  (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)){
    return true;
  }
}

function verticalWin() {
  if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
  (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
  (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)){
    return true;
  }
}

function diagonalWin() {
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
  (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)){
    return true;
  }
}

function checkForWin() {
  if ((horizontalWin() || verticalWin() || diagonalWin()) === true ){
    console.log('Player ' + playerTurn + ' Won!');
    startOver();
    return true;
  }
}

function togglePlayerTurn() {
  var playerOne = 'O';
  var playerTwo = 'X';
  playerTurn = (playerTurn === playerOne) ? playerTwo : playerOne;
}

function ticTacToe(row, column) {
  var validMoves = [0,1,2];
  if ((row in validMoves) && (column in validMoves)) {
    if (board[row][column]!== ' ') {
    console.log('Not a valid move! Spot already taken!');
  }
    else {
      board[row][column] = playerTurn;
      checkForWin();
      togglePlayerTurn();
    }
  }
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

function startOver() {
  board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']];
  return board;
}

// function checkIfPiece() {
//   if ( !== 0,1,2) {
//     return console.log('Not a valid turn. Choose "X" or "O".');
//   }
//   if ( !== 0,1,2) {
//     return console.log('Not a valid turn. Choose "X" or "O".');
//   }
// }

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
