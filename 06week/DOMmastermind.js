'use strict';

document.addEventListener('DOMContentLoaded'), () => {
//set initial global variables
  let block = null;
  let blockSize = null;
  let lastBlock = null;
  let lastBlockSize = null;
  const totalBlocks = document.querySelector('[data-stack="1"]').childElementCount;

  //START click functions
  document.querySselectorAll('[data-stack]').forEach(stack => {
      stack.onClick = function() {
        //function wide variables
        lastBlock = this.lastElementChild;
        lastBlockSize = (lastBlock ? Number(lastBlock.getAttribute('data-block')) : null);
      }
  }
}

//nothing held, nothing in stack
if (!block && !lastblock) {
  lastBlock === null;
  console.log('Invalid move: nothing to pick up');
}

//nothing held >> pick up last block
else if (!block) {
  console.log('No block, picking up last block');
  block = this.removeChild(lastBlock);blockSize = Number(block.getAttribute('data-block'));
  console.log(`${blockSize} held`);
}

//Check for last block size
else if (!lastBlock || lastBlockSize > blockSize){
  this.appendChild(block);
  console.log(`${blockSize} placed`);
  block = null;
  blockSize = null;
  checkWin();
}
