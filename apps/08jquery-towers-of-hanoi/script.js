'use strict';

$(document).ready(function() {

  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text('You won!');
    }
  }

  var $block = null;

  $('[data-stack]').click(function() {

    var $children = $(this).children();

    if ($block === null) {
      $block = $children.last().detach();
    }
    else {

      var blockValue = $block.data('block');

      if ($children.length === 0 || $children.last().data('block') > blockValue) {
        $(this).append($block);
        $block = null;
      }
      else {
        console.log("That's not a legal move. Please try again.");
      }
    }
    checkForWin();
  });

});
