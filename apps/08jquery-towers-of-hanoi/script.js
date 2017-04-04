'use strict';

// // selector variable for "data-stack" attr.
// var $stack = $('[data-stack]');
// // $block variable to store block starts as null
// var $block = null;

$(document).ready(function() {

  // selector variable for "data-stack" attr.
  var $stack = $('[data-stack]');
  // $block variable to store block starts as null
  var $block = null;

  // click listener for $stack
  $stack.click(function() {
    // variable to return all children in this stack
    var $stack_children = $(this).children();
    // variable to return the last child in this stack in variable $last_child
    var $last_child = $stack_children.last();
    // if $block is empty...
    if ($block === null && $last_child.length !== 0) {
      // ...detach $last_child from stack and store in variable $block
      $block = $last_child.detach();
    }
    // if $block contains a block...
    else if ($block !== null) {
      // variable to contain data attribute of $block
      var $dataAttribute = $block.data('block');
      // variable to contain data attribute of $last_child
      var $lastChildData = $last_child.data('block');
      // ...add the block to the end of the stack and set $block to null...
      if ($stack_children.length === 0 || $lastChildData > $dataAttribute) {
        $(this).append($block);
        $block = null;
      // ...and run checkForWin function
        checkForWin();
      }
    }
  });

  // function containing win conditions
  function checkForWin() {
    // variables containing lengths of stacks 2 and 3
    var $stack2 = $('[data-stack = "2"]').children().length;
    var $stack3 = $('[data-stack = "3"]').children().length;
    // if stacks 2 or 3 contain 4 blocks...
    if ($stack2 === 4 || $stack3 === 4) {
    // ...changed text of the following div to "You Won!"
      $('#announce-game-won').text("You won!");
    }
  }
  
});
