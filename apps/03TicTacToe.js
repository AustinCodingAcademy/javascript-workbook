'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

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
  for(var row = 0; row < board.length; row++){
    for(var col = 0; col < board[row].length - 1; col++){
      if(board[row][col] !== board[row][col+1]){
        break;
      }
      if(col === board[row].length - 2){
        return true;
      }
    }
  }
  return false;
}

function verticalWin() {
  // Your code here
  for(var col = 0; col < board[0].length; col++){
    for(var row = 0; row < board.length - 1; row++){
      if(board[row][col] !== board[row + 1][col]){
        break;
      }
      if(row === board.length - 2){
        return true;
      }
    }
  }
  return false;
}

function diagonalWin() {
  // Your code here
  for(var i = 0; i < board.length - 1; i++){
    if(board[i][i] !== board[i + 1][i + 1]){
      break;
    }
    if(i === board.length - 2){
      return true;
    }
  }
  for(var i = 0; i < board.length - 1; i++){
    if(board[board.length - i - 1][board.length - i - 1] !== board[board.length - i - 2][board.length - i - 2]){
      break;
    }
    if(i === board.length - 2){
      return true;
    }
  }
  return false;
}

function checkForWin() {
  // Your code here
  if(horizontalWin() || verticalWin() || diagonalWin()){
    return true;
  }
  return false;
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;
  playerTurn = playerTurn === "X" ? "O" : "X";
}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    prompt.get(['row', 'column'], function (error, result) {
        ticTacToe(result['row'], result['column']);
        getPrompt();
    });
}



// Tests

if (typeof describe !== 'undefined') {

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
