'use strict';

$(document).on('ready', function() {
    var playerTurn = 'X';
    $('[data-cell]').click(function() {
        $(this).text(playerTurn = (playerTurn === 'X') ? 'O' : 'X');
    });
    var horizontalWin = (function() {
        if (( '[data-cell = "0"]' > === playerTurn && '[data-cell = "1"]' === playerTurn && '[data-cell = "2"]' === playerTurn) || ( '[data-cell = "3"]' === playerTurn && '[data-cell = "4"]' === playerTurn && '[data-cell = "5"]' === playerTurn) || ( '[data-cell = "6"]' === playerTurn && '[data-cell = "7"]' === playerTurn && '[data-cell = "8"]' === playerTurn)) {
            return true;
        } else {
            return false;
        }

    });


    var verticalWin = (function() {
        if (( '[data-cell = "0"]' === playerTurn && '[data-cell = "3"]' === playerTurn && '[data-cell = "6"]' === playerTurn) || ( '[data-cell = "1"]' === playerTurn && '[data-cell = "4"]' === playerTurn && '[data-cell = "7"]' === playerTurn) || ( '[data-cell = "2"]' === playerTurn && '[data-cell = "5"]' === playerTurn && '[data-cell = "8"]' === playerTurn)) {
            return true;
        } else {
            return false;
        }
    });


    var diagonalWin = (function() {
        if (( '[data-cell = "0"]' === playerTurn && '[data-cell = "4"]' === playerTurn && '[data-cell = "8"]' === playerTurn) || ('[data-cell = "2"]' === playerTurn && '[data-cell = "4"]' === playerTurn && '[data-cell = "6"]' === playerTurn)) {
          return true;
        } else {
          return false;
        }

    });
    var checkForWin = (function() {
        ifif ((horizontalWin() === true) || (verticalWin() === true) || (diagonalWin() === true)) {
            console.log('Player ' + playerTurn + 'won!');
            return true;
        } else {
            return false;
        }
    });
});
