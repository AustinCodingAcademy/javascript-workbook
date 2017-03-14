'use strict';

var $block = null;
$(document).ready(function() {
  $('[data-stack]').on('click', function() {
    //This is were the blocks will be moved from one stack to another stack
    if ($block === null) {

      $block = $(this).children().last().detach();

    } else {
      if (
        //Moving the blocks to either stack
        $($block).data('block') < $(this).children().last().data('block') ||
        $(this).children().length === 0) {
        $(this).append($block);
        $block = null;

      }
    }
    //This is running after every move to make sure that it's a legal move
    checkForWin();

  })

  function checkForWin() {
    //Declaring a winner if the stacks are on either 2 or 3 and have 4 blocks on them
    if (
      $('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4
    ) {
      $('#announce-game-won').text('You Won!');
    }
  }
});