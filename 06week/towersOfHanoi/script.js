'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let stacks = document.querySelectorAll('[data-stack]');
  let grabbedBlock = null;
  let grabbedBlockSize = null;
  let lastBlockSize = null;

  stacks.forEach((stack) => {
    stack.onclick = function(e) {
      let last = this.lastElementChild;
      if (last && !grabbedBlock) {
        lastBlockSize = Number(last.dataset.block);
        grabbedBlock = this.removeChild(last);
        grabbedBlockSize = Number(grabbedBlock.dataset.block);
      } else if (!last && grabbedBlock) {
        this.appendChild(grabbedBlock);
        grabbedBlock = null;
        grabbedBlockSize = null;
      } else if (last && grabbedBlock) { // complicated
        lastBlockSize = Number(last.dataset.block);
        if (grabbedBlockSize > lastBlockSize) {
          alert('Try Again!');
        } else {
          this.appendChild(grabbedBlock);
          grabbedBlock = null;
          grabbedBlockSize = null;
        }
      } else if (!last && !grabbedBlock) {
      }
      // check for win
      if (document.querySelector('[data-stack="2"]').children.length === 4 || document.querySelector('[data-stack="3"]').children.length === 4) {
      document.querySelector('#announce-game-won').innerHTML = 'Congrats!';
    }
    };
  });
});
