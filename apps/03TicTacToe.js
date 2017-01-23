'use strict';

// Optional: Do 'npm install clear' and uncomment the following line if you want to clear the screen
// var clear = require('clear');   // clearing the terminal screen
// Note: clear() is used in function resetScreen();

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

// Displays the screen on the console
function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// Check for a horizontal row of the same marks
function horizontalWin() {
  if (
  // Top horizontal row
  (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || 
  // Middle horizontal row
  (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
  // Bottom horizontal row
  (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)
  ) {
    return true;
  }
}

// Check for a vertical column of the same marks
function verticalWin() {
  if (
  // Left vertical column
  (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || 
  // Middle vertical column
  (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
  // Right vertical column
  (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)
  ) {
    return true;
  }
}

// Check for a diagonal line of the same marks
function diagonalWin() {
  if (
  // Diagonal 1 (negative slope)
  (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || 
  // Diagonal 2 (positive slope)
  (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn)
  ) {
    return true;
  }
}

// Checks for any type of win
function checkForWin() {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    console.log("Player " + playerTurn + " Won!");
    resetScreen();
    return true;
  }
}

// Resets the screen to its initial state
function resetScreen() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  // Uncomment this line if you are using 'require('clear');' at the top of the program
  // clear();   // clears the screen
  // The loser starts the next game, so don't do anything
}

// Main program to fill in the values
function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  checkForWin();
  (playerTurn === 'X') ? playerTurn = 'O' : playerTurn = 'X';
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
