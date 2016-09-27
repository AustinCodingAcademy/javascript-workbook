'use strict';

$(document).ready(function() {

  var $stacks = $('[data-stack]');
  var $detached = {};
  var gameover = false;

  $stacks.click(move);
  function move() {
     if(gameover === false) {
        if($.isEmptyObject($detached)) {
           if(!($(this).children().length === 0)) {
           $detached = $(this).children().last().detach();
        }
     } else {
        if(dropDetached($(this), $detached)) {
           $detached = {};
   }
}
  checkForWin();
     } else {
        resetGame();
     }
 }
  function dropDetached($stack, $detached) {
     if(droppable($stack, $detached)) {
        $stack.append($detached);
        return true;
     } else {
        return false;
     }
  }
  function droppable($stack, $detached) {
     var $last_block = $stack.children().last();
      if(parseInt($detached.attr('data-block')) < parseInt($last_block.attr('data-block')) || $stack.child().length === 0) {
         return true;
      } else {
         return false;
      }
  }

  function checkForWin() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("You Won!");
      gameover = true;

    }
  }

});
