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
   if(
   (board[0][0] === playerTurn && board [0][1] === playerTurn && board[0][2] === playerTurn) ||
   (board[1][0] === playerTurn && board [1][1] === playerTurn && board[1][2] === playerTurn) ||
   (board[2][0] === playerTurn && board [2][1] === playerTurn && board[2][2] === playerTurn)
){
console.log("hor win\n");
   return true;}
else {
   console.log("hor not win\n");
   return false;
}
}

function verticalWin() {
   if (
   (board[0][0] === playerTurn && board [1][0] === playerTurn && board[2][0] === playerTurn) ||
   (board[0][1] === playerTurn && board [1][1] === playerTurn && board[2][1] === playerTurn) ||
   (board[0][2] === playerTurn && board [1][2] === playerTurn && board[2][2] === playerTurn)
){
console.log("ver win\n");
   return true;}
   else {
      console.log("ver not win\n");
      return false;
   }
}

function diagonalWin() {
   if (
   (board[0][0] === playerTurn && board [1][1] === playerTurn && board[2][2] === playerTurn) ||
   (board[0][2] === playerTurn && board [1][1] === playerTurn && board[2][0] === playerTurn)
) {
console.log("diag win\n");
   return true;}
   else {
      console.log("diag not win\n");
      return false;
   }
}

function checkForWin() {
    if (
      (verticalWin() === true) ||
    (diagonalWin() === true) ||
    (horizontalWin() === true)
       ) {
      console.log('Player' + playerTurn + 'Won!');
      return true;
   }
   else {
      return false;
   }
}

function ticTacToe(row, column) {
   board [row][column]=playerTurn;
   checkForWin();
    playerTurn = (playerTurn === 'X')? 'O' : 'X';
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
