'use strict';

$(document).ready(function() {
  var $block = null;

  function checkForWin() {
    $('[data-stack]').each(function() {
      var $stack = $(this);
      if($stack.data('stack') > 1 && $stack.length === 4) {
        $('#announce-game-won').text('You Won!');
      }
    })
  }

  $('[data-stack]').click(function() {
    var $children = $(this).children();
    if($block === null) {
      $block = $(this).children().last().detach();
    }
    else {
      if(parseInt($children.last().attr('data-block')) > parseInt($block.attr('data-block')) || $children.length === 0) {
        $(this).append($block);
        $block = null;
      }
    }
    checkForWin();
  });
});
