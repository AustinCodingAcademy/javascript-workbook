'use strict';

$(document).ready(function() {
  // my code:
  var $block = null;
  var lastBlock = $(this).children().last().data('block');

// When you click a data-stack, (get references with data-stack attr)
// call the click function on elements from step 1.
// .click = registering a click.
// Detach last of children to equal var "block".
// var block = detached element - I want to call this "lastBlock"
// when another stack is clicked, checked to see if block is assigned.
// if not, do something else.
// set and assign are the same terminology.
// either allow or disallow the move. What is this in code?
// allow if empty? How do we determine if empty? Length.
// Get the last block off the stack.

  $('[data-stack]').on('click', function(){
    if(!$block){
      $block = $(this).children().last().detach();
    } else {
      var $children = $(this).children();
      var blockValue = $block.data('block');

      if($children.length === 0 ||
      $children.last().data('block') > blockValue){
        $(this).append($block);
        $block = null;
      } else {
        console.log('invalid move!!' );
      }

      function checkForWin(){
        if($('[data-stack="2"]').children().length === 4 ||
        $('[data-stack="3"]').children().length === 4){
          console.log("You Won!");
          $('#announce-game-won').text('You Won!');
        }
      }
      checkForWin();
    }
  });
});
