'use strict';

var block = null;

$(document).ready(function() {
  $('[data-stack]').click(stackWasClicked);
});

function stackWasClicked() {
  //IF BLOCK HAS SOMETHING IN IT WE ALREADY PICKED UP A BLOCK. 
  if (block) {    //ADDED  !== NULL) {
    //BLOCK IS PICKED UP, EXECUTE THIS TO PUT IT BACK DOWN SOMEWHERE.
    var lastBlockofStack = $(this).children().last();
    var dataBlockAttrOfLastBlock = lastBlockofStack.data('block');
    var dataAttrOfRemovedBlock = block.data('block');

    if (dataBlockAttrOfLastBlock > dataAttrOfRemovedBlock || lastBlockofStack.length === 0) {
      $(this).append(block);
      block = null;
    }
  //ELSE I HAVENT PICKED ANYTHING UP AND I NEED TO PICK UP A BLOCK
  } 
  else {
    block = $(this).children().last().detach();
  }
}