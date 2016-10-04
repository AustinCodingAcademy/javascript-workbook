'use strict';

$(document).ready(function() {
  var block = null;
  var last = null;
  var count = 0;
  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text("Huzzah! You won in " + count + " moves!");
      $
    };
  };
  $('[data-stack]').click(function() {
   if (block === null) {
      $('#error').text('');
      block = $(this).children().last().detach();
      last = $(this)
    }
    else if ((block.data('block') < $(this).children().last().data('block')) ||
    ($(this).children().length === 0)) {
      $(this).append(block);
      $('#error').text('');
      block = null;
      last = null;
      count = count + 1;
    }
    else {
      last.append(block);
      $('#error').text("Not a valid move. Try again!")
      block = null;
    };
    checkForWin();
  });
});
