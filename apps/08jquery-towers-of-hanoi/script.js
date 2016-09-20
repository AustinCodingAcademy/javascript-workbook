'use strict';

$(document).ready(function() {

  // set up a function to declare a win. Simply added text to the div and alerted user congrats if there was 4 block in
  // stack 2 or 3.
    function checkForWin() {
      if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
        $('#announce-game-won').text('You won!');
        alert('Congrats!');
      }
    }

    // set the variable to null to start
    var block = null;
    $('[data-stack]').click(function() {
      // create a variable so it is easier to read
      var $children = $(this).children();

      // created an if statement to decide whether a block is assigned or not. If it is the detach the last block
      // from the stack
      if (block === null) {
        block = $children.last().detach();
      } // if it isn't then take add the block to another stack depending on if it is a legal move
      else {
        var blockValue = block.data('block');
        // another boolean is used to decide if it is a legal move. If a data-stack is empty then add OR
        // if the the value of the block inside the stack is greater than the block that you are 'holding' than add it.
        if ($children.length === 0 || $children.last().data('block') > blockValue) {
          $(this).append(block);
          block = null;
        } else {
          alert('Please make a legal move!')
        }
      }
      // check to see if there is a winner after every click.
      checkForWin();

    });

    $('#restart').click(function() {
      location.reload();
    })

})
