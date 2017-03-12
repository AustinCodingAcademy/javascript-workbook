'use strict';
var block = null;

$(document).ready(function() {
  $('[data-stack]').click(play); 
});

//play towers of hanoi!
function play(){
  if (block !== null) { //if block is not empty, or if you have grabbed a block
    var playBlock = $(this).children().last(); 
    //makes the last block in the selected stack equal to playBlock
    var playBlockSize = playBlock.data("block");
    //Gets the block data from the last block in the selected stack
    var blockSize = block.data("block");
    //Gets the block data from the block you are moving
    if ($(this).children().length === 0){
    //if the length of the selected stack is 0, just add the block
      $(this).append(block);
      block = null;
    }
    else if (blockSize < playBlockSize) {
    //else if your block is less than the block in the stack you have selected
      $(this).append(block);
      block = null;
    }
  }
  else if (block === null) { //if block is empty, or if you haven't grabbed a block
    if ($(this).children().length > 0) { 
    //if the selected stack is not empty get the last block from the stack
      var playBlock = $(this).children().last();
      var playBlockSize = playBlock.data("block");
      block = playBlock.detach(); // get the last block from the stack
    }
  }
  checkForWin(); //run check for win every time you click  
}
//check for win!
function checkForWin(){
  //check if data-stack 2 has 4 blocks.
  if ($('[data-stack="2"]').children().length > 3){
    $('#announce-game-won').text('You Won!');
  }
  //check if data-stack 3 has 4 blocks.
  if ($('[data-stack="3"]').children().length > 3){
    $('#announce-game-won').text('You Won!');
  }
}
