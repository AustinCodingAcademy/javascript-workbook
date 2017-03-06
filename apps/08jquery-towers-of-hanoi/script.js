'use strict';
var $block = null;

$(document).ready(function() {
  // Put app logic here
  $('div[data-stack]').on('click', function() {
    //to do
    // Only move the block if the value of the data- block attribute is less than the last block of the stack, or if the stack is empty.

    if ($block === null) {
      //the data stack that was clicked on and you are picking it up
      console.log('picking it up')
      $block = $(this)
        .children()
        .last()
        .detach();
    } else {
      //put it back down
      if ($(this).children().length === 0 || $(this).children().last().data('block') > $block.data('block')) {
        console.log('putting it down')
        $(this).append($block);
        $block = null;

      } else {
        console.log('no mam')
      }
    }
    checkForWin();
  });

  function checkForWin() {
    //checking length of data stacks 2 and 3
    if ($('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4)
    //update text to you won
    {
      console.log('winner winner')
      $('#announce-game-won').text('You Won!')
    }

  }
});
