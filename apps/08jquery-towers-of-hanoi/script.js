'use strict';

$(document).ready(function() {
  var $block = null;
  $('[data-stack]').click (function () {
    var $children = $(this).children();
    if ($block === null) {
      if ($children.length > 0) {
        $block = $children.last().detach();
      }
    }
    else {
      if ($children.length === 0 || $children.last().data('block') > $block.data('block')) {
        $(this).append($block);
        $block = null;
      }
    }
    checkForWin();
  });

  function checkForWin() {
     $('[data-stack]').each(function() {
      if (($(this).data('stack') > 1) && ($(this).children().length === 4)) {
            $('#announce-game-won').text('You Won Pomsky!');
      }
    });
  }
});
