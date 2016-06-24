'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';
    $('span.player').text(playerTurn);

    $( '[data-cell]' ).click(function() {
      if ($(this).text() === 'X' || $(this).text() === 'O') {
        $('#announce-winner').text('Pick another square!')
        }
      else {
      $(this).text(playerTurn);
      checkForWin();
      playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X';
      $('span.player').text(playerTurn);
      }
    });

    function horizontalWin() {
        // Your code here
        return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn) ||
               ($('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn) ||
               ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
    }

    function verticalWin() {
        // Your code here
        return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) ||
               ($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) ||
               ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
    }

    function diagonalWin() {
        // Your code here
        return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
               ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn);
    }

    function checkForWin() {
        // Your code here
        if (horizontalWin() || verticalWin() || diagonalWin()) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        };
    }

      $('button').click(function(){
        $('[data-cell]').text('');
        $('#announce-winner').text('');
      });

});
