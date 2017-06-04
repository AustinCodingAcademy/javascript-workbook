'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let block = null;
  let blockSize = null;
  let lastBlock = null;
  let lastBlockSize = null;
  const totalBlocks = $('[data-stack="1"]').children();

  function checkForWin() {
    if($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      return("You Win!")
    }
  }

  function isLegal(endStack) {

    if (endStack.length === 0 ) {
      return true;
    }
    else {
      return false;
    }
  }

  $('[data-stack]').click(function(){
    let moving = $(this).children().last();


    if (block === null){
      block = moving.remove();
    }
    else {
      if(isLegal($(this).children())) {
        $(this).append(block);
        block = null;
      }
    }


  })
  // let moving = $('[data-stack]').children().last().remove();

  let move = $('[data-stack]').children().last().append()
});
