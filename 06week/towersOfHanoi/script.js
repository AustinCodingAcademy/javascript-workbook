'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let stack = document.querySelectorAll('[data-stack]');
  console.log(stack);
  let ring = null;
  stack.forEach(pole => {cell.onclick = function(e){

      if(ring === 'null'){
        ring = this.children().last().detach();
        console.log($ring);
        console.log($(this).children().length);
        }

      else if ($(this).children().length === 0 || ($ring.data('block') < $(this).children().last().data('block') ))
       {
         $(this).append($ring);
         $ring = 'null';
         checkWin();
       }

     }


    if(this.length > 0){

    }
  }
))
  );
