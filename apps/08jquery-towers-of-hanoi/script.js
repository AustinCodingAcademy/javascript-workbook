'use strict';
//made $block global and =null for following if/else conditions to pull from
var $block = null;
$(document).ready(function() {

  $('[data-stack]').on('click', function() {
    // setting #announce-game-win to empty string at every click to clear out any denial messages from previous click attempt.
    $('#announce-game-won').text('')
    if ($block === null) {
      if ($(this).children().length < 1) {
        //give alert if user is trying to pick up from an empty stack
        $('#announce-game-won').text('Cannot pick up a block from an empty stack.');
      } else {
        $block = $(this).children().last().detach()
      }
    } else {
      //allow stack to be appended only if stack is empty or last block of stack is larger than block 'in hand'
      if ($($block).data('block') < $(this).children().last().data('block') || $(this).children().length < 1) {
        $(this).append($block);
        $block = null;
      } else {
        $('#announce-game-won').text('Whoa! That wont fit—its too big!')
      }
    }
    checkForWin();

  })

  function checkForWin() {
    //check for length of data stacks 2 and 3, stack is ineligible for win
    if (
      $('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4
    ) {
      $('#announce-game-won').text('You Won!');
    }
  }
});
