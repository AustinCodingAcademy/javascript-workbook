'use strict';

//Below is required to start the game and get the document ready
$(document).ready(function() {
  //Below is the variable we will use to define the css selector
  var $dataStacks = $('[data-stack]');
  var $block = null;
  //Below is the click method, which allows the user to play the game
  $dataStacks.click(function() {
    if ($block) {
      var $endStack = $(this);
      var $lastBlock = $(this).children().last();

      //This checks to see if the move is legal and if it is, it will apend the block
      if ($block.data('block') < $lastBlock.data('block') || $endStack.children().length === 0) {
        $endStack.append($block);
      }
      //This will detach the block and add it to the end of the block
    } else {
      $block = $(this).children().last().detach();
    }
    //This will check for a win after every click (move)
    checkForWin();
  });
  //Below are the parameters that define a win.
  function checkForWin() {
    var middleLength = $('[data-stack="2"]').children().length;
    var lastLength = $('[data-stack="3"]').children().length;

    //Display winning message if middle or last stack is four blocks long
    if (middleLength === 4 || lastLength === 4) {
      $('#announce-game-won').text('You Won!');
    }
  }

});
