'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

//general idea
//1 - show the board
//2 - have player 1 select a position to place the x, then display the board with the x
//3 - have player 2 select an open position to place theirs.  cannot already have a value in it.
//4 - have player 1 select another spot, etc
//5 - need to check for a win after each player placement
//6 - ask to play again if a tie....(track number of turns)

var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// need to toggle playerTurn
var playerTurn = '1';
var numberOfTurns = 0;

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {

    //loop through to check each row
    function row(marker) {

        var i = 0;
        for (i = 0; i < 3; i++) {

            var boardArray = [];

            boardArray.push(board[i][0]);
            boardArray.push(board[i][1]);
            boardArray.push(board[i][2]);

            if (boardArray[0] === marker && boardArray[1] === marker && boardArray[2] === marker) {
                return true;
            }
        }
    }

    //check each row with the values

    if (row('X') === true || row('O') === true) {
        return true;
    } else {
        return false;
    }

}

function verticalWin() {


    //loop through to check each column
    function column(marker) {

        var i = 0;
        for (i = 0; i < 3; i++) {

            var boardArray = [];

            boardArray.push(board[0][i]);
            boardArray.push(board[1][i]);
            boardArray.push(board[2][i]);

            if (boardArray[0] === marker && boardArray[1] === marker && boardArray[2] === marker) {
                return true;
            }
        }
    }

    //check each column with the values

    if (column('X') === true || column('O') === true) {
        return true;
    } else {
        return false;
    }

}

function diagonalWin() {

    if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')) {
        return true;
    } else if ((board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') || (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')) {
        return true;
    } else {
        //return;
        return false;
    }

}

function checkForWin() {

    //run the horizontal, vertical, diagonal functions

    horizontalWin();
    verticalWin();
    diagonalWin();

    //if any are true, then there is a win!
    //if not continue playing the game

    if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
        playerTurn = (playerTurn === '1') ? '2' : '1';
        printBoard();
        console.log("Player " + playerTurn + " wins!");
        return true;
    } else if (horizontalWin() === false && verticalWin() === false && diagonalWin() === false && numberOfTurns > 8) {
        printBoard();
        console.log("It's a tie!  Play again to find a winner!");
        // getPrompt();
    } else {
        getPrompt();
    }

}

//need code to contain the prompts to valid rows/columns
function ticTacToe(row, column) {
    // Your code here

    //need to print the X or Y to the board depending on coordinates
    board[row][column] = (playerTurn === '1') ? 'X' : 'O';
    //board[row][column] = 'X';
    playerTurn = (playerTurn === '1') ? '2' : '1';

    console.log(board.length);

    //incrementally increase the number of turns; this is to check later when the number of turns = 9 and there is no winner
    numberOfTurns++;

    //now check for a win
    checkForWin();

}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");

    //break into two prompts to validate input
    //first ask for the row
    getPromptRow();

}

function getPromptRow() {

    prompt.get(['row'], function(error, result) {

        var row = result['row'];

        //first check if the value is a valid number (and not a string)
        if (row != '' && (row <= 2 && row >= 0)) {
            getPromptColumn(row);
        } else {
            //if row is not valid, ask them again.
            console.log('Invalid input - please enter a number between 0 and 2');
            getPromptRow();
        }
    });
}

function getPromptColumn(row) {
    prompt.get(['column'], function(error, result) {

        var column = result['column'];

        //if column is valid (not a string, not blank), check if the position is already taken, and if not, then run the tictactoe function
        if (column != '' && (column <= 2 && column >= 0)) {

            if (board[row][column] === ' ') {
                ticTacToe(row, column);
            } else {
                console.log('You need to select an open position, try again');
                getPromptRow();
            }

        } else {
            //if column is not valid, ask again
            console.log('Invalid input - please enter a number between 0 and 2');
            getPromptColumn(row);
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
