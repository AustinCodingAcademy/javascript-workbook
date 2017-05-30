'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let stack1 = document.querySelector('[data-stack="1"]');
  let stack2 = document.querySelector('[data-stack="2"]');
  let stack3 = document.querySelector('[data-stack="3"]');

  let stacks = [stack1, stack2, stack3];
  let lastStartBlock = null;
  let lsbSize = null;
  let lebSize = null;



  document.querySelectorAll('[data-stack]').forEach(function(stack){
    stack.onclick = function(){

      if (this.lastElementChild && !lastStartBlock){
        // removes and stores the last block as a variable
        lastStartBlock = stack.removeChild(stack.lastElementChild);
        // converts the last block's size into a number to be compared, and stores it in a variable
        lsbSize = Number(lastStartBlock.getAttribute("data-block"));
        console.log(lsbSize);

      } else if (!this.lastElementChild || lsbSize < Number(this.lastElementChild.getAttribute("data-block"))){
          this.appendChild(lastStartBlock);
          checkForWin()
          lastStartBlock = null;
      }
    }

  });



  function checkForWin() {
    if(stack2.children.length === 4 || stack3.children.length === 4){
      document.getElementById('announce-game-won').innerText = 'You Won!';
      return true;
    }
    else {
      return false;
    }
  }


//   function checkForWin() {
//     if((stacks['b'].length === 4) || (stacks['c'].length === 4)) {
//       return true
//     }
//     else {
//       return false;
//     }
//
//   }
//
//   function towersOfHanoi(startStack, endStack) {
//     if(isLegal(startStack, endStack)) {
//       movePiece(startStack, endStack);
//       checkForWin();
//     }
//   }
//
});
