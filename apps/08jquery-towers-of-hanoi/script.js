'use strict';

var $block = null;
//This below gets the document ready for jQuery
$(document).ready(function() {
  $('[data-stack]').on('click', function() {
    //Code below initiates the game to be played with they click on it
    if ($block === null) {
      $block = $(this).children().last().detach();
    } else {
      if (
        //this takes a block and appends it to the next 
        $($block).data('block') < $(this).children().last().data('block') ||
        $(this).children().length === 0) {
        $(this).append($block);
        $block = null;
      }
    }
    //This checks for a win after every time you move a block
    checkForWin();
  })

  function checkForWin() {
    //This declares a win when the length equals 4 on stack2 or stack3
    if (
      $('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4
    ) {
      $('#announce-game-won').text('You Won!');
    }
  }
});
