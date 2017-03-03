'use strict';

$(document).ready(function() {
  // Put app logic here
  var pieceInHand = false;
  var $block = null;


  $('[data-stack]').click(function() {

    //clean up flag name and boolean



    // var $lastItemTo = $(this).length;

    if (!pieceInHand && $(this).children().length > 0) {

      $block = $(this).children().last(); //set $block to the last item on the clicked data-stack
      $block.detach(); //detach the $block from the data-stack
      pieceInHand = true; //change the value of lastItemFrom to skip to the else statement


    } else if (!pieceInHand && $(this).children().length === 0) {
      $('#announce-game-won').text("Select another stack");
      return;
    } else
    // &&  $block.data("block") < $(this).children().last().data("block") )
    {
      if ($(this).children().length === 0 || $block.data("block") < ($(this).children().last().data("block"))) {
        $('#announce-game-won').empty();
        // console.log($block.data());

        // console.log("it works");
        $(this).append($block);
        pieceInHand = false;

        checkForWin();

      } else {
        $('#announce-game-won').text("Cannot place a larger block on top of a smaller block.  Try again.");
      }
    }
  });

  function checkForWin() {
    if ($('[data-stack=2]').children().length === 4 || $('[data-stack=3]').children().length === 4) {
      $('#announce-game-won').text("You won!");
    } else {
      return;
    }
  };
});
