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

var rowInput = [0, 1, 2];
var columnInput = [0, 1, 2];

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
    if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
        (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
        (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
        return true;
    }
}

function verticalWin() {
    // Your code here
    if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
        (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
        (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
        return true;
    }
}

function diagonalWin() {
    // Your code here
    if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
        (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
        return true;
    }
}

function turns() {
    var counter = 0;
    counter += 1;
}


function checkForWin() {
    // Your code here
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        console.log('Player ' + playerTurn + ' Won!');
        restart();
    }


}

function checkForTie(playerTurn) {

    if ((board[0][0] === 'X' || board[0][0] === 'O') && (board[0][1] === 'X' || board[0][1] === 'O') && (board[0][2] === 'X' || board[0][2] === 'O') && (board[1][0] === 'X' || board[1][0] === 'O') && (board[1][2] === 'X' || board[1][2] === 'O') && (board[1][1] === 'X' || board[1][1] === 'O') && (board[2][0] === 'X' || board[2][0] === 'O') && (board[2][1] === 'X' || board[2][1] === 'O') && (board[2][2] === 'X' || board[2][2] === 'O')) {
        console.log("It's a tie!");
        restart();
    }
}

function restart() {
    console.log("The game has been reset!");
    board[0] = [' ', ' ', ' '];
    board[1] = [' ', ' ', ' '];
    board[2] = [' ', ' ', ' '];
}

function ticTacToe(row, column) {
    if ((row == rowInput[0] || row == rowInput[1] || row == rowInput[2]) && (column == columnInput[0] || column == columnInput[1] || column == columnInput[2]) && (board[row][column] === ' ')){
        board[row][column] = playerTurn;
        checkForWin();
        checkForTie();
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    } else {
        console.log("WRONG!!");
    }

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
