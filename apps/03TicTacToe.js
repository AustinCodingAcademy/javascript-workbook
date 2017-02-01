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

function togglePlayerTurn() {
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}

togglePlayerTurn();

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  if (board[0][0,1,2] || board[1][0,1,2] || board[2][0,1,2] === [X,X,X]) {
    return("X wins!");
  }
   else board [0][0,1,2] || board [1][0,1,2] || board [2][0,1,2] === [X,X,X]; {
    return("X wins!");
  }
  
}

function verticalWin() {
   if (board [0,1,2][0] || board[0,1,2][1] || board[0,1,2][2] === [X,X,X]) {
    return("X wins!");
  }
  else board [0,1,2][0] || board [0,1,2][1] || board [0,1,2][2] === [O,O,O]; {
    return("O wins!");
  }
}

function diagonalWin() {
  if (board [0][0] && [1][1] && [0][2] || board [0][2] && [1][1] && [2][0] === [X,X,X]) {
    return("X wins!");
  }
  else board [0][0] && [1][1] && [0][2] || board [0][2] && [1][1] && [2][0] === [O,O,O]; {
    return("O wins!");
  }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return ("Winner winner chicken dinner");
  }
}

function ticTacToe(row, column) {
  // Your code here

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
