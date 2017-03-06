'use strict';

$(document).ready(function() {
  // Put app logic here
  var block = null;
  var validMove = false;
  var secondBlock = false; 
  // var differentBlock = false;
  $('[data-stack]').click(function() {
    if (secondBlock) {
       if ($(this).children().length !== 0) {
         var numOfBlockStack = parseInt(block.attr("data-block"));
         var numOfChildrenStack = parseInt($(this).children().last().attr("data-block"));
        if (numOfBlockStack > numOfChildrenStack) {
            alert("Invalid move!");
            validMove = false;
        }
      else {
         validMove = true;
      }
      }
      else {
         validMove = true;
      }
      if (validMove){
        // add the block to the end of the stack
        $(this).append(block);
        // nullify the block object 
        block = null;
        secondBlock = false;
        checkWin();
      }
    }
    else{
      if ($(this).children().length !== 0) {
        block = $(this).children().last().detach(); 
        secondBlock = true;
      }
    }
  });

  });

  function checkWin() {
    // loop through all three data stacks
    $('[data-stack]').each(function() {
      // check if any stack has four blocks 
    if (($(this).children().length === 4) & ($(this).data("stack") !== 1)) {
        // print out the win message 
        $("#announce-game-won").text("You Won!");
        // validMove = false;
      }
    });
  }
