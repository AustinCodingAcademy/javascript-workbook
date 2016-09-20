'use strict';

$(document).ready(function() {
  // spec 1: moving the blocks
  $('div[data-stack]').click(function(){
    var $block = $(this).$('div[data-stack]').children().last();
    if ($block.length > 0) {
      $(this).append($block);
      $block = null;
    }
    else {
      
    }
  })
}
