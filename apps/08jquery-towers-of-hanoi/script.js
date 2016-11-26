"use strict";

$(document).ready(function() {
  // Put app logic here
  var $dataStack = $("[data-stack]");
  var $clickedStack;
  var $block = null;

  $dataStack.click(function(e){

    $clickedStack = $(this);

    if (!$block) {
      $block = $clickedStack.children().last().detach();
    } else {
       $clickedStack.append($block);
       $block = null;
       checkForWin();
    }

    function checkForWin(){
      if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
       $('#announce-game-won').text('You Won!');
      }
    }
  });
});
