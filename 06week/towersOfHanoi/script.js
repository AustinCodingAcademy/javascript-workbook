'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here

  //step 1: find the # of blocks => //how to get stuff from the DOM?
  const totalBlocks = document.querySelector('[data-stack]')
  let stacks = document.querySelectorAll('[data-stack]')
  let blocks = document.querySelectorAll('[data-block]')
  let yellow = $('[data-stack]').children[0]
  let red = $('[data-stack]').children[1]
  let green = $('[data-stack]').children[2]
  let blue = $('[data-stack]').children[3]
  //step 2: checkWin()

  function checkWin (){
      if (document.getElementById('stackTwo'.length) === 4 || document.getElementById('stackThree'.length) === 4){
        console.log('You have won the game')
      } else{
        //continue playing game
      }
  }

  //steps 3-5  are about arrays

  //step 3: manipulate index   put the divs in 2nd div to test if check for win function works.

  //step 4: move a block

  let ring = stacks[startStack].pop();
  function movePiece(startStack, endStack) {
    var ring = stacks[startStack].pop();
    stacks[endStack].push(ring);
    return stacks;
  };
  console.log(stacks);
  movePiece('a', 'c');
  console.log(stacks);
  //step 5: figure out when no block.
  //setp 6: figure out the rules
  //step 7: game function

//.push and .pop
});
