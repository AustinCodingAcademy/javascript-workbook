'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // set initial global variables
  let block = null;
  let blockSize = null;
  let lastBlock = null;
  let lastBlockSize = null;
  const totalBlocks = document.querySelector('[data-stack="1"]').childElementCount;
  console.log(totalBlocks);
  // START click functions
  document.querySelectorAll('[data-stack]').forEach(stack => {
    stack.onclick = function() {
      // function wide variables
      lastBlock = this.lastElementChild;
      lastBlockSize = (lastBlock ? lastBlock.getAttribute('data-block') : null);
      // nothing held, nothing in stack
      if (!block && !lastBlock) {
        lastBlock = null;
        console.log('Invalid move: nothing to pick up');
      }
      // nothing held >> pick up last block
      else if (!block) {
        console.log('No block, picking up last block');
        block = this.removeChild(lastBlock);
        blockSize = block.getAttribute('data-block');
        console.log(`${blockSize} held`);
      }
      // check for last block size >> place block
      else if (!lastBlock || lastBlockSize < blockSize){
        this.appendChild(block);
        console.log(`${blockSize} placed`);
        block = null;
        blockSize = null;
        checkWin();
        console.log('Nothing held');
      }
      // block held, bigger than last block
      else {
        console.log('Invalid move: block held larger than last block');
      }
    }
  });
  // check winner
  function checkWin() {
    let lastLength = document.querySelector('[data-stack="3"]').childElementCount;
    if (lastLength && lastLength === totalBlocks) {
      document.getElementById('announce-game-won').innerHTML = 'You win!';
    }
  }
});
