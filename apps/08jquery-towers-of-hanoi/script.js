'use strict';

$(document).ready(function() {
  // spec 1: moving the blocks
  $('[data-stack]').click(function(){
    console.log ("blah blah blah");
    var $block = $(this).children().last().detach();
    if ($block != null) {
        $(this).click(function(){
          $('[data-stack]'.append($block);
        })
    }
    else {
      return false;
    };

    // spec 2: verify move


    // spec 3: check for win
  });
});
