'use strict';

var $block = null;
$(document).ready(function() {
  $('[data-stack]').on('click', function() {
    //This moves the codes on click
    if ($block === null) {
      $block = $(this).children().last().detach();
    } else {
      if (
        //This is what moves blocks around the pile
        $($block).data('block') < $(this).children().last().data('block') ||
        $(this).children().length === 0) {
        $(this).append($block);
        $block = null;
      }
    }
    //Call the check for win after each block move
    checkForWin();
  })

  function checkForWin() {
    // This checks for a win
    if (
      $('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4
    ) {
      $('#announce-game-won').text('You Won!');
    }
  }
});
