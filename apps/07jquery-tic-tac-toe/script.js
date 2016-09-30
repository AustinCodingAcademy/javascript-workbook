'use strict';

$(document).on('ready', function() {

    var playerTurn = 'X';

    //Check for a win
    function checkForWin() {
      if (checkHorizWin()) {
        return true;
      }
      else if (checkVertWin()) {
        return true;
      }
      else if (checkDiagWin()) {
        return true;
      }
      else {
        return false;
      }
    }//!checkForWin

    function checkVertWin() {
      if (($('[data-cell="0"]').text() === playerTurn &&
          $('[data-cell="3"]').text() === playerTurn &&
          $('[data-cell="6"]').text() === playerTurn) ||
          ($('[data-cell="1"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="7"]').text() === playerTurn) ||
          ($('[data-cell="2"]').text() === playerTurn &&
          $('[data-cell="5"]').text() === playerTurn &&
          $('[data-cell="8"]').text() === playerTurn)) {
        return true;
      }
      else {
        return false;
      }
    }

    function checkHorizWin() {
      //If data-cell 0, 1, or 2 have the same value, return true.
      if (($('[data-cell="0"]').text() === playerTurn &&
          $('[data-cell="1"]').text() === playerTurn &&
          $('[data-cell="2"]').text() === playerTurn) ||
          ($('[data-cell="3"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="5"]').text() === playerTurn) ||
          ($('[data-cell="6"]').text() === playerTurn &&
          $('[data-cell="7"]').text() === playerTurn &&
          $('[data-cell="8"]').text() === playerTurn)
        ) {
        return true;
      }
      else {
        return false;
      }
    }//!checkHorizWin

    function checkDiagWin() {
      if (($('[data-cell="0"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="8"]').text() === playerTurn) ||
          ($('[data-cell="2"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="6"]').text() === playerTurn)
        ) {
        return true;
      }
      else {
        return false;
      }
    }//!checkDiagWin

    // Spec 1:
    $('[data-cell]').click(function() {
      $(this).text(playerTurn);

      if(checkForWin()) {
        $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      }

      //Spec 2:
      playerTurn = playerTurn === 'X' ? 'O' : 'X';

    });

    //Spec 4:
    $('button#clear').click(function() {
      $('[data-cell]').text('');
      playerTurn = 'X';
    });//!button#clear
});
