'use strict';


var $block = null;
$(document).ready(function() {
  // Put app logic here


  //Setting up app to respond to click
  $('[data-stack]').on('click', function() {
    $('#announce-game-won').text('')
    if ($block === null) {


      //Detaching the blocks from the original stack
      //Removes data-stack from one div
      $block = $(this).children().last().detach()
    } else {
      //Appends the block to another row
      //First, checks if move can be done according to size
      if (
        $($block).data('block') < $(this).children().last().data('block') ||
        $(this).children().length === 0) {
        $(this).append($block);
        $block = null;
      } else {
        $('#announce-game-won').text('The block is too big! Try again!');
      }

    }
    //Performs function which checks stacks 2 & 3 for four blocks in their rows
    checkForWin();
  })

  function checkForWin() {
    //Set up to check for four blocks in either the second or the 3rd rows(data-stacks)
    //If there is 4 in one of those stack and all moves are legal, the player has won!!!!
    if (
      //Checks second row for 4 blocks
      $('[data-stack="2"]').children().length === 4 ||
      //Checks third row for 4 blocks
      $('[data-stack="3"]').children().length === 4
    ) {
      //Updates the text inside div#announce-game-won to say You won when someone has length of four in row 2 or 3
      $('#announce-game-won').text('You Won!');
    }
  }
});
