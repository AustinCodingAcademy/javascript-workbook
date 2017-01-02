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
var acceptableanswers = [0, 1, 2];
var turnCounter = 1;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function reset() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
 playerTurn = 'X';
 stopGame = false;
}



function horizontalWin() {
return (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
       (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
       (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);
}

function verticalWin() {
return (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
       (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
       (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn);
}

function diagonalWin() {
return  (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
        (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn);
      }

function checkForWin() {
if (horizontalWin() || verticalWin() || diagonalWin()) {
 console.log('Player ' + playerTurn + ' won!');
stopGame = true;
return true;
  }
}
function checkForTie() {
  if (turnCounter === 9) {
    console.log('It is a tie!');
    stopGame = true;
    return true;
  }
}

function ticTacToe(row, column) {
  row = parseInt(row);
  column = parseInt(column);
if (acceptableanswers.indexOf (row) < 0 || acceptableanswers.indexOf (column) < 0) {
  console.log ("Invalid input, please try again.");
} else if (board[row][column] === ' ') {
board [row][column] = playerTurn;
checkForWin();
checkForTie();
playerTurn = (playerTurn === 'X')? 'O' : 'X';
turnCounter++;
} else {
  console.log ("That spot is taken.");
}
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      if (!stopGame) {
      getPrompt();
    }else{
      reset();
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
