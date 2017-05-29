'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let holdMeBaby = null;

  document.querySelectorAll('[data-stack]').forEach ( stack => {
    stack.onclick = function() {
      if (!holdMeBaby) {
        holdMeBaby = this.removeChild(this.lastElementChild);
      } else if (this.childElementCount === 0 ||
        Number(holdMeBaby.getAttribute('data-block')) < Number(this.lastElementChild.getAttribute('data-block'))) {
          this.appendChild(holdMeBaby);
          holdMeBaby = null;
        }
        checkForWin();
    }
  });

  function checkForWin() {
    if ((document.querySelector('[data-stack="2"]').childElementCount === 4) ||
        (document.querySelector('[data-stack="3"]').childElementCount === 4)) {
          // alert('You Win!');
          document.getElementById('announce-game-won').textContent = 'You Win!!';
        }
  }
});
