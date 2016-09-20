'use strict';

var $block = null;
function checkForWin()  {
  //maximum size is 4
return ( $("[data-stack='2']").children().length >= 4 || $("[data-stack='3']").children().length >= 4) ;
}

$(document).ready( function() {

  $('[data-stack]').click( function (){
    var $children = $(this).children();
    var $last = $children.last();

    if  ($block === null) {
      //Pop the block off the stack and save it in memory
      //(**IF that memory space is 'null')
      $block = $last.detach();
    }
    else {
      if ($last.data('block') <= $block.data('block'))  {
        $('div#announce-game-won').text('(☞ ಥ益ಥ)☞ invalid move buddy').fadeOut(2000);
      }
      else {
        $(this).append($block);
        $('div#announce-game-won').text('');
        $block = null;
      }
    }
    if (checkForWin()) {
      $('div#announce-game-won').text('You Won!');
    }
  });
});
