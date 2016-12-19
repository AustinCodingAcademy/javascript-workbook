'use strict';

$(document).ready(function() {
  var block = null;

  $('[data-stack]').click(function() {
    if (!block) {
      block = $(this).children().last().detach();
    } else {
      if ($(this).children().last().data('block') > block.data('block') || $(this).children().last().data('block') == undefined) {
        $(this).append(block);
        block = null;
      }
    }
    if (checkForWin()) {
      $('#announce-game-won').text('you won!');
    }
  })
})
function checkForWin() {
  return ($('[data-stack=2]').children().length === 4) || ($('[data-stack=3]').children().length === 4)
}
