'use strict';


var assert = require('assert');
var prompt = require('prompt');
prompt.start();

// var valid = 0 || 1 || 2;
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
    // how to make the array selection slimmer?
    // this format simply spits out a winning result into the top level
    return playerTurn === board[0][0] &&
        playerTurn === board[0][1] &&
        playerTurn === board[0][2] ||
        playerTurn === board[1][0] &&
        playerTurn === board[1][1] &&
        playerTurn === board[1][2] ||
        playerTurn === board[2][0] &&
        playerTurn === board[2][1] &&
        playerTurn === board[2][2];
}

function verticalWin() {
    return playerTurn === board[0][0] &&
        playerTurn === board[1][0] &&
        playerTurn === board[2][0] ||
        playerTurn === board[0][1] &&
        playerTurn === board[1][1] &&
        playerTurn === board[2][1] ||
        playerTurn === board[0][2] &&
        playerTurn === board[1][2] &&
        playerTurn === board[2][2];
}

function diagonalWin() {
    return playerTurn === board[0][0] &&
        playerTurn === board[1][1] &&
        playerTurn === board[2][2] ||
        playerTurn === board[0][2] &&
        playerTurn === board[1][1] &&
        playerTurn === board[2][0];

}

function ticTacToe(row, column) {
    board[row][column] = playerTurn;
    checkForWin();
    if (checkForWin()) {
        playAgain();
    } else {
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        getPrompt();
    }
}

function checkForWin() {
    var win = (horizontalWin() || verticalWin() || diagonalWin());
    if (win) {
        console.log(playerTurn + " " + "is the winner!");
        return true;
    }

}

function playAgain() {
    if (checkForWin() === true) {
        console.log("Would you like to play again?");
        prompt.get(['y / n'], function(error, result) {
            if (result['y / n'] === 'y') {
                getPrompt();
            } else {
                console.log("thanks for playing!");
                process.exit();
            }
        });
    }
}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    prompt.get(['row', 'column'], function(error, result) {
        // ticTacToe(result['row'], result['column']);
        // getPrompt();

        if ((result['row', 'column'] > 2) || (result['row', 'column'].length > 1)) {
            console.log("Please enter a valid input");
            getPrompt();
        } else {
            ticTacToe(result['row'], result['column']);
        }
    });
}



// Tests

if (typeof describe !== 'undefined') {

    describe('#ticTacToe()', function() {
        it('should place mark on the board', function() {
            ticTacToe(1, 1);
            assert.deepEqual(board, [
                [' ', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should alternate between players', function() {
            ticTacToe(0, 0);
            assert.deepEqual(board, [
                ['O', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should check for vertical wins', function() {
            board = [
                [' ', 'X', ' '],
                [' ', 'X', ' '],
                [' ', 'X', ' ']
            ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', function() {
            board = [
                ['X', 'X', 'X'],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', function() {
            board = [
                ['X', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', 'X']
            ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', function() {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
