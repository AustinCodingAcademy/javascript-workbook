'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  // extra step that we dont need to do. but we can
  // var getElements = $;
  var playerTurn = 'X';

  $('[data-cell]').click(function() {
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });
  

  function checkForWin() {
    if ($('[data-cell=0]').text() === playerTurn && $('[data-cell=1]').text() === playerTurn && $('[data-cell=2]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
    if ($('[data-cell=3]').text() === playerTurn && $('[data-cell=4]').text() === playerTurn && $('[data-cell=5]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
    if ($('[data-cell=6]').text() === playerTurn && $('[data-cell=7]').text() === playerTurn && $('[data-cell=8]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
    if ($('[data-cell=0]').text() === playerTurn && $('[data-cell=3]').text() === playerTurn && $('[data-cell=6]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
    if ($('[data-cell=1]').text() === playerTurn && $('[data-cell=4]').text() === playerTurn && $('[data-cell=7]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
    if ($('[data-cell=2]').text() === playerTurn && $('[data-cell=5]').text() === playerTurn && $('[data-cell=8]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
    if ($('[data-cell=0]').text() === playerTurn && $('[data-cell=4]').text() === playerTurn && $('[data-cell=8]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
    if ($('[data-cell=2]').text() === playerTurn && $('[data-cell=4]').text() === playerTurn && $('[data-cell=6]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;  
    }
  }

  $('#clear').click(function() {
    $('[data-cell]').text('');
    $('#announce-winner').text('');
    playerTurn = 'X';
  })
});
