'use strict';

var playerTurn = 'X';

$(document).on('ready', function() {
   // Put app logic in here
   function togglePlayer() {
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
   }
   // var winCombinations = [
   //    ["0", "1", "2"],
   //    ["3", "4", "5"],
   //    ["6", "7", "8"],
   //    ["0", "3", "6"],
   //    ["1", "4", "7"],
   //    ["2", "5", "8"],
   //    ["0", "4", "8"],
   //    ["2", "4", "6"],
   // ];
   // function checkForWin() {
   //    for(var i=0; i<winCombinations.length; i++) {
   //       if ($('[data-cell='+winCombinations[i][0]+']').text()===playerTurn &&$('[data-cell='+winCombinations[i][1]+']').text()===playerTurn && $('[data-cell='+winCombinations[i][2]+']').text()===playerTurn &&) {
   //          $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
   //          return true;
   //       }
   //    }
   // }
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


   // $('[data-cell]').queue(function() {
   //    $('#placed').text("You already placed in that spot");
   //    $('[data-cell]').dequeue;
   // });
   //
   $('[data-cell]').click(function() {
      if ($(this).text()==="") {
         $(this).text(playerTurn);
         checkForWin();
         togglePlayer();
      } else {
         $('#placed').text("You already placed in that spot");
      }
   });
