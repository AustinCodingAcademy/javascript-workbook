'use strict';

$(document).ready(function() {
  var $block = null;

  function checkForWin(){
    if($('div[data-stack="2"]').children().length === 4 || $('div[data-stack="3"]').children().length === 4) {
      $('div#announce-game-won').text('You Won!');
    }
  }

  $('[data-stack]').click(function() {
    if(!$block) {
      $block = $(this).children().last().detach()
    }else{
      var $lastChild = $(this).children().last();
      if($(this).children().length === 0 ||  $lastChild.data('block') > $block.data('block')) {
        $(this).append($block);
        checkForWin();
        $block = null;
      }
    }

  });
});
