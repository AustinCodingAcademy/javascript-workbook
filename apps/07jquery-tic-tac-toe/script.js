'use strict';

var playerTurn = 'X'

$(document).on('ready', function() {
  $(['data-cell']).click(function() {
    $(this).text(playerTurn);
    if (checkForWin()){
		     $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
		     }
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  })
  $('#clear').click(function(){
		     $('[data-cell]').text('');
		   });
});
