'use strict';

$(document).ready(function() {
  var playerTurn = 'X';

  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });

  $('#clear').on('click', function() {
    $('[data-cell], #announce-winner').text('');
    playerTurn = 'X';
  });

  function horizontalWin() {
    return (
      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="2"]').text() === playerTurn
    ) || (
      $('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn
    ) || (
      $('[data-cell="6"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn
    );
  }

  function verticalWin() {
    return (
      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn
    ) || (
      $('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn
    ) || (
      $('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn
    );
  }

  function diagonalWin() {
    return (
      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn
    ) || (
      $('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn
    );
  }

  function checkForWin() {
    if ( horizontalWin() || verticalWin() || diagonalWin() ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Won!');
    }
  }
});
