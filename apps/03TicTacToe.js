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
var counter = 1;

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
  if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn){
    return true;
  }
  if (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn){
    return true;
  }
  if (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn){
    return true;
  }
}

function verticalWin() {
  // Your code here
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn){
    return true;
  }
  if (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn){
    return true;
  }
  if (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn){
    return true;
  }
}

function diagonalWin() {
  // Your code here
  if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn){
    return true;
  }
  if (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn){
    return true;
  }
}

function checkForWin() {
  // Your code here
  if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true){
    console.log("Player "+playerTurn+" wins!");
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    playerTurn = (playerTurn === 'X') ? 'O' : 'O';
    return true;
  }
}

function checkForTie() {
  if (counter === 9){
    console.log("It's a tie!");
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    playerTurn = (playerTurn === 'X') ? 'O' : 'O';
    return true;
  }
}


function ticTacToe(row, column) {
  if (row !== '0' && row !== '1' && row !== '2') {
    console.log("Invalid input! Row not recognized.");
    return false;
  }
  if (column !== '0' && column !== '1' && column !== '2') {
    console.log("Invalid input! Column not recognized.");
    return false;
  }
  if (board[row][column] !== " "){
    console.log("Invalid input! Spot taken.");
    return false;
  }
  board[row][column] = playerTurn;
  checkForWin();
  checkForTie();
  counter++;
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';




  // Your code here
  //puts the x or o in the array
  //checks for a win
  //change whose turn it is
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
