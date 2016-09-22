'use strict';

$(document).ready(function() {
  // spec 1: moving the blocks
  $('[data-stack]').click(function(){
    console.log ("blah blah blah");
    var $block = $(this).children().last();
    if ($block != null) {
        $(this).$('[data-stack]').append($block);
    }
    else {
      $block.detach();
    };   
  });
});
