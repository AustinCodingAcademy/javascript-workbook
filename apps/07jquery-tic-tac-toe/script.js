'use strict';

$(document).on('ready', function() {
    // Put app logic in here

    var playerTurn = 'X';

    $('[data-cell]').click(function() {
      if ($(this).text() !== "") {
          $('#announce-winner').text("Nice try, but pick an empty square.");
          return;
      }
      $(this).text(playerTurn);
      checkForWin();
      checkForTie();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    });

    var checkForWin = function() {
          //horizontal
      if (($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn)  ||
          ($('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn) ||
          ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
          //vertical
          ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) ||
          ($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) ||
          ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
          //diagnal
          ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
          ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn)) {
            $('#announce-winner').html('<span>Player ' + playerTurn + ' Wins!</span>');
            $('#announce-winner span').fadeOut(2000);
            var dataCells = $('[data-cell]');
            setTimeout(function () {
                dataCells.text('');
            }, 2000);
        }
    };

    var checkForTie = function() {
        if ($('[data-cell="0"]').text() !== "" && $('[data-cell="1"]').text() !== "" && $('[data-cell="2"]').text() !== "" &&
            $('[data-cell="3"]').text() !== "" && $('[data-cell="4"]').text() !== "" && $('[data-cell="5"]').text() !== "" &&
            $('[data-cell="6"]').text() !== "" && $('[data-cell="7"]').text() !== "" && $('[data-cell="8"]').text() !== "") {
                $('#announce-winner').text("Whoops, looks like it's a tie!");
                $('[data-cell]').text("");
            }
    }
});
