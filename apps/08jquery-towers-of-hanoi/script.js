'use strict';

$(document).ready(function() {
  var $block = null;

  $('[data-stack]').click(function() {
    //this is a listener for clicks!

    if ($block === null) {
      //setting the announcement text to nothing in case the player made an illegal move previously
      $('#announce-game-won').text('');
      $block = $(this).children().last().detach();
      //'this' is the data stack that was clicked on and will return the jquery object that we need
      //we are picking up a block
    } else {
      //we are putting the block back down
      if (isLegalMove($block, $(this))) {
        $(this).append($block);

        //setting the $block back to null so we can continue to play the game.
        $block = null;
      } else {}
    }

    checkForWin();
  });

  function checkForWin() {
    //checking length of data stacks 2 and 3. if they equal 4, then the player has won the game.
    if (
      $('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4
    ) {
      //update test to out You Won!
      $('#announce-game-won').text('You Won!');
    }

  }

  function isLegalMove($heldBlock, $targetStack) {

    if ( //puting a block down and the stack is empty, do it
      $targetStack.children().length === 0
    ) {
      return true;
    } else if (
      //there is block there, compare attributes
      $heldBlock.data('block') < $targetStack.children().last().data('block')
    ) {
      return true;
    } else {
      //this should tell the player that the move isn't legal because the last block in the selected stack is too small
      $('#announce-game-won').text('Not a legal move. Please try again');
      return false;
    }
  }

});
