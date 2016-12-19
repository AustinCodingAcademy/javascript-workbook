'use strict';

$(document).ready(function() {
  // Put app logic here
  //var children = $('data-stack').children();
  //var lastChild = children.last();
  var dataStack = $('[data-stack]');
  var block = null;

  dataStack.click(function(){
    if (block === null){
      block = $(this).children().last().detach();
      //block.append(dataStack);
      // if (isLegal){
      //
      // }
    }
    else if (isLegal){
        $(this).children().append(block);
    }
  });
  // function isLegal(start, end) {
  //   if (start.data('block') > end.data('block')) {
  //     return true;
  //   }
  // }

});

// On click() of a [data-stack], detach() the last() of the children() and set it equal to a variable called block. Then, when another [data-stack] is click()ed, check if the block variable is assigned, if so, append the block to the stack and set block to null.

//Only move the block if the value of the data- block attribute is less than the last block of the stack, or if the stack is empty.

//Create a function checkForWin() that checks .forEach() stack and determines if one of the last two stacks has four [data-block]s. Run this function after every move. If you won, put the .text 'You Won! inside the div#announce-game-won element.




  //var selected = = $(this);
