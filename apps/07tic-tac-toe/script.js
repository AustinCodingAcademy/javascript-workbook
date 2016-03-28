'use strict';

$(document).on('ready', function () {
    var playerTurn = "X";
    var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];


    $('div[data-cell]').on("click", function () {
        $(this).text(playerTurn);
        var $divDataCell = $(this).data('cell');

        if ($divDataCell === 0) {
            ticTacToe(0, 0);
        } else if ($divDataCell === 1) {
            ticTacToe(0, 1);
        } else if ($divDataCell === 2) {
            ticTacToe(0, 2);
        } else if ($divDataCell === 3) {
            ticTacToe(1, 0);
        } else if ($divDataCell === 4) {
            ticTacToe(1, 1);
        } else if ($divDataCell === 5) {
            ticTacToe(1, 2);
        } else if ($divDataCell === 6) {
            ticTacToe(2, 0);
        } else if ($divDataCell === 7) {
            ticTacToe(2, 1);
        } else if ($divDataCell === 8) {
            ticTacToe(2, 2);
        }
        
        playerTurn = (playerTurn == "X") ? "O" : "X";
        $('#player').text("It's " + playerTurn + "'s turn now");
    });
    
    
    
    function horizontalWin() {

        if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
            return true;
        }

    }

    function verticalWin() {
        if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
            return true;
        }
    }

    function diagonalWin() {
        if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
            return true;
        }
    }

    function checkForWin() {

        if (horizontalWin() || verticalWin() || diagonalWin()) {
            $('#announce-winner').text('Player ' + playerTurn + ' wins!');
            return true;
        }
    }


    function ticTacToe(row, column) {

        board[row][column] = playerTurn;
        if (checkForWin()) {
            console.log(playerTurn + " wins");
            board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
        };
    };
});