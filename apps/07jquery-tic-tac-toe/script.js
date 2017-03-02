'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';

  $('[data-cell]').on("click", function() {
    // conditional such that the following runs only if ($(this).text() === "")
    if ($(this).text() === "") {

      $(this).text(playerTurn);

      if (checkForWin() === true) {
        $('#announce-winner').text('Player ' + playerTurn + ' wins!');
        return true;
      }

      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }
  });

  $('#clear').on("click", function() {
    $('[data-cell]').empty();
    $('#announce-winner').empty();
    playerTurn = 'X';
  });


  function horizontalWin() {
    if (($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn) ||
      ($('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn) ||
      ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn)) {
      console.log('horizontalWin');
      return true;
    }
    return;
  }

  function verticalWin() {
    if (($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) ||
      ($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) ||
      ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn)) {
      console.log('verticalWin');
      return true;
    }
    return;
  }

  function diagonalWin() {
    if (($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
      ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn)) {
      console.log('diagonalWin');
      return true;
    }
    return;
  }

  function checkForWin() {
    if ((horizontalWin() === true) || (verticalWin() === true) || (diagonalWin() === true)) {
      return true;
    }
    return;
  }


});
