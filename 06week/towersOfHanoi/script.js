'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // set initial global variables
  let block = null;
  let blockSize = null;
  let lastBlock = null;
  // START click functions
  document.querySelectorAll('[data-stack]').forEach(stack => {
    stack.onclick = function() {
      // function wide variables
      let blocks = this.querySelectorAll('[data-block]');
      console.log(mkArr(this));
      console.log(blocks);
      console.log(mkArr(blocks));
      console.log(typeof(blocks));
      console.log(blocks.isArray);
      lastBlock = blocks[blocks.length - 1].getAttribute('data-block');
      // nothing held, nothing in stack
      if (!block && !lastBlock) {
        lastBlock = null;
        console.log('Invalid move: nothing to pick up');
      }
      // nothing held >> pick up last block
      else if (!block) {
        block = blocks.pop();
        blockSize = block.getAttribute('data-block');
        console.log(`${blockSize} held`);
      }
      // check for last block size >> place block
      else if (!lastBlock || blockSize < lastBlock) {
        blocks.push(block);
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
    if (document.getElementById('[data-stack="3"]').length === 4) {
      document.getElementById('announce-game-won').innerHTML = 'You win!';
    }
  }
  function mkArr(array) {
    let returnArray = [];
    for (var key in array) {
      returnArray.push(array[key]);
    }
    return returnArray;
  }
});
