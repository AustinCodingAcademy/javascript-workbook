'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    let stack = document.querySelectorAll('[data-stack]');
    let rings = document.querySelectorAll('[data-block]');
    let ring = null;

//listen to the stacks
    stack.forEach(pole => {pole.onclick = function(e){
      //picking up a ring
    if(this.children.length !== 0 && ring === null){
      ring = this.removeChild(this.lastElementChild);
        console.log(ring);
      }
      else if(ring != null){
         if(this.children.length === 0){
           this.appendChild(ring);
           ring = null;
         }
        else if (parseInt(this.lastElementChild.getAttribute('data-block')) > parseInt(ring.getAttribute('data-block'))) {
          this.appendChild(ring);
          ring = null;
        }
      else{
        console.log(this.lastElementChild.getAttribute('data-block'));
        console.log(ring);
        console.log('Illegal Move!');
      }
    }
  }})
  })
