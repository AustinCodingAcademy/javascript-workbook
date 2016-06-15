'use strict';
var block = 0;

function isLegal(block, stack) {

  if (stack.children().length === 0 || parseInt((stack.children().last().attr('data-block'))) > parseInt(block.attr('data-block'))) {
    return true;
  }
  return false;
};

function checkForWin() {
  var gameWon = false;
  $('[data-stack]').each(function () {
    if ($(this).data('stack') !== 1 && $(this).children().length === 4) {$( '[data-stack]' ).off('click');
    gameWon = true;
  }
});
return gameWon;
}

$(document).ready(function() {

  $('[data-stack]').click(function () {
    if (block === 0) {
      block = $(this).children().last().detach();
    } else {
      if (isLegal(block, $(this))) {
        $(this).append(block);
        block = 0;
      }
      if (checkForWin()) {
        $('#announce-game-won').text('You Won!!');
      }
    }

  });
});
