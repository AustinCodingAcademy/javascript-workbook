'use strict';

// Step 3 - Check for win
// Create a function checkForWin() that checks .forEach() stack and determines if one of the last two stacks has four [data-block]s. Run this function after every move. If you won, put the .text 'You Won! inside the div#announce-game-won element.


$(document).ready(function() {

  function (setup) {
  // run this function one time

  };

  // Spec 1 - Moving blocks
  var $dataStack = $('[data-stack]');
  var $dataBlock = $('data-block');
  var $block = null;

  // On click() of a [data-stack]...
  $dataStack.click(movePiece);

  function(movePiece) {


    // Then, when another [data-stack] is click()ed, check if there is anything in the $block variable...
    // i.e. (if the block variable is assigned)...
    // if so, append the block to the stack and set block to null.
    if (!$block) {
      // $(this) gets the actual div that was clicked
      // detach() the last() of the children() and set it equal to a variable called block.
      var $dataBlock:last-child = $(this).detach();
      var $block = $dataBlock:last-child;
      } else {

        // this is the data-block attribute, i.e. in html data-block="100"
        var lastBlockOfStack = $('this').children().last();
        var dataBlockValue1 = $block.data('block');
        var dataBlockValue2 = lastBlockOfStack.data('block');

        // Spec 2 - Verify move
        // Only move the block if the value of the data-block attribute is less than...
        // the last block of the stack, or if the stack is empty.
        if ($dataBlockValue1 < dataBlockValue2 || $('this').children().length() === 0) {
          $(this).append($block);
          $block = null;
        };
      };
    };


  });



}
