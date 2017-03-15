'use strict';

var block = null;
var stack = $('[data-stack]');

$(document).ready(function() {
  $('[data-stack]').click(stackWasClicked);
});

function stackWasClicked() {
  //IF BLOCK HAS SOMETHING IN IT WE ALREADY PICKED UP A BLOCK. 
  if (block !== null) {
    //BLOCK IS PICKED UP, EXECUTE THIS TO PUT IT BACK DOWN SOMEWHERE.
    var lastBlockofStack = $(this).children().last();
    var dataBlockAttrOfLastBlock = lastBlockofStack.data('block');
    var removedBlock = block.data('block');

    if (dataBlockAttrOfLastBlock > removedBlock || lastBlockofStack.length === 0) {
      $(this).append(block);
      block = null;
    }
  //ELSE I HAVENT PICKED ANYTHING UP AND I NEED TO PICK UP A BLOCK
  } 
  else {
    block = $(this).children().last().detach();
  }
  checkForWin();
}

function checkForWin() {
  if ($('[data-stack=2]').children().length === 4 || $('[data-stack=3]').children().length === 4) {
    $('.rainbow').text('YOU WON!');
  }
}