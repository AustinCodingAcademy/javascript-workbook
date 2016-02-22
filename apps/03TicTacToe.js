'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


// 2. Need to keep players from overlapping each other's marks.

// 3. Need to print "It's a tie!" if board fills up."

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

// include 'draw' function

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
        console.log('Player ' + playerTurn + ' Won!\n' + 'Restarting game..' + '\n');
        restartGame();
        return true;
    }
}

function restartGame() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        moveCount = 0;
        board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
        ];
        return board;
    }
}

function checkForTie() {
    if (moveCount === 9) {
            moveCount = 0;
            printBoard();
            console.log("It's a tie!\n" + "Restarting game.." + "\n");
            board = [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
                ];
        return board;
    }
}


function nextPlayer() {
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    return playerTurn;
}

function ticTacToe(row, column) {
    //makes sure input does not overlap previous inputs
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
    restartGame();
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
