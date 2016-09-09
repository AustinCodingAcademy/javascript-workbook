'use strict';

$(document).on('ready', function() {
    var playerTurn = 'X'
    $('[data-cell]').click(function() {
      $(this).text(playerTurn);
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    });
});
