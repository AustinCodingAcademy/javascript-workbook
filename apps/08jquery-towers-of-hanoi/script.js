'use strict';
var $block = null;
$(document).ready(function () {
  // Put app logic here
    $('[data-stack]').click(function () {
      //picks up the block
      if (!$block){
        $block = $(this).children().last().detach();
        $('div#announce-game-won').empty();
      } 
      //puts down the block if holding the block
      else {
        if($(this).children().last().data('block')>$block.data('block') || $(this).children().length === 0){
          $(this).append($block);
          $block = null;
          checkForWin();
        }else {
          $('div#announce-game-won').text('That spot is invalid.');
        }
      }
    })
    function checkForWin() {
      if($('[data-stack="2"]').children().length ===4 ||$('[data-stack="3"]').children().length ===4){
        $('div#announce-game-won').text('You won!');
        return true;
      }else {
        return false;
      }
    }
});




//$('[data-stack="2"]').append($block)

// stack.children.last.date('block') > current block