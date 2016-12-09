'use strict';

$(document).ready(function() {
  // Put app logic here

  var block = null;
  var towerHeight = 4;

  $('[data-stack]').click(function() {

    if (block && ($(this).children().last().data('block') > block.data('block') || $(this).children().length === 0)) {
      //Put down
      $(this).append(block);
      block = null;
      checkForWin();
    } else {
      if (block === null) {
        //Pick up
        block = $(this).children().last().detach();
      }
    }
  });



  function checkForWin() {
    if ($('[data-stack=2]').children().length === towerHeight) {
      $('#announce-game-won').text("You Won!");
    }
    if ($('[data-stack=3]').children().length === towerHeight) {
      $('#announce-game-won').text("You Won!");
    }
  };
});
