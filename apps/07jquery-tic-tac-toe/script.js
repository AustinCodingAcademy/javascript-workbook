'use strict';

$(document).on('ready', function() {

  var playerTurn = 'X';

  $('[data-cell]').click(function () {
    $(this).text(playerTurn)
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });

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

  function diagonalWin() {
    if ($('[data-cell = "0"]').text() === playerTurn &&
        $('[data-cell = "4"]').text() === playerTurn &&
        $('[data-cell = "8"]').text() === playerTurn ||
        $('[data-cell = "2"]').text() === playerTurn &&
        $('[data-cell = "4"]').text() === playerTurn &&
        $('[data-cell = "6"]').text() === playerTurn) {
          return true;
        }
  }

  function checkForWin() {
      if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
        return $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      }
  }

  $('#clear').click(function() {
    $('[data-cell]').text('')
    playerTurn = 'X';
  });




});
