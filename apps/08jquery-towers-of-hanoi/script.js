'use strict';

$(document).ready(function() {
// Put app logic here

$('[data-stack]').click(function() {

  var $block = $(this).children().last(); //set $block to the last item on the clicked data-stack
  var $lastItemFrom = $(this).length;
  var $lastItemTo = $(this).length;

  if ($lastItemFrom != '0') {
    $block.detach();
  }

  else if ($block != '' && $lastItemTo === '0' || $block.data() < $(this).children().last().data()) {
    // if ($block != '') {
    $(this).append($block);
    $block = null;
    // }
  }
});
});
