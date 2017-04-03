'use strict';
var block = null;
$(document).ready(function() {
  // Put app logic here
  //get a piece
  
  $('[data-stack]').click(dataStackWasCLicked);
   

});

function dataStackWasCLicked() {
  
   if (block) {
     //getting the last block
     var endBlock = $(this).children().last();
     //setting it to the last block on the stack
     var dataBlockAttribute = endBlock.data('block');
     //var to see if there is a block in the stack
     var blockdata = block.data('block'); 
     
     //if the last block in the stack is larger than the picked up block or the block being moved to is null
     if(dataBlockAttribute > blockdata || endBlock.length === 0) {
       //move the block
       $(this).append(block);
       //set the block back to null
       block = null;
       //seeing if the player won
       checkForWin();
     }
   } 
   else {
     //picking up the block
     block = $(this).children().last().detach();
     
  };
}; //<--- Last } in dataStackWasCLicked

function checkForWin() {
   var checkStack2 = $('[data-stack="2"]').children().length;
   var checkStack3 = $('[data-stack="3"]').children().length;

   //seeing if the other two stacks get all the blocks
  if (checkStack2 === 4 || checkStack3 === 4) {
    //let them know they won
    $('#announce-game-won').text("You Won!");
  }
};