'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  $('[data-stack]').click(function() {
    var $children = $(this).children();
    if ($block === null) {
      if ($children.length !== 0) {
        $block = $children.last();
        $block.detach();
      }
    }
    else {
      if ($children.length === 0) {
        $(this).append($block);
        $block = null;
      }
      else if (parseInt($block.data('block')) < parseInt($children.last().data('block'))) {
        $(this).append($block)
        $block = null;
      }
    }
    checkForWin();
  });
  function checkForWin() {
    $('[data-stack]').each(function() {
      var $children = $(this).children();
      if ($(this).data('stack') === 2 && $children.length === 4) {
        $('#announce-game-won').text("You Won!");
      }
      else if (($(this).data('stack') === 3) && ($children.length === 4)) {
        $('#announce-game-won').text("You Won!");
      }
    });
  };
});
