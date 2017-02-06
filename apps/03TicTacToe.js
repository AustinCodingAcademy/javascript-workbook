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
//starting a new game after a win
function newGame() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
}

//finding a horizontal win from players
function horizontalWin() {
  if((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
  (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || 
  (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  }
}
//finding vertical win from players
function verticalWin() {
  if((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
  (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || 
  (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  }
}
//finding diagonal win from players
function diagonalWin() {
  if((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
  (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
    return true;
  }
}
//checking if a player has won
function checkForWin() {
  if(horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
    console.log("Player " + playerTurn + " is the winner!");
    
    newGame();
    return true;
  }
}

function ticTacToe(row, column) {
  // checks for invalid input
  if(row > 2 || isNaN(row)) {
    console.log("Invalid input.");
    return false;
  } else if(column > 2 || isNaN(column)) {
    console.log("Invalid input.");
    return false;
  }

  //Can't select space that's already been marked
  if(board[row][column] !== ' ') {
    console.log("Place has already been marked. Try again.");
    return true;
  }

  board[row][column] = playerTurn;
  checkForWin();
  //switches between players
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';

  
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
