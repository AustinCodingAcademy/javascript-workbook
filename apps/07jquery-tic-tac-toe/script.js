'use strict';



$(document).on('ready', function() {
    // Put app logic in here

  var playerTurn = 'x';

  function horizontalWin() {
      // Your code here
      return  $('[data-cell = "0"]').text() === playerTurn &&
              $('[data-cell = "1"]').text() === playerTurn &&
              $('[data-cell = "2"]').text() === playerTurn ||
              $('[data-cell = "3"]').text() === playerTurn &&
              $('[data-cell = "4"]').text() === playerTurn &&
              $('[data-cell = "5"]').text() === playerTurn ||
              $('[data-cell = "6"]').text() === playerTurn &&
              $('[data-cell = "7"]').text() === playerTurn &&
              $('[data-cell = "8"]').text() === playerTurn;
  }

  function verticalWin() {
      // Your code here
      return  $('[data-cell = "0"]').text() === playerTurn &&
              $('[data-cell = "3"]').text() === playerTurn &&
              $('[data-cell = "6"]').text() === playerTurn ||
              $('[data-cell = "1"]').text() === playerTurn &&
              $('[data-cell = "4"]').text() === playerTurn &&
              $('[data-cell = "7"]').text() === playerTurn ||
              $('[data-cell = "2"]').text() === playerTurn &&
              $('[data-cell = "5"]').text() === playerTurn &&
              $('[data-cell = "8"]').text() === playerTurn;
  }

  function diagonalWin() {
      // Your code here
      return  $('[data-cell = "0"]').text() === playerTurn &&
              $('[data-cell = "4"]').text() === playerTurn &&
              $('[data-cell = "8"]').text() === playerTurn ||
              $('[data-cell = "2"]').text() === playerTurn &&
              $('[data-cell = "4"]').text() === playerTurn &&
              $('[data-cell = "6"]').text() === playerTurn;
  }


  function checkForWin() {
      // Your code here
      return (horizontalWin() || verticalWin () || diagonalWin ());

  }

  $('[data-cell]').click(function () {
      $(this).text(playerTurn);
      if(checkForWin()) {
        $('#announce-winner').text('Player ' + playerTurn + 'Wins!');
      }
      playerTurn = (playerTurn === 'x') ? 'o' : 'x';
  });

});
