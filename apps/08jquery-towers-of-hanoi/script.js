'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  var play = true;

  function isLegal($blockToMove, $destinationBlock) {
    return !($blockToMove.data('block') > $destinationBlock.data('block'));
  }


  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text('You Won!');
      play = false;
    }
  }

  //  On click() of a [data-stack], detach() the last() of
  //  the children() and set it equal to a variable called block.
  //  Then, when another [data-stack] is click()ed, check if
  //  the block variable is assigned, if so, append the block
  //  to the stack and set block to null.

  $('div[data-stack]').click(function () {
    if (!$block && play) {
      $block = $(this).children().last().detach();
    } else if (isLegal($block, $(this).children().last()) && play) {
      $(this).append($block);
      $block = null;
      checkForWin();
    }
  })
});
