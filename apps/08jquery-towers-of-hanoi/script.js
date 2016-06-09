'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = 0;
  $('[data-stack]').click(function() {
    if (block===0){
      $block = $('this').children().last().detach();
      }
      else {
        if($('this').attr('[data-block]') > ($('$block').attr('[data-block]'))) {
          $('this').append($block);
          $block = 0;
        }
      }
    });
  });
