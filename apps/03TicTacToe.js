'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var board = [];
board[0] = [' ', ' ', ' '];
board[1] = [' ', ' ', ' '];
board[2] = [' ', ' ', ' '];

function renew() {
    board[0] = [' ', ' ', ' '];
    board[1] = [' ', ' ', ' '];
    board[2] = [' ', ' ', ' '];
}
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
    return ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn));
}

function verticalWin() {
    // Your code here
    return ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn));
}

function diagonalWin() {
    // Your code here
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i === j) {
                if (board[i][j] === playerTurn)
                    return true;
            }
        }
        for (var k = 2; k >= 0; k--) {
            if (board[i][k] === playerTurn)
                return true;
        }
    }
}

function checkForWin() {
    var a = horizontalWin();
    var b = verticalWin();
    var c = diagonalWin();
    if (a || b || c === true){
        return true;
        console.log("Player " + playerTurn + " Won!!!!");
    } return false;
}

function ticTacToe(row, column) {
    // Your code here
    console.log("Let's Play Tic Tac Toe, choose ur row and column to place 'X'or 'O' ", row, column);
    board[row][column] = playerTurn;
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    var answer = ' ';
    if ( checkForWin() === true) {
        rl.question("Do you want to play again? yes or no?", (answer) => {
            if (answer === 'yes') {
                renew();
                getPrompt();
            } else {
                console.log("Thanks for playing!");
            }
        });
    }
}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    console.log("Remember acceptable inputs are : 0,1,2")
    rl.question('row: ', (row) => {
        rl.question('column: ', (column) => {
            if ((row === '0' || row === '1' || row === '2') && (column === '0' || column === '1' || column === '2')) {
                ticTacToe(row, column);
                getPrompt();
            }
            else {
                console.log("Invalid input , please try : 0 or 1 or 2");
                getPrompt();
            }
        });
    });
}



// Tests

if (typeof describe === 'function') {

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
