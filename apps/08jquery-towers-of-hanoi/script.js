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

//use .this for data stack to select that specific stack since there are 3
// .foreach
