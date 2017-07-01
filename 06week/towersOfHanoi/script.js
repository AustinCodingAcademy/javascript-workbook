// 'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let stack = document.querySelectorAll('[data-stack]');
  let block = document.querySelectorAll('[data-block]');
  let ring = null;
  //listen to the stacks, everything happens on the click
  document.getElementById('reset').onclick = function(e){
    block.forEach(b =>{stack[0].appendChild(b)});
    document.getElementById('announce-game-won').innerText = '';
  }
  stack.forEach(pole => {
    pole.onclick = function (e) {
      //picking up a ring
      if (this.children.length !== 0 && ring === null) {
        ring = this.removeChild(this.lastElementChild);
        console.log(ring);
      } else if (this.children.length === 0 && ring != null) { // putting down a ring
        this.appendChild(ring);
        ring = null;
      } //casting the data-block to int for compare
      else if (parseInt(this.lastElementChild.getAttribute('data-block')) > parseInt(ring.getAttribute('data-block'))) {
        this.appendChild(ring);
        if (this.childElementCount === 4) { //didn't see the point in writing a function for the win.
          document.getElementById('announce-game-won').innerText = "You Won!"
        };
        ring = null;
      } else {
        console.log(this.lastElementChild.getAttribute('data-block'));
        console.log(ring);
        console.log('Illegal Move!');
      }
    }
  })
})
