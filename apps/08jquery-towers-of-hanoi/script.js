'use strict';
var $block = null;

// This function will execute the following code when everything in the html document has been loaded
$(document).ready(function() {
  var $stack = $('[data-stack]');
  var $stackTwo = $('[data-stack="2"]');
  var $stackThree = $('[data-stack="3"]');
  
  // This line of code selects the stack that has been clicked and when clicked, executes pieceWasClicked
  $stack.click(stackWasClicked);
});

// This function handles what will happen when a piece is clicked
function stackWasClicked() {
  
  // If the stack is not empty, the  code will execute
  if($block !== null) {
    // This line selects the last child (piece) in the stack
    var lastBlockOfStack = $(this).children().last();
    // This line selects the data attribute of the last piece
    var lastBlockDataAttribute = lastBlockOfStack.data("block");
    // This line sets $block.data("block") to the variable removedBlockDataAttribute
    var removedBlockDataAttribute =$block.data("block");

    // If the last block is greater than the removed block or the space is empty execute the following code:
    if(lastBlockDataAttribute > removedBlockDataAttribute || lastBlockOfStack.length === 0) {
      // This line attaches the last removed piece to the end of the stack that was clicked second
      $(this).append($block);
      // This line sets $block back to null
      $block = null;
    }
  }
  // If the stack is empty, move the piece
  else{
    $block = $(this).children().last().detach();
  }
  checkForWin();
}

// This function determines whether or not the length of the stack is 4 and, if so, displays the text "You Won!"
function checkForWin() {
  if($stackTwo.children().length === 4 || $stackThree.children().length === 4) {
        $('#announce-game-won').text('You Won!');
  }
}


