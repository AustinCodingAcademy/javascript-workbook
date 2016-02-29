'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];


function restartGame() {
    board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
    ];
    return board;
};

var playerTurn = 'X';

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function validMove(row, column) {
    if (board[row][column] !== ' ') {
        return false;
    } else {
        return true;
    }

}

//board[row][column]:getter
//board[row][column]=:setter

function placeMark(row, column) {
    if (validMove(row, column)) {
        board[row][column] = playerTurn;
        checkForWin();
        endGame();
        changeTurn();
    }

}

function changeTurn() {
    playerTurn = (playerTurn === "X") ? "O" : "X";
    return playerTurn;
}

//var winCombo = [
//            //horizontal combos
//                [board[0][0], board[0][1], board[0][2]],
//                [board[1][0], board[1][1], board[1][2]],
//                [board[2][0], board[2][1], board[2][2]],
//            //diagonal combos
//                [board[0][0], board[1][1], board[2][2]],
//                [board[0][2], board[1][1], board[2][0]],
//            //vertical combos
//                [board[0][0], board[1][0], board[2][0]],
//                [board[0][1], board[1][1], board[2][1]],
//                [board[0][2], board[1][2], board[2][2]]
//];

function horizontalWin() {
    // Your code here
    if (board[0][0] !== " " && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
        return true;
    }
    if (board[1][0] !== " " && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
        return true;
    }
    if (board[2][0] !== " " && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
        return true;
    }
}

function verticalWin() {
    // Your code here
    if (board[0][0] !== " " && board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
        return true;
    }
    if (board[0][1] !== " " && board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
        return true;
    }
    if (board[0][2] !== " " && board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
        return true;
    }

}

function diagonalWin() {
    // Your code here
    if (board[0][0] !== " " && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== " " && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }
}

function endGame() {
    if (checkForWin()) {
        printBoard();
        board = clear_board;
    }
}

function checkForWin() {
    // Your code here
    //for (var i = 0; i < winCombo.length; i++) {
    //        
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        printBoard();
        restartGame();
        console.log('Player ' + playerTurn + ' Won!\n' + 'Restarting game..' + '\n');
        return true;
    }
}


function ticTacToe(row, column) {
    // Your code here
    placeMark(row, column);
}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    prompt.get(['row', 'column'], function (error, result) {
        console.log(result['row']);
        console.log(result['column']);

        ticTacToe(result['row'], result['column']);
        getPrompt();
    });
}



// Tests

if (typeof describe !== 'undefined') {

    describe('#ticTacToe()', function () {
        it('should place mark on the board', function () {
            ticTacToe(1, 1);
            assert.deepEqual(board, [[' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
        });
        it('should alternate between players', function () {
            ticTacToe(0, 0);
            assert.deepEqual(board, [['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
        });
        it('should check for vertical wins', function () {
            board = [[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', function () {
            board = [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', function () {
            board = [['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', function () {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}