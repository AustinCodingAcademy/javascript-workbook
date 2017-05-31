'use strict';

document.addEventListener('DOMContentLoaded', () => {



  let stack = document.querySelectorAll('[data-stack]');
  let rings = document.querySelectorAll('[data-block]');

  console.log(stack);
  console.log(rings);
  let ring = null;

  stack.forEach(pole => {pole.onclick = function(e){
//remove child, addchild and stacks[0].lastChild.dataset.block or something
      if(this.children.length !== 0 && ring === null){
        ring = this.removeChild(this.lastElementChild);
        }
        else if(this.children.length === 0 && ring != null){
           this.appendChild(ring);
           ring = null;
        }
        else if(ring != null && this.lastElementChild.getAttribute('data-block') > ring.getAttribute('data-block')){
         this.appendChild(ring);
         ring = null;
        }
        
    }
     });
   });
