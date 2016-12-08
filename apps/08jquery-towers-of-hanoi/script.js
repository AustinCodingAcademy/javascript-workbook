'use strict';

$(document).ready(function () {
  //Spec 1 - Moving the blocks
  //On click() of a [data-stack], detach() the last() of the children() and set a variable called block to that detached element 
  //Then, when another [data-stack] is click()ed, check if the block variable is assigned, if so, append the block 
  //to the stack and set block to null. remember this
  //1.We need to get a reference to all elements with a data-stack attribute. look to tictactoe
  //2.We need to call the click function on elements from step 1. sometimes this is referred to as registering a click event
  //3.When a click occurs, get the children, get the last of those children and detach it.
  //4.Create a veriable called block
  //5. Assign to the block variable the element you detached.
  //6.when another stack is clicked check if the block variable is equal to something or not. - truthy, or falsey.
  //7.if above is true - append the block to the stack and assign block to null.

  var $dataStack = $("[data-stack]");
  var block = null;
  var $oldStack = null;
  //var dataBlock = $(this).children().last();
  //var number = dataBlock.data("block");
  //var numberofblock = block.data("block");
  $dataStack.click(function () {
    if (block === null) {

      var $child = $(this).children();
      $oldStack = $(this)
      var $lastBlock = $child.last();
      block = $lastBlock.detach();


    } else {

      var blockValue = parseInt(block.data("block"));
      var movingStackBlocks = parseInt($(this).children().last().data("block"));

      if ($(this).children().last().data("block") === undefined) {
        $(this).append(block);
        block = null;

      } else {

        if (blockValue < movingStackBlocks) {

          $(this).append(block);
          var $this = $(this);
          checkForWin($this);

        } else {
          $oldStack.append(block);
        }

        block = null;

      }
    }

  });
  //Step 2 - Verify move
  //Only move the block if the value of the data- block attribute is less than the last block of the stack, or if 
  //the stack is empty.
  //1. we needto allow the move or disallow the move
  //2. what does allowing or disallowing mean in code
  //3. Allow if the stack is empty, what determines if it is empty? .length
  //4. we need to get the .last block off the stack you are moving
  //5. how do we look at an elements attribute in jquery?
  //6. how do we compare things?
  //7. allow if the value of the moved block is less than the last block of the stack you are moving to

  //Step 3 - Check for win
  //Create a function checkForWin() that checks .each() stack and determines if one of the last two stacks has four
  //[data-block]s. Run this function after every move. If you won, put the .text 'You Won! inside the 
  //div#announce-game-won element.
  //1. we know how to create named functions
  //2. how many stacks do we have?
  //3. how could we reference one stack with jquery? look to tictactoe
  //4. run this function after ever move. (in the click function)
  //5. what is a move? a click
  //6. in the function put the text "you won" inside the div if they won.
  //7. what constitutes a win? why are we checking if one of the stacks has four data blocks in it? look at other TOH append
  //if (stacks.b.length == 4 || stacks.c.length == 4) {
  //      console.log("You win, your movecount was" + moveCount);
  //      return true;
  //      processExit();
  //  } else {
  //      return false;
  // }
  function checkForWin($this){
    if ($this.children().length === 4){
      $("#announce-game-won").text("You Won!");
    }
  }
});