'use strict';

$(document).ready(function() {
  // Put app logic here
  var allStacks = 'div[data-stack]';
  var block = null;

  function checkForWin(){
    if (($(this).data('stack') > 1) && ($(this).children().length) === 4){
      $('#announce-game-won').text('You Won!');
    }
  }

  $(allStacks).click(function(){
    var $children = $(this).children();
    if (block === null){
      if ($(this).children().length > 0) {
        block = $(this).children().last().detach();
      }
    } else {
      var $blockData = $(block).data('block');
      var $targetBlockData = $(this).children().last().data('block');

      if ($children.length === 0 || ($blockData < $targetBlockData)){

        $('#announce-game-won').text('');
        $(this).append(block);
        checkForWin();
        block = null;
      } else {
        $('#announce-game-won').text('Invalid Move. Try again...');
      }
    }
  });
});
