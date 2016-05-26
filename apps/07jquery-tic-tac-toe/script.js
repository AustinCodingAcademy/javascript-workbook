'use strict';
var playerTurn = 'X';
function checkForWin() {
  if($('[data-cell="0"]').text()===playerTurn&& $('[data-cell="1"]').text()===playerTurn&& $('[data-cell="2"]').text()===playerTurn) {
       $('#announce-winner').text("Player " + playerTurn + " Wins!")
     } //copy this ^^^ for these vvv
  else if
       ($('[data-cell = "3"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "5"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
     }
  else if
       ($('[data-cell = "6"]').text()===playerTurn&& $('[data-cell = "7"]').text()===playerTurn&& $('[data-cell = "8"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
        }
  else if
       ($('[data-cell = "0"]').text()===playerTurn&& $('[data-cell = "3"]').text()===playerTurn&& $('[data-cell = "6"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
       }
  else if
        ($('[data-cell = "1"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "7"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
            }
  else if
        ($('[data-cell = "2"]').text()===playerTurn&& $('[data-cell = "5"]').text()===playerTurn&& $('[data-cell = "8"]').text()===playerTurn) {
              $('#announce-winner').text("Player " + playerTurn + " Wins!")
        }
  else if
        ($('[data-cell = "0"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "8"]').text()===playerTurn) {
            $('#announce-winner').text("Player " + playerTurn + " Wins!")
        }
  else if
        ($('[data-cell = "2"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "6"]').text()===playerTurn) {
            $('#announce-winner').text("Player " + playerTurn + " Wins!" )
        }
   }


$(document).on('ready', function() {
    // Put app logic in here

    $('[data-cell]').click(function() {
      $(this).text(playerTurn); //place mark
      checkForWin();
      playerTurn=(playerTurn=== 'X') ? 'O' : 'X';
    });

});
