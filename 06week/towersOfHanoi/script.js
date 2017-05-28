'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // block will be the block we click on
  // blockWeight will evaluate the 'size' of each block
  let block = null;
  let blockWeight = null;

  document.querySelectorAll('[data-stack]').forEach(cell => {
    cell.onclick = function(event) {
      let blocks = this.querySelectorAll('[block]');

      if (block !== null) {
        blockWeight = Number(block.getAttribute('block'));
      }

      let msg = "";

      // we can only place a block on top of a bigger weight block
      // blockWeight has to be less than the 'number' of the last block in a stack
      if (block === null) {
        block = blocks[blocks.length - 1];
        let blockRemove = blocks[blocks.length - 1].remove();
      } else if (this.childElementCount === 0 ||
        blockWeight < Number(this.lastElementChild.getAttribute('block'))) {

        this.append(block);
        block = null;
        console.log(msg);
        document.querySelector('#announce-game-won').innerText = msg;
        if (checkForWin()) {
          document.querySelector('#announce-game-won').innerText = "You won!";
        }
      } else {
        msg = 'This move is not legal! Block should be smaller!';
        document.querySelector('#announce-game-won').innerText = msg;
      }
    }
  })

  // the only way to win is if all four blocks are either on the second or third stack2
  // we check for the amount of blocks on either, if there is four, return true
  function checkForWin() {
    let stack2 = (document.querySelector('[data-stack="2"]').childElementCount);
    let stack3 = (document.querySelector('[data-stack="3"]').childElementCount);
    if (stack2 === 4 || stack3 === 4) {
      return true;
    }
  }

})
