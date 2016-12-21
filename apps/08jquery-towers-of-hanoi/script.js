'use strict';

$(document).ready(function() {
  // Put app logic here
  /*SPEC ONE 
  On click() of a [data-stack], detach() the last() of the children() and set it equal to a variable called block. Then, when another [data-stack] is click()ed, check if the block variable is assigned, if so, append the block to the stack and set block to null. */

  var $block = null;

  $('[data-stack]').click(function(){
    if(!$block){
      $block = $(this).children().last().detach();
    }
    else {
      $(this).append($block);
      $block = null;
    }

  });

  /* SPEC TWO
  Only move the block if the value of the data- block attribute is less than the last block of the stack, or if the stack is empty.*/

  function isLegal(blockMove, blockLand){
    var $blockMoveValue = $('blockMove');
    var $blockLandValue = $('blockLand');
     if($blockMoveValue.data('block') > $blockLandValue.data('block')){
       return false;
     }
    }

  /*SPEC THREE
  Create a function checkForWin() that checks .forEach() stack and determines if one of the last two stacks has four [data-block]s. Run this function after every move. If you won, put the .text 'You Won! inside the div#announce-game-won element.*/

  function checkForWin(){
   if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text('You Won!');
      }
    }


});

