'use strict';

$(document).on('ready', function() {
      // Put app logic in here
      console.log('start');

      checkForWin()

      var playerTurn = 'X';
      $('div[data-cell]').on('click', function() {
        $(this).text(playerTurn);

        checkForWin();
        playerTurn = (playerTurn === 'X' ? 'O' : 'X');

      });

      //return True or False
      function checkForWin() {

        if (
          $('div[data-cell=0]').text() === playerTurn &&
          $('div[data-cell=1]').text() === playerTurn &&
          $('div[data-cell=2]').text() === playerTurn ||
          $('div[data-cell=3]').text() === playerTurn &&
          $('div[data-cell=4]').text() === playerTurn &&
          $('div[data-cell=5]').text() === playerTurn ||
          $('div[data-cell=6]').text() === playerTurn &&
          $('div[data-cell=7]').text() === playerTurn &&
          $('div[data-cell=8]').text() === playerTurn ||
          $('div[data-cell=0]').text() === playerTurn &&
          $('div[data-cell=4]').text() === playerTurn &&
          $('div[data-cell=8]').text() === playerTurn ||
          $('div[data-cell=2]').text() === playerTurn &&
          $('div[data-cell=4]').text() === playerTurn &&
          $('div[data-cell=6]').text() === playerTurn ||
          $('div[data-cell=0]').text() === playerTurn &&
          $('div[data-cell=3]').text() === playerTurn &&
          $('div[data-cell=6]').text() === playerTurn ||
          $('div[data-cell=1]').text() === playerTurn &&
          $('div[data-cell=4]').text() === playerTurn &&
          $('div[data-cell=7]').text() === playerTurn ||
          $('div[data-cell=2]').text() === playerTurn &&
          $('div[data-cell=5]').text() === playerTurn &&
          $('div[data-cell=8]').text() === playerTurn
        ) {
          $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
      }

      $('#clear').on('click', function clearBoard() {
          $('div[data-cell]').text('');
          $('#announce-winner').text('');
          playerTurn = 'X';
        })

      //$('div[data-cell]').on('click',
      function isSpaceAvailable(target) {
            if ($(target).text() === '') {
              $('#announce-winner').text('')
              return true;
            } else {
              $('#announce-winner').text('Nice try. That space is not available!')
              return false;
            }
          }


      });
