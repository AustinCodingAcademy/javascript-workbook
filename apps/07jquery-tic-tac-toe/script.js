'use strict';

$(document).on('ready', function() {
  console.log('start');
  var playerTurn = 'X';

  $('div[data-cell]').on('click', function () {
    //when data-cells are clicked, what do?
    //pls make a mark
    if (isSpaceAvailable(this)) {
    $('#announce-winner').text('');
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = playerTurn === 'X' ? 'O' : 'X';
    // ^ this is a ternary operator. It says 'if it is true that playerTurn equals X, then change playerTurn to O. If this is false, change it to X.
  } else {
    
  }
  });

  $('#clear').on('click', function () {
    clearBoard();
  });

  function checkForWin () {
    // get the text for 0, 1 and 2
    if (
      $('div[data-cell=0]').text() === playerTurn && $('div[data-cell=1]').text() === playerTurn && $('div[data-cell=2]').text() === playerTurn || $('div[data-cell=3]').text() === playerTurn && $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=5]').text() === playerTurn || $('div[data-cell=6]').text() === playerTurn && $('div[data-cell=7]').text() === playerTurn && $('div[data-cell=8]').text() === playerTurn ||
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=3]').text() === playerTurn &&
      $('div[data-cell=6]').text() === playerTurn ||
      $('div[data-cell=1]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=7]').text() === playerTurn ||
      $('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=5]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn ||
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn ||
      $('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=6]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    }
}

  function clearBoard() {
    $('div[data-cell]').text('');
    $('#announce-winner').text('');
    playerTurn = 'X';
  }

  function isSpaceAvailable(target) {
    if ($(target).text() === '') {
      return true;
    } else {
      $('#announce-winner').text('That space is not available! Pick another space');
      return false;
    }
  }
})
