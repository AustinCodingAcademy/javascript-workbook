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
  // Your code here
  return ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
  (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
  (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn));
}

function verticalWin() {
  // Your code here
  return ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
  (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
  (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn));
}

function diagonalWin() {
  // Your code here
  return ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
  (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn));
}

function checkForWin() {
  // Your code here
  return ( (horizontalWin()) || (verticalWin()) || (diagonalWin()) );
}

function ticTacToe(row, column) {
  // Your code here
  if (board[row][column] != ' ' ) {
    console.log('Square has already been played!');
    console.log('Player ' + playerTurn + ' Go Again!');
  } else {
      board[row][column] = playerTurn;
      if (checkForWin() != true ) {
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        getPrompt();
    } else {
      console.log('Player ' + playerTurn + ' Wins!!!!');
      rl.question('Would you like to play again? Yes or No: ' , (playAgain) => {
        if (playAgain === 'Yes') {
          board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
          ]; 
          getPrompt();
        }
      });
    }
  }
}
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
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
