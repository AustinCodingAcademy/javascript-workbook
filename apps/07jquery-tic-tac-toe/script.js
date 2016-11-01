'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';
  var play = true;

  function stopGame() {
    $('div[data-cell]:empty').html('<span></span>');
    play = false;
  }

  function checkForWin() {
    // Check for horizontal win
    if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='1']").text() === playerTurn && $("div[data-cell='2']").text() === playerTurn) || ($("div[data-cell='3']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='5']").text() === playerTurn) || ($("div[data-cell='6']").text() === playerTurn && $("div[data-cell='7']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn)) {
      stopGame();
      return true;
    }
    // Check for vertical win
    if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='3']").text() === playerTurn && $("div[data-cell='6']").text() === playerTurn) || ($("div[data-cell='1']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='7']").text() === playerTurn) || ($("div[data-cell='2']").text() === playerTurn && $("div[data-cell='5']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn)) {
      stopGame();
      return true;
    }
    // Check for diagonal win
    if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn) || ($("div[data-cell='2']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='6']").text() === playerTurn)) {
      stopGame();
      return true;
    }
    // If it gets here, no win yet so return false
    return false;
  }

  $('div[data-cell]').click( function() {
    if ($(this).text() === '' && play) {
      $(this).text(playerTurn);
      if (checkForWin()) {
        $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      }
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }
  })

  $('#clear').click( function() {
    $('div[data-cell]').text('');
    playerTurn = 'X';
    $('#announce-winner').text('');
    play = true;
  })

});
