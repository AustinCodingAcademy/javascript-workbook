'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let stacks = document.querySelectorAll('[data-stack]');
  let activeBlock = null;
  let nextBlock = null;

  stacks.forEach((stack) => {
    stack.addEventListener('click', onStackClick);
  });

  function onStackClick(e) {
    //debugger;
    if (activeBlock) {
      nextBlock = e.target.children[e.target.children.length - 1];
      console.log(nextBlock);

      let activeBlockValue = activeBlock.getAttribute('data-block');
      let nextBlockValue = nextBlock === undefined ? undefined : Number(nextBlock.getAttribute('data-block'));

      if (activeBlockValue > nextBlockValue) {
        alert(`Invalid move. Try again.`);
        activeBlock = null;
      } else {
        e.target.appendChild(activeBlock);
        activeBlock = null;

        // check win
        if (document.querySelector('[data-stack="2"]').children.length === 4 || document.querySelector('[data-stack="3"]').children.length === 4) {
          document.querySelector('#announce-game-won').innerHTML = `You've won!`;
        }
      }

      return;
    }

    activeBlock = e.target.children[e.target.children.length - 1];
    console.log(activeBlock);
  }
});
