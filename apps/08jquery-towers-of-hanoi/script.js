'use strict';

var $block = 0;

$(document).ready(function() {
  // Put app logic here

  $('[data-stack]').click(function() {
    if ($block===0){
      $block = $(this).children().last().detach();
      }
    else {
        if($(this).attr('[data-block]') > $block.attr('[data-block]')||$(this).children().length===0) {
          $(this).append($block);
          $block = 0;
        }
      }
  });
});
