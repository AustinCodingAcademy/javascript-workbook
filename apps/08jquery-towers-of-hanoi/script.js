'use strict';

$(document).ready(function() {

var block = null;

  $('[data-stack]').click(function() {

    if (block === null) {
      //Detach the last block from the first stack that is clicked
      block = $(this).children().last().detach();
    }
    else {
      //Add the block if there are none on the stack yet
      if ($(this).children().length === 0){
        $(this).append(block);
        block = null;
      }
      //Otherwise, add the block if it is smaller than the last block on the stack
      else if (block.data('block') < $(this).children().last().data('block')){
        $(this).append(block);
        block = null;
        checkForWin();
      }
    }
  });

function checkForWin() {
  if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
    //We have a winner!
    $('div#announce-game-won').text('You Won!');
  }
}

});
