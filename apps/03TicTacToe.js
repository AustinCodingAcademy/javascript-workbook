'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


var board = [
    ['-', '--', '-'],
    ['--', '-', '--'],
    ['--', '-', '--']
];

var playerTurn = 'X';


function togglePlayer() {
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    if ( (board[0][0] === board[0][1] && board[0][0] === board[0][2]) || (board[1][0] === board[1][1] && board[1][0] ===board[1][2]) || (board[2][0] === board[2][1] && board[2][2] === board[2][1]) ) 
       {return true;}
}

function verticalWin() {
    if ( (board[0][0] === board[1][0] && board[1][0] === board[2][0]) || (board[0][1] === board[1][1] && board[0][1] === board[2][1]) || (board[0][2] === board[1][2] && board[0][2] === board[2][2]) )
       {return true;}
}

function diagonalWin() {
    if ( (board[0][0] === board[1][1] && board[0][0] === board[2][2]) || (board[0][2] === board[1][1] && board[0][2] === board[2][0]) )
       {return true;}
}


function checkForWin() {
    if( diagonalWin() === true || verticalWin() === true || horizontalWin() === true )
      {return true;}



}


function ticTacToe(row, column) {
    board[row][column] = playerTurn;

    if (checkForWin() === true){
    console.log("Player " + playerTurn +  " wins!");
    }

    togglePlayer();



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
            assert.deepEqual(board, [ ['-', '--', '-'], ['--', 'X', '--'], ['--', '-', '--'] ]);
        });
        it('should alternate between players', function () {
            ticTacToe(0, 0);
            assert.deepEqual(board, [ ['O', '--', '-'], ['--', 'X', '--'], ['--', '-', '--'] ]);
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
