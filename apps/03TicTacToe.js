'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


// Needs to keep players from overlapping each other's marks.

// Needs to print "It's a tie!" and restart game if board fills up.

// Needs to restart game if a player wins.

var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var playerTurn = 'X';
var moveCount = 0;

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) {
        return true;
    }
    if (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) {
        return true;
    }
    if (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
        return true;
    }
}

function verticalWin() {
    if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) {
        return true;
    }
    if (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) {
        return true;
    }
    if (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
        return true;
    }
}

function diagonalWin() {
    if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) {
        return true;
    }
    if (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
        return true;
    }
}

function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        printBoard();
        restartGame();
        console.log('Player ' + playerTurn + ' Won!\n' + 'Restarting game..' + '\n');
        return true;
    }
}

function restartGame() {
        moveCount = 0;
        board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
        ];
        return board;
}

function checkForTie() {
    if (moveCount === 9) {
        printBoard();
        restartGame();
        console.log("It's a tie!\n" + "Restarting game.." + "\n");
    }
}


function nextPlayer() {
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    return playerTurn;
}

function ticTacToe(row, column) {
    //makes sure input does not overlap previous inputs.
    if (board[row][column] === 'X' || board[row][column] === 'O') {
        console.log("Invalid entry. Try again..");
        nextPlayer();
    }
    else { 
        board[row][column] = playerTurn;
        moveCount++;
    }
    checkForWin();
    checkForTie();
    nextPlayer();
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
