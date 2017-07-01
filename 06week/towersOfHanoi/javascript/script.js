'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let blockHeld = null;

  document.querySelectorAll('[data-stack]').forEach((stack) => {
    stack.addEventListener('click', function() {
      if (blockHeld === null) {
        let block = stack.lastElementChild;
        blockHeld = block;
        block.remove();
      } else if (isEmpty(stack) || isLegal(stack)) {
        stack.appendChild(blockHeld);
        blockHeld = null;
      }
      if (checkForWin(stack)) {
        document.querySelector('#announce-game-won').innerText = "Winner!!";
      }
    })
  })

  function isLegal(stack) {
    return (blockHeld.getAttribute('data-block') < stack.lastElementChild.getAttribute('data-block'))
  }

  function isEmpty(stack) {
    return stack.childElementCount === 0;
  }

  function checkForWin(stack) {
    return stack.childElementCount === 4 && stack.getAttribute('data-stack') != 1
  }

})
