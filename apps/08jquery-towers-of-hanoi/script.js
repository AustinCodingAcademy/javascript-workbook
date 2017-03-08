'use strict';

// selector variable for "data-stack" attr.
var $stack = $('[data-stack]');
// $block variable to store block starts as null
var $block = null;

$(document).ready(function() {
  $stack.click(handleGetBlock);

});

// function to handle grabbing a block
function handleGetBlock() {
  $(this).click(function() {
    // variable to return all children in this stack
    var $stack_children = $(this).children();
    // variable to return the last child in this stack in variable "$last_child"
    var $last_child = $stack_children.last();
    // if there isn't a block currently stored...
    if ($block === null) {
      // ...detach $last_child from stack and store in variable "$block"
      $block = $last_child.detach();
    }
  });
}

// function handleMoveBlock() {
  //   if ($block !== null) {
  //     $stack.append($block);
  //     $block = null;
  //   };
  // }
