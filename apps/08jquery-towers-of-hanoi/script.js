'use strict';

$(document).ready(function() {
  // Put app logic here
  var $lastItemFrom = 0;
  var $block = null;


  $('[data-stack]').click(function() {

    //set $block to the last item on the clicked data-stack

    // var $lastItemTo = $(this).length;

    if ($lastItemFrom !== 1 && $(this).children().length !== 0) {

      $block = $(this).children().last();
      $block.detach();
      $lastItemFrom += 1;


    } else if ($lastItemFrom !== 1 && $(this).children().length === 0) {
      $('#announce-game-won').text("Select another stack");
      return;
    } else
    // &&  $block.data("block") < $(this).children().last().data("block") )
    {
      if (($(this).children().last().data("block")) === undefined || $block.data("block") < ($(this).children().last().data("block"))) {
        $('#announce-game-won').empty();
        // console.log($block.data());
        $lastItemFrom -= 1;
        // console.log("it works");
        $(this).append($block);
        $block = null;
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
