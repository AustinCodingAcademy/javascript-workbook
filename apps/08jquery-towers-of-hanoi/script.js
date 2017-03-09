'use strict';

var block = null;

$(document).ready(function() {
  // Put app logic here
  $('[data-stack]').click(clickOfDataStack);
});

function clickOfDataStack(){
  // this data stack got clicked
  
  if (block){
    var lastBlockOfTheStack = $(this).children().last();
    var dataAttributeOfLastBlock = lastBlockOfTheStack.data("block");
    var dataAttributeOfBlockWeAreMoving = block.data("block");
    
    if (dataAttributeOfLastBlock > dataAttributeOfBlockWeAreMoving || lastBlockOfTheStack.length === 0){
      $(this).append(block);
      block = null;
    }
  } else {
      block = $(this).children().last().detach();
  }
}
