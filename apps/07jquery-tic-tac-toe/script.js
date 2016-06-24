'use strict';

$(document).on('ready', function() {

    var playerTurn = 'X';

    function horizontalWin() {
     return ( ( $('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn) ||
              ( $('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn) ||
              ( $('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn)
            );
    }
    function verticalWin() {
      return ( ( $('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) ||
               ( $('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) ||
               ( $('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn)
             );
    }
    function diagonalWin() {
      return ( ( $('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
               ( $('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn)
             );
    }
    function checkForWin() {
        return (horizontalWin() || verticalWin() || diagonalWin());
    }

    $('[data-cell]').click (function() {
      if ($(this).text().length === 0) {
            $(this).text(playerTurn);
            if (checkForWin()) {
              $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
            }
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
      }
    });

//end of document.
});
