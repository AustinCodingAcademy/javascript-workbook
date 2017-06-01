'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let colorBlock = null;
    let colorBlockValue = null;

    document.querySelectorAll('[data-stack]').forEach(cell => {
      cell.onclick = function(event) {
        event.preventDefault();


        //The onclick will get all the blocks. and the value oof colorblock if your holding one
        let blocks = this.querySelectorAll('[data-block]');

        if (colorBlock !== null) {
          colorBlockValue = Number(colorBlock.getAttribute('data-block'));
        }

        let message = "";

        //if I dont have a block, then pick it up
        if (colorBlock === null) {
          colorBlock = blocks[blocks.length - 1];
          let lastBlockRemove = blocks[blocks.length - 1].remove();


  //If the next block is smaller. it will place block on the element you clicked. Then checks if you won
        } else if (this.childElementCount === 0 ||
          colorBlockValue < Number(this.lastElementChild.getAttribute('data-block')) ) {

            this.append(colorBlock);
            colorBlock = null;
            console.log(message);
            document.querySelector('#announce-game-won').innerText = message;
            if (checkWin()) {
              document.querySelector('#announce-game-won').innerText = "You won!";
            }
          } else {
            message = "Can't place " + colorBlockValue + " on top of " +
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
