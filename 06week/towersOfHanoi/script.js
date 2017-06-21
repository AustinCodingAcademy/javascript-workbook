'use strict';

document.addEventListener('DOMContentLoaded', () => {

  let blockheld = null;
  let blockheldValue = null;

  document.querySelectorAll('[data-stack]').forEach(cell => {
    cell.onclick = function(event) {
      event.preventDefault();

      // on click of data-stack get:
      // 1)all data-blocks 2)value of blockheld if holding block
      let blocks = this.querySelectorAll('[data-block]');

      if (blockheld !== null) {
        blockheldValue = Number(blockheld.getAttribute('data-block'));
      }

      let message = "";

      //if no block in hand, pick it up
      if (blockheld === null) {
        blockheld = blocks[blocks.length - 1];
        let lastBlockRemove = blocks[blocks.length - 1].remove();

        //with block in hand, if ("smaller()"), then append block, and check for win
      } else if (this.childElementCount === 0 ||
        blockheldValue < Number(this.lastElementChild.getAttribute('data-block')) ) {

        this.append(blockheld);
        blockheld = null;
        console.log(message);
        document.querySelector('#announce-game-won').innerText = message;
        if (checkWin()) {
          document.querySelector('#announce-game-won').innerText = "You won!";
        }
      } else {
        message = "Can't place " + blockheldValue + " on top of " +
          Number(this.lastElementChild.getAttribute('data-block')) + " ";
        document.querySelector('#announce-game-won').innerText = message;
      }
    }
  });

  function checkWin() {
    let total2 = (document.querySelector('[data-stack="2"]').childElementCount);
    let total3 = (document.querySelector('[data-stack="3"]').childElementCount);
    if (total2 === 4 || total3 === 4) {
      return true;
    }
  }
});
