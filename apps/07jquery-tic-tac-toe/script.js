'use strict';

$(document).on('ready', function() {
    var playerTurn = 'X';
    $('[data-cell]').click(function() {
        $(this).text(playerTurn = (playerTurn === 'X') ? 'O' : 'X');
    });
    var horizontalWin = (function() {
        if (( $('[data-cell = "0"]').text()  === playerTurn && $('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "2"]').text() === playerTurn) || ( $('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "5"]').text()=== playerTurn) || ($('[data-cell = "6"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)) {
            return true;
        } else {
            return false;
        }

    });


    var verticalWin = (function() {
        if (($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn) || ( $('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn) || ( $('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)) {
            return true;
        } else {
            return false;
        }
    });


    var diagonalWin = (function() {
        if (( $('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) || ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn)) {
          return true;
        } else {
          return false;
        }

    });
    var checkForWin = (function() {
        if ((horizontalWin() === true) || (verticalWin() === true) || (diagonalWin() === true)) {
            console.log('Player ' + playerTurn + 'won!');
            return true;
        } else {
            return false;
        }
    });
});
