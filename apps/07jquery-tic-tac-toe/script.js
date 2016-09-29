'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';

    function checkForWin() {
      if (horizontalWin() || verticalWin() || diagonalWin()) {
        $('#announce-winner').text('Player ' + playerTurn + ' wins!');
        return true;
      }
    };

  $('[data-cell]').click(function() {
      $(this).text(playerTurn)
      checkForWin();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';

    });

    $("#clear").click(function() {
    $('[data-cell]').each(function(){
        $(this).empty();
    });
  $("#announce-winner").empty();
    playerTurn = "X";
});

    function horizontalWin() {
        // Your code here
        return $('[data-cell="0"]').text() === playerTurn &&
        $('[data-cell="1"]').text() === playerTurn &&
        $('[data-cell="2"]').text() === playerTurn ||
        $('[data-cell="3"]').text() === playerTurn &&
        $('[data-cell="4"]').text() === playerTurn &&
        $('[data-cell="5"]').text() === playerTurn ||
        $('[data-cell="6"]').text() === playerTurn &&
        $('[data-cell="7"]').text() === playerTurn &&
        $('[data-cell="8"]').text() === playerTurn
    };

    function verticalWin() {
        // Your code here
        return $('[data-cell="0"]').text() === playerTurn &&
        $('[data-cell="3"]').text() === playerTurn &&
        $('[data-cell="6"]').text() === playerTurn ||
        $('[data-cell="1"]').text() === playerTurn &&
        $('[data-cell="4"]').text() === playerTurn &&
        $('[data-cell="7"]').text() === playerTurn ||
        $('[data-cell="2"]').text() === playerTurn &&
        $('[data-cell="5"]').text() === playerTurn &&
        $('[data-cell="8"]').text() === playerTurn
    };

    function diagonalWin() {
        // Your code here
        return $('[data-cell="0"]').text() === playerTurn &&
        $('[data-cell="4"]').text() === playerTurn &&
        $('[data-cell="8"]').text() === playerTurn ||
        $('[data-cell="2"]').text() === playerTurn &&
        $('[data-cell="4"]').text() === playerTurn &&
        $('[data-cell="6"]').text() === playerTurn
    };
});
