'use strict';

var playerTurn = 'X' //Setting the variable from spec 1. 

$(document).on('ready', function() {

  $('[data-cell]').click(function() { //click listener from spec one.
    $(this).text(playerTurn);


    if (checkForWin()){//This checks for the win and announces the winner if the criteria are met.
		     $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        
    playerTurn = (playerTurn === 'X') ? 'O' : 'X'; //this flips the playerTurn from X to O depending on the last click.
  })

  $('#clear').click(function(){
		     $('[data-cell]').text('');
		   });

});
		 function checkForWin() {
       //horizontal wins
       
       if ($("[data-cell='0']").text() === playerTurn &&
           $("[data-cell='1']").text() === playerTurn &&
           $("[data-cell='2']").text() === playerTurn) {
            return true;
        }

      if ($("[data-cell='3']").text() === playerTurn &&
          $("[data-cell='4']").text() === playerTurn &&
          $("[data-cell='5']").text() === playerTurn) {
            return true;
          }

      if ($("[data-cell='6']").text() === playerTurn &&
          $("[data-cell='7']").text() === playerTurn &&
          $("[data-cell='8']").text() === playerTurn) {
            return true;
          }

      // vertical wins

      if ($("[data-cell='0']").text() === playerTurn &&
          $("[data-cell='3']").text() === playerTurn &&
          $("[data-cell='6']").text() === playerTurn) {
            return true;
          }

      if ($("[data-cell='1']").text() === playerTurn &&
          $("[data-cell='4']").text() === playerTurn &&
          $("[data-cell='7']").text() === playerTurn) {
            return true;
          }

      if ($("[data-cell='2']").text() === playerTurn &&
          $("[data-cell='5']").text() === playerTurn &&
          $("[data-cell='8']").text() === playerTurn) {
            return true;
          }

      // diagonal wins

      if ($("[data-cell='0']").text() === playerTurn &&
          $("[data-cell='4']").text() === playerTurn &&
          $("[data-cell='8']").text() === playerTurn) {
            return true;
          }

      if ($("[data-cell='2']").text() === playerTurn &&
          $("[data-cell='4']").text() === playerTurn &&
          $("[data-cell='6']").text() === playerTurn) {
            return true;
          }
  }
