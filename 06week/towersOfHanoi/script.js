'use strict'
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let block = null;
  document.querySelectorAll('[data-stack]').forEach(stack => { //going through all the stacks and...
    stack.addEventListener('click', function() { //adding click listener function to each stack
      if (!block) { //if there is a block in the stack that is clicked on then...
        block = this.removeChild(this.lastElementChild); //the last block element in clicked on stack is removed
        //below is setting conditions if a stack is empty or if its resident block is less than the block ;ast removed then we append that block
      } else if (this.childElementCount === 0 || Number(block.getAttribute('data-block')) < Number(this.lastElementChild.getAttribute('data-block'))) {
        this.appendChild(block); //if conditionals from line just above are met then block is added to the end of that stack
        block = null; //block gets reset for next click event
      }
      checkForWin(); //run check for win function each time

    })
  })

  function checkForWin() {
    if ((document.querySelector('[data-stack="2"]').childElementCount === 4) || //if either stack 2
      (document.querySelector('[data-stack="3"]').childElementCount === 4)) { //or stack 3 has 4 blocks then the game is over
      return document.querySelector('#announce-game-won').innerText = "You Win!"; //alert for winning game
    }
  }

});
