'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';
    $('[data-cell]').click(function() {
      if ($(this).text() === '') {
      $(this).text(playerTurn);
    };
    $('#clear').click(function() {
      $('[data-cell]').text('');
      $('#announce-winner').text('');
      //reset the playerTurn to x
      playerTurn = 'X';
    });
      //check for win first before switching playerTurn
      checkForWin();
      playerTurn = ((playerTurn === 'O')? playerTurn = 'X' : playerTurn = 'O');
    });
    function checkForWin () {
      //which data cells are winning?
      //does data-cell contain current playerTurn?
      // don't know what that is $('[data-cell]').text() === playerTurn;

      function horizontalWin () {
        return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn)||
        ($('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn)||
        ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
      };
      //check for vertical win
      function verticalWin () {
        return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn)||
        ($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn)||
        ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
      };
      //check for diagonalWin
      function diagonalWin () {
        return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn)||
        ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn);
      };

      //if true, announce win
      if (horizontalWin() || verticalWin() || diagonalWin()) {
        $('#announce-winner').text("player " + playerTurn.toLowerCase() + " wins!");
        //clear the board

      };
    };
});
