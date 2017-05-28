'use strict';

document.addEventListener('DOMContentLoaded', () => {

  function movePiece(startStack, endStack) {
    // Your code here
    let block = stacks[startStack].pop();
    stacks[endStack].push(block);
  }

  //defines legal moves. if a column is empty, any block can be moved there.
  //if a column already contains a block that is greater than the block being moved into it, it will be rejected
  function isLegal(startStack, endStack) {
    if ((stacks[endStack].length === 0) || ((stacks[endStack][stacks[endStack].length - 1]) > (stacks[startStack][stacks[startStack].length -1]))) {
      return true;
    } else {
      // return false;
      console.log("Sorry, you can't do that!");
    }
  }
  //checks for winning move of columns b or c containing all blocks in legal order.
  function checkForWin(startStack, endStack) {
    if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
      return true;
      console.log("You win!")
    } else {
      return false;
    }
  }

  //calls for game to be played if moves are legal, then blocks can be moved, columns are checked for win
  function towersOfHanoi(startStack, endStack) {
    if(isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
    }
    checkForWin();
  }

});
