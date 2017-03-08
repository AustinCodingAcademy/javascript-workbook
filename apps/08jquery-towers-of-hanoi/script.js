'use strict';
var $block = null;

$(document).ready(function() {
  $('div[data-stack]').on('click', function() {

    if ($block === null) {
      //picking up the bock
      $block = $(this).children().last().detach();
    } else {
      //places block on new stack
      if ($(this).children().length === 0 || $(this).children().last().data('block') > $block.data('block')) {
        $(this).append($block);
        $block = null;

      } else {
        return false
      }
    }
    checkForWin();
  });

  function checkForWin() {
    //checks to see if length og stack 2 or 3 is "4"
    if ($('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4)
    //update text to you won
    {
      $('#announce-game-won').text('You Won!')
    }

  }
});
