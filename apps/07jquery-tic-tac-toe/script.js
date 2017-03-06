'use strict';

var playerTurn = 'X'

$(document).on('ready', function() {
  $('[data-cell]').click(function(){
    $(this).text(playerTurn);
  });
});
