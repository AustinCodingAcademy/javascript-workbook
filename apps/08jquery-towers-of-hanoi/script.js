'use strict';

var $block = null;

$(document).ready(function() {
  $('[data-stack]').click(function() {
    if($block === null) {
      //acquiring last child
      var lastChild = $(this).children().last();
      if(lastChild.length !== 0) {
        $block = lastChild.detach();
      }
    }
    else {
      //acquiring last block
      var lastBlock = $(this).children().last();
      //acquiring values of last block and block being moved
      var lastBlockValue = lastBlock.data('block');
      var movingBlock = $block.data('block');

      //if stack is empty, place the block
      if ((movingBlock < lastBlockValue) || (lastBlock.length === 0)) {
        $(this).append($block);
        $block = null;
      }

      checkForWin(); 
    }
  })

  function checkForWin() {
    var $stackTwoLength = $("[data-stack='2']").length;
    var $stackThreeLength = $("[data-stack='3']").length;
    //checking to see if user won the game.
    if(($stackTwoLength === 4) || ($stackThreeLength === 4)) {
      ('div #announce-game-won').text("you won!");
      return true;
    }
  }

});