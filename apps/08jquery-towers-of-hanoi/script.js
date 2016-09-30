'use strict';

$(document).ready(function() {
  //&& parseInt($('[data-stack]').attr("data-stack")) > 1
  //Put app logic here
  function checkForWin() {
    console.log("checking for win");
    //$('[data-stack]').each(function()
      //console.log($('[data-stack]').children().length + " how many children");
      //$('[data-stack]').children().length is returning 4
      //my jquery object is incorrect
      //or my each is wrong
      //$(this).data('stack')
      //  if($('[data-stack]').children().length === 4)
      //($(this).data('stack') === 3).children().length === 4)
      if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
          $("#announce-game-won").text('You Won!');
          console.log("I won");
        }
    };
  //set variable block equal to nothing.  It will store the blocks you want to move.

  var block = null;
  $('[data-stack]').click(function(){
    console.log("click first");
    var $dataStack = $(this);
    //move the last block on the stack
    //if variable block is false, set variable block equal to the last block in data stack
    if (!block) {
      //check to see if stack has children, if it does, assign to block
      if ($dataStack.children().length > 0) {
        block = $dataStack.children().last().detach();
        //returns a jquery object, whether are children or not, so check for the children first
      }

    }
    else {
      if ($dataStack.children().length === 0 || (parseInt(block.attr("data-block")) < parseInt($dataStack.children().last().attr("data-block")))) {
        $dataStack.append(block);
        block = null;
      }
      //stacks are empty
      //or if the block is smaller
    }
    checkForWin();
  });
})
