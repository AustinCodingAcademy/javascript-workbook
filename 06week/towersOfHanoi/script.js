'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here

  let block = null;

  document.querySelectorAll('[data-stack]').forEach ( stack => { //target each data-stack
    stack.addEventListener('click', function() { //when it is clicked
      if (!block) { //if block/blocks exist
        block = this.removeChild(this.lastElementChild); //remove the last block and assign it to a variable
      } else if (this.childElementCount === 0 || Number(block.getAttribute('data-block')) < Number(this.lastElementChild.getAttribute('data-block'))) {
        this.appendChild(block); //add block as last child
        block = null; //reset block value
      }
      checkForWin();
    }) //'click' function ends
  }) //forEach ends

  function checkForWin() {
    if ((document.querySelector('[data-stack="2"]').childElementCount === 4) || //if there is 4 blocks on stack-2 or
        (document.querySelector('[data-stack="3"]').childElementCount === 4)) { //if there is 4 blocks on stack-3
      return document.querySelector('#announce-game-won').innerText === 'You win!'; //return this text on screen
    }
  }//checkForWin ends

}); //main method ends here
