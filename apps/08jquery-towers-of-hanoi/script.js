'use strict';

$(document).ready(function() {
  // Declare initial variables 
  var block = null;
  var validMove = false;
  var secondBlock = false; 
  var originalStack = null;
  // var differentBlock = false;
  $('[data-stack]').click(function() {
    // check if this is the second move 
    if (secondBlock) {
      // check if there is any block in the stack 
      if ($(this).children().length !== 0) {
         // fetch the size of the blocks 
         var numOfBlockStack = parseInt(block.attr("data-block"));
         var numOfChildrenStack = parseInt($(this).children().last().attr("data-block"));
         // determine if the block size is bigger than the last one in the stack 
         if (numOfBlockStack > numOfChildrenStack) {
             // append the stack 
            //  originalStack.append(block);
            //  // nullify the original stack 
            //  originalStack = null;
             // pop out the error message 
             alert("Invalid move!");
             // nullify other variables 
            //  secondBlock = false;
             validMove = false;
         }
         else {
             validMove = true;
         }
     }
     else {
        validMove = true;
     }
    if (validMove){
      // add the block to the end of the stack
      $(this).append(block);
      // nullify the block object 
      block = null;
      secondBlock = false;
      // call the check win function 
      checkWin();
    }
  }
   else {
      if ($(this).children().length !== 0) {
        // fetch the original stack 
        originalStack = $(this);
        // get the block that is going to be removed 
        block = $(this).children().last().detach(); 
        // switch to the second block 
        secondBlock = true;
      }
    }
  });
});

function checkWin() {
  // loop through all three data stacks
  $('[data-stack]').each(function() {
  // check if any stack has four blocks 
  if (($(this).children().length === 4) & ($(this).data("stack") !== 1)) {
      // print out the win message 
      $("#announce-game-won").text("You Won!");
      // validMove = false;
    }
  });
}
