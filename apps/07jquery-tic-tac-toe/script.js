'use strict';

var playerTurn = 'X';

$(document).on('ready', function() {
   // Put app logic in here
   function togglePlayer() {
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
   }

   function verticalWin() {
      return (($('[data-cell="0"]').text()) === playerTurn &&
      ($('[data-cell="3"]').text()) === playerTurn &&
      ($('[data-cell="6"]').text()) === playerTurn) ||
      (($('[data-cell="1"]').text()) === playerTurn &&
      ($('[data-cell="4"]').text()) === playerTurn &&
      ($('[data-cell="7"]').text()) === playerTurn) ||
      (($('[data-cell="2"]').text()) === playerTurn &&
      ($('[data-cell="6"]').text()) === playerTurn &&
      ($('[data-cell="8"]').text()) === playerTurn);
   }

   function horizontalWin() {
      return (($('[data-cell="0"]').text()) === playerTurn &&
      ($('[data-cell="1"]').text()) === playerTurn &&
      ($('[data-cell="2"]').text()) === playerTurn) ||
      (($('[data-cell="3"]').text()) === playerTurn &&
      ($('[data-cell="4"]').text()) === playerTurn &&
      ($('[data-cell="5"]').text()) === playerTurn) ||
      (($('[data-cell="6"]').text()) === playerTurn &&
      ($('[data-cell="7"]').text()) === playerTurn &&
      ($('[data-cell="8"]').text()) === playerTurn);
   }

   function diagonalWin() {
      return (($('[data-cell="0"]').text()) === playerTurn &&
      ($('[data-cell="4"]').text()) === playerTurn &&
      ($('[data-cell="8"]').text()) === playerTurn) ||
      (($('[data-cell="2"]').text()) === playerTurn &&
      ($('[data-cell="4"]').text()) === playerTurn &&
      ($('[data-cell="6"]').text()) === playerTurn);
   }

   function checkForWin() {
      if (verticalWin() || horizontalWin() || diagonalWin()) {
         $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
         return true;
      } else {
         return false;
      }
   }

   function previousMark() {
      //$('[data-cell]').click(function() {
      //   $('#placed').text("You already placed in that spot");
      //throw playerTurn();
      //})
      $('[data-cell]').queue(function() {
         $('#placed').text("You already placed in that spot");
         $('[data-cell]').dequeue;
      });
   }
   $('[data-cell]').click(function() {
      //playerTurn = 'X';
      $(this).text(playerTurn);
      checkForWin();
      togglePlayer();
      //   previousMark();
   });

});
