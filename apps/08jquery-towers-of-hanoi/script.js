'use strict';

// Stored global variable
var block = null;

$(document).ready(function() {
  // Put app logic here.
  $('[data-stack]').click(clickOfDataStack);
});

function clickOfDataStack(){
  
  // This data stack got clicked.
  if (block){

    // Stored local variables
    var lastBlockOfTheStack = $(this).children().last();
    var dataAttributeOfLastBlock = lastBlockOfTheStack.data("block");
    var dataAttributeOfBlockWeAreMoving = block.data("block");
    
    // This is an if statement deciding whether or not the move is legal. If so, the block is moved.
    if (dataAttributeOfLastBlock > dataAttributeOfBlockWeAreMoving || lastBlockOfTheStack.length === 0){
      $(this).append(block);
      block = null;
    } 
  }

  // The block is detached and stored.
  else {
    block = $(this).children().last().detach();
  }

  // After block is moved, we are checking to see if there is a win.
  checkForWin();
};

// This checks the length of stack 2 and 3 and whether or not each individually are equal to 4. If so, text is displayed notifying user of a win. 
function checkForWin(){
  if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4){
    $('#announce-game-won').text('You Won!');
  }
};
