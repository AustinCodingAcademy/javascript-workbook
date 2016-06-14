'use strict';

var $block = 0;

$(document).ready(function() {
  // Put app logic here

  $('[data-stack]').click(function() {
    if ($block===0){
      $block = $(this).children().last().detach();
      }
    else {

        var blockSize = parseInt($block.attr('data-block'));
        var endSize = parseInt($(this).children().last().attr('data-block'));

        if(endSize > blockSize||$(this).children().length===0) {
          $(this).append($block);
          $block = 0;
        }
      }
  });
});
