'use strict';

$(document).on('ready', function() {
    var playerTurn = 'X';
    $('[data-cell]').click(function() {
        $(this).text(playerTurn = (playerTurn === 'X') ? 'O' : 'X');
    });
    var horizontalWin = (function() {
        if (( < div data - cell = "0" > === playerTurn && < div data - cell = "1" > === playerTurn && < div data - cell = "2" > === playerTurn) || ( < div data - cell = "3" > === playerTurn && < div data - cell = "4" > === playerTurn && < div data - cell = "5" > === playerTurn) || ( < div data - cell = "6" > === playerTurn && < div data - cell = "7" > === playerTurn && < div data - cell = "8" > === playerTurn)) {
            return true;
        } else {
            return false;
        }

    });


    var verticalWin = (function() {
        if (( < div data - cell = "0" > === playerTurn && < div data - cell = "3" > === playerTurn && < div data - cell = "6" > === playerTurn) || ( < div data - cell = "1" > === playerTurn && < div data - cell = "4" > === playerTurn && < div data - cell = "7" > === playerTurn) || ( < div data - cell = "2" > === playerTurn && < div data - cell = "5" > === playerTurn && < div data - cell = "8" > === playerTurn)) {
            return true;
        } else {
            return false;
        }
    });


    var diagonalWin = (function() {
        if (( < div data - cell = "0" > === playerTurn && < div data - cell = "4" > === playerTurn && < div data - cell = "8" > === playerTurn) || ( < div data - cell = "2" > === playerTurn && < div data - cell = "4" > === playerTurn && < div data - cell = "6" > === playerTurn)) {
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
