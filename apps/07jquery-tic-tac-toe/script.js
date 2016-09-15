'use strict';

$(document).on('ready', function() {
    // set the player turn to 'x' for the first turn
    var playerTurn = 'X'

    // I set up a function that checks all possibilities of a win and announces a winner if it is true
    function checkForWin() {
      if (horizontalWin() === true || verticalWin() === true || diagnolWin() === true) {
        return $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      }
    }

    // here we set a function to when a player clicks on a square it places an 'x' then switches to
    // 'o' for the next player to go.
    $('[data-cell]').click(function() {
      $(this).text(playerTurn);
      // called the checkForWin function before the change of players after every move.
      checkForWin();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    });

    // pretty self-explanitory, I check each of the horizontal spaces on the grid to see
    // if there is any text and return true if there is, for a win.
    function horizontalWin() {
      if ($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "2"]').text() === playerTurn ||

      $('[data-cell = "3"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn ||

      $('[data-cell = "6"]').text() === playerTurn &&
      $('[data-cell = "7"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn) {
        return true;
      }
    }

    function verticalWin() {
      if ($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "3"]').text() === playerTurn &&
      $('[data-cell = "6"]').text() === playerTurn ||

      $('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "7"]').text() === playerTurn ||

      $('[data-cell = "2"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn) {
        return true;
      }
    }

    function diagnolWin() {
      if ($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn ||

      $('[data-cell = "2"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "6"]').text() === playerTurn) {
        return true;
      }
    }

    // targeted the id with clear that is a button and cleared the board by targeting every data cell
    // and adding a blank text to them
    $('#clear').click(function() {
      var playerTurn = 'X';
      $('[data-cell]').text('');
      // removes the winner text 
      $('#announce-winner').empty();
    })

});
