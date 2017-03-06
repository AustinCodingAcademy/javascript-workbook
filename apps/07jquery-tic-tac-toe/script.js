'use strict';

$(document).on('ready', function(){
  // Put app logic in here
  $('[data-cell]').click(function(){
    var playerTurn = 'X';
    $(this).text(playerTurn);
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });

  $('button').click(function(){
    $('[data-cell]').text('');
    playerTurn = 'X';
  });
});
