'use strict';

var $block = null;
$(document).ready(function() {
  $('[data-stack]').on('click', function() {

    if ($block === null) {

      $block = $(this).children().last().detach();

    } else {
      if (
        // IF value of data-block attribute of block is less than that of last
        // child of desired data-stack
        // OR IF the destination stack is empty
        // drop the block on $targetStack
        $($block).data('block') < $(this).children().last().data('block') ||
        $(this).children().length === 0) {
        $(this).append($block);
        $block = null;
      }
    }
    // run this function AFTER each player move
    checkForWin();

  })

  function checkForWin() {
    // checking length of data stacks 2 and 3; if 4 blocks on either, declare winner
    if (
      $('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4
    ) {
      $('#announce-game-won').text('You Won!');
    }
  }
});
