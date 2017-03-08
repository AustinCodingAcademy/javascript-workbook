'use strict';

var $block = null;
$(document).ready(function() {
  //On Click for game play
  $('[data-stack]').on('click', function() {
    if ($block === 'null') {
      $block = $(this).children().last().detach();
    } else {
      if (
        //This will move the blocks
        $($block).data('block') < $(this).children().last().data('block') ||
        $(this).children().length === 0) {
        $(this).append($block);
        $block = null;
      }
    }
    //Checks to see if you have won  ..... What checks it each time after you have moved the block
    checkForWin();
  })

  function checkForWin() {
    //Will check to see if you have won
    if (
      $('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4
    ) {
      $('#announce-game-won').text('You have Won!');
    }
  }
});
