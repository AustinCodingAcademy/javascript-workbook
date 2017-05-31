'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    let stack = document.querySelectorAll('[data-stack]');
    let rings = document.querySelectorAll('[data-block]');
    let ring = null;

    stack.forEach(pole => {pole.onclick = function(e){
    if(this.children.length !== 0 && ring === null){
      ring = this.removeChild(this.lastElementChild);
        console.log(ring);
      }
      else if(ring != null){
         if(this.children.length === 0 || this.lastElementChild.getAttribute('data-block') > ring.getAttribute('data-block') ){
        this.appendChild(ring);
        ring = null;
        }
      else{
        console.log('Illegal Move!');
      }
    }
  }})
  })
