'use strict';

$(document).ready(function() {
  // Put app logic here
  var pieceInHand = false;
  var $block = null;

  //processes the following function when clicking a data-stack
  $('[data-stack]').click(function() {

    //If pieceInHand is false and the data-stack contains
    //children, or blocks, run the if statement to detach
    //the last block on the data-stack

    if (!pieceInHand && $(this).children().length > 0) {
      //set $block to the last item on the clicked data-stack
      $block = $(this).children().last();
      //detach the $block from the data-stack
      $block.detach();
      //change the value of pieceInHand to true to skip to the else statement
      pieceInHand = true;

      //If pieceInHand is false and the data-stack doesn't contain
      //children, or blocks, run the else if statement to tell the user to
      //select a different data-stack

    } else if (!pieceInHand && $(this).children().length === 0) {
      //update the text of the announce-game-won id
      $('#announce-game-won').text("That one's empty, select a different one.");
      return;

      //If pieceInHand is true run the else statement
    } else

    {
      //if the data-stack doesn't contain children,
      //OR the existing block on the stack is bigger than the
      //the one being held by $block, append $block to the data-stack

      if ($(this).children().length === 0 || $block.data("block") < ($(this).children().last().data("block"))) {
        //empty the announce-game-won.  This in case the user selects an
        //empty data-stack, or places the block on top of a smaller block
        $('#announce-game-won').empty();
        //append $block to the data-stack
        $(this).append($block);
        //change the value of pieceInHand to false to reset to the if statement
        pieceInHand = false;
        //run the checkForWin function
        checkForWin();

        //if the data-stack contains children,
        //OR the existing block on the stack is smaller than the
        //the one being held by $block, run the else statement
      } else {
        //update the text of the announce-game-won id
        $('#announce-game-won').text("Cannot place a larger block on top of a smaller block.  Try again.");
      }
    }
  });
  //the checkForWin function will check data-stacks 2 and 3 after appending a
  //block, to check for 4 children
  function checkForWin() {
    //if the data-stacks 2 or 3 contain 4 children, run the if statement
    if ($('[data-stack=2]').children().length === 4 || $('[data-stack=3]').children().length === 4) {
      //update the text of the announce-game-won id
      $('#announce-game-won').text("You won!");
      //if the data-stacks 2 or 3 do not contain 4 children,
      //run the else statement.
    } else {
      return;
    }
  };
});
