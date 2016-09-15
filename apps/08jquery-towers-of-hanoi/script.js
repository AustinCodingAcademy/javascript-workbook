'use strict';

$(document).ready(function() {

var $block = null;

  $('[data-stack]').click(function() {
    if ($block === null) {
      $block = $(this).children().last().detach();
    }
    else {
      $(this).append($block);
      $block = null;
    }
  });

});



//for next step remember Piero's notes in Slack and isLegal function from original ToH app
