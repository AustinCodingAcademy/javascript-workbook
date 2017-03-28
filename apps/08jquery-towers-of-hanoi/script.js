'use strict';

var block = null;

$(document).ready(function() {
  
  $('[data-stack]').click(dataStackWasClicked);// this is the click listener

  function dataStackWasClicked(){

    if(block){// This creates the variables needed to make a vailid move
      var lastBlockOfTheStack = $(this).children().last();//Creates a variable for the last block on a stack
      var dataBlockAttributeoflastblock = lastBlockOfTheStack.data("block");//this creates a variable for the data attributes of the last block
      var dataAttributeOfRemovedBlock = block.data("block");//this vreates a variable for the data attributes of the removed block

      if(dataBlockAttributeoflastblock > dataAttributeOfRemovedBlock
      || lastBlockOfTheStack.length === 0){//this compares the data attributes of the last block and the removed block to determin if the move is valid
        $(this).append(block);//if the move is valid, add removed block to the stack
        block = null;//then return block to null
      }
    }
    else{
      block = $(this).children().last().detach();//otherwise block still holds the last block clicked.
    }

  

    checkForWin(); //run the check for win logic
    }
  
    function checkForWin() {//check for win defined
     var $stackTwoLength = $('[data-stack="2"]').children().length;
     var StackThreeLength = $('[data-stack="3"]').children().length;

     if(($stackTwoLength === 4) || (StackThreeLength === 4)) {//if any of the non starting stacks = 4 then you won.
       $('#announce-game-won').text("You Won!");
       return true;
     }
   }
});

