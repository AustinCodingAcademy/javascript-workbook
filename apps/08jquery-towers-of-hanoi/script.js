'use strict';


$(document).ready(function() {

  // Step 1 - Moving blocks
  var $dataStack = $('[data-stack]');
  var $block = null;

  // On click() of a [data-stack]...
  $dataStack.click(movePiece);

  function movePiece() {
    // Then, when another [data-stack] is click()ed, check if there is anything in the $block variable...
    // i.e. (if the block variable is assigned)...
    // if so, append the block to the stack and set block to null.
    if ($block === null) {
      // $(this) gets the actual div that was clicked
      // detach() the last() of the children() and set it equal to a variable called block.
      $block = $(this).children().last().detach();

    } else {

      // this is the data-block attribute, i.e. in html data-block="100"
      var $lastBlockOfStack = $(this).children().last();
      var dataBlockValue1 = $block.data('block');
      var dataBlockValue2 = $lastBlockOfStack.data('block');

      // Step 2 - Verify move
      // Only move the block if the value of the data-block attribute is less than...
      // the last block of the stack, or if the stack is empty.
      if (dataBlockValue1 < dataBlockValue2 || $(this).children().length === 0) {
        $(this).append($block);
        // Run this function (the checkForWin function) after every move.
        // The checkForWin function is run after every time the block is moved to a new stack
        checkForWin();
        $block = null;
      };
    };
  };


  // Step 3 - Check for win
  // Create a function checkForWin() that checks .forEach() stack...
  // and determines if one of the last two stacks has four [data-block]s.
  var $dataStack2 = $('[data-stack="2"]');
  var $dataStack3 = $('[data-stack="3"]');

  function checkForWin() {
    if (($dataStack2.children().length === 4) || ($dataStack3.children().length === 4)) {
      // If you won, put the .text 'You Won! inside the div#announce-game-won element.
      // You won will be announced when 4 blocks are in stack 2 or 3, and after user clicks on another stack
      $('#announce-game-won').text('You Won!');
      return true;
    };
  };


});
