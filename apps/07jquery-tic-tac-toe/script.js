'use strict';
//$(document).ready(function(){})
$(document).on('ready', function() {
    // Put app logic in here
  var playerTurn = 'X';
  function checkForWin(){
      // console.log('yay!');
      // debugger;
    if (
          // horizontal rows
            (($('[data-cell=0]').text() === playerTurn) &&
            ($('[data-cell=1]').text() === playerTurn) &&
            ($('[data-cell=2]').text() === playerTurn)) ||
            (($('[data-cell=3]').text() === playerTurn) &&
            ($('[data-cell=4]').text() === playerTurn) &&
            ($('[data-cell=5]').text() === playerTurn)) ||
            (($('[data-cell=6]').text() === playerTurn) &&
            ($('[data-cell=7]').text() === playerTurn) &&
            ($('[data-cell=8]').text() === playerTurn)) ||
            // vertical columns
            (($('[data-cell=0]').text() === playerTurn) &&
            ($('[data-cell=3]').text() === playerTurn) &&
            ($('[data-cell=6]').text() === playerTurn)) ||
            (($('[data-cell=1]').text() === playerTurn) &&
            ($('[data-cell=4]').text() === playerTurn) &&
            ($('[data-cell=7]').text() === playerTurn)) ||
            (($('[data-cell=2]').text() === playerTurn) &&
            ($('[data-cell=5]').text() === playerTurn) &&
            ($('[data-cell=8]').text() === playerTurn)) ||
            // diagonal lines
            (($('[data-cell=0]').text() === playerTurn) &&
            ($('[data-cell=4]').text() === playerTurn) &&
            ($('[data-cell=8]').text() === playerTurn)) ||
            (($('[data-cell=6]').text() === playerTurn) &&
            ($('[data-cell=4]').text() === playerTurn) &&
            ($('[data-cell=2]').text() === playerTurn))) {
              // console.log('yay!');
              // debugger;
        return $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      } else if (($('[data-cell=0]').text() !== '')&&($('[data-cell=1]').text() !== '')&&($('[data-cell=2]').text() !== '')&&($('[data-cell=3]').text() !== '')&&($('[data-cell=4]').text() !== '')&&($('[data-cell=5]').text() !== '')&&($('[data-cell=6]').text() !== '')&&($('[data-cell=6]').text() !== '')&&($('[data-cell=8]').text() !== '')){
          return $('#announce-winner').text('You Loose, You Loser!');
        }
  }

  $('[data-cell]').click(
        function() {
          if ($(this).text() === '' ){
            $(this).text(playerTurn);
            checkForWin();
            playerTurn = (playerTurn === 'X') ? 'O' : 'X';
          }
        }
    );
  $('#clear').click(
      function() {
        $('[data-cell]').empty();
        playerTurn = 'X';
        $('#announce-winner').text('');
      }
    );
});


//$('[data-cell]:first').attr('data-cell') returns value in the first data cell, so 0
//can also write it like this $('[data-cell]:first').data('cell')
