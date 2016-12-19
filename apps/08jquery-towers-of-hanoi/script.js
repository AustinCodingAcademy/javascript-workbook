'use strict';

$(document).ready(function() {
  var block = null;

  $('[data-stack]').click(function() {
    if (!block) {
      block = $(this).children().last().detach();
    } else {
      if ($(this).children().last().data('block') > block.data('block') || $(this).children().last().data('block') == undefined) {
        $(this).append(block);
        block = null;
      }
    }
    if (checkForWin()) {
      $('#announce-game-won').text('you won!');
    }
  })
})
function checkForWin() {
  return ($('[data-stack=2]').children().length === 4) || ($('[data-stack=3]').children().length === 4)
}

// On click() of a [data-stack], detach() the last() of the children() and set it equal to a variable called block. Then, when another [data-stack] is click()ed, check if the block variable is assigned, if so, append the block to the stack and set block to null.

//Only move the block if the value of the data- block attribute is less than the last block of the stack, or if the stack is empty.

//Create a function checkForWin() that checks .forEach() stack and determines if one of the last two stacks has four [data-block]s. Run this function after every move. If you won, put the .text 'You Won! inside the div#announce-game-won element.




//var selected = = $(this);
