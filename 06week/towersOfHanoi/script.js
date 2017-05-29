'use strict';

document.addEventListener('DOMContentLoaded', () => {



  let stack = document.querySelectorAll('[data-stack]');
  let rings = document.querySelectorAll('[data-block]');

  console.log(stack);
  console.log(rings);
  let ring = null;
<<<<<<< HEAD
  stack.forEach(pole => {cell.onclick = function(e){
=======
  stack.forEach( stacks => {stacks.onclick = function (e)  {
//remove child, addchild and stacks[0].lastChild.dataset.block or something
      if(this.length !== 0){
        if(ring === null){
        ring = stack[0].removeChild(stack[0].lastChild);
>>>>>>> 92ea904a1574c5647abc5bc87063c6cb8e241671

        }
        console.log(this.length)
        ring = this.lastChild;
        console.log(ring);

        }

      // else if ($(this).children().length === 0 || ($ring.data('block') < $(this).children().last().data('block') ))
      //  {
      //    $(this).append($ring);
      //    $ring = 'null';
      //    checkWin();
      //  }

     }


    if(this.length > 0){

    }
  }
)


});
