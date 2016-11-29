"use strict";

$(document).ready(function() {
  // Put app logic here
  var $dataStack = $("[data-stack]");
  var $clickedStack;
  var $block = null;

  $dataStack.click(function(e){

    $clickedStack = $(this);

    // check to see if block exists and is true if so set the variable.
    if (!$block) {
      $block = $clickedStack.children().last().detach();
    } else if (isLegal($block, $(this).children().last())){
       checkForWin();
     }
  });

  function isLegal($start, $end) {

    console.log('start', $start.get(0));
    console.log('end', $end.get(0));
    console.log($clickedStack.get(0));
    console.log($clickedStack.children().length);
    
    if ($start.attr('data-block') < $end.attr('data-block') || $clickedStack.children().length === 0) {
      $block.detach();

      $clickedStack.append($block);
    
      $block = null;
      console.log("if block", $block);
    } else {
        alert("You cannot make that move");
    }
    $block = null;
    console.log("global block", $block);

  }

  function checkForWin(){
    console.log("Check for win");
    /*$dataStack.each(function(e) {
      console.log(e.get(0));
    })*/
    /*if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
     return $('#announce-game-won').text('You Won!');
    }*/
  }

});
