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
  return ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn));
}

function verticalWin() {
  return ((board[0][0]=== playerTurn && board[1][0]=== playerTurn && board[2][0]=== playerTurn) || (board [0][1]=== playerTurn && board [1][1]=== playerTurn && board[2][1]=== playerTurn) || (board[0][2]=== playerTurn && board [1][2]=== playerTurn && board[2][2]=== playerTurn));
}

function diagonalWin() {
  return ((board[0][0]=== playerTurn && board[1][1]=== playerTurn && board[2][2]=== playerTurn) ||  (board[0][2]=== playerTurn && board[1][1]=== playerTurn && board[2][0]=== playerTurn));
}

function checkForWin() {
  var win = horizontalWin() || verticalWin() || diagonalWin();
    if (win) {
      printBoard();
      console.log ('Player' + playerTurn + 'Won!');
      clearBoard();
    }
    return win;
}

function clearBoard(){
  board= [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
return board;
}



function ticTacToe(row, column) {
  if(board[row][column] ==='X' || board[row][column] === 'O'){
    console.log('INVALID');
  }
  else {
    board[row][column] = playerTurn;
    if(checkForWin()) {
      console.log("You won, Now start the next game!");
    }
    else {
      playerTurn = (playerTurn === 'X')? 'O' : 'X';
    }
  }

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
