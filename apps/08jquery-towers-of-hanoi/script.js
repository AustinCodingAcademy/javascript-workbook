'use strict';

var $block = null;
$(document).ready(function () {
  // Put app logic here
  var movesCount = 0;
  $('[data-stack]').click(
    function () {

      if ($block == null) {
        //datastck that was clicked has its last child detached
        $block = $(this).children().last().detach();
      } else {
        //putting the down the detached block if it's a legal move
        var $legalMove = $block.data('block') < $(this).children().last().data('block') || $(this).children().length === 0;
        if ($legalMove) {
          $(this).append($block);
          $block = null;
          //Track the number of moves made
          movesCount++;
          $('#moves-made').text('Moves: ' + movesCount);
          $('div#announce-game-won').empty();
        } else {

          $('#announce-game-won').text("Illegal Move");
        }
      }
      checkForWin();
    });
  /*


  if ($block === null) {
    // we pick up the block
  } else {
    // we put down the block, after checking legality
    if (legalMove) {
      console.log('legal move, yay');
      // do the append
    } else {
      console.log('illegal move, sorry');
    }
  }
  Step 2 - Verify move

  Only move the block if the value of the data- block attribute is less than the last block of the stack, or if the stack is empty.

  $dataStacks.click(function() {
     if ($block) { //This is the end stack
       var $endStack = $(this);
       var $lastBlock = $(this).children().last();

       //Check if the move is legal: append the block if true
       if ($block.data('block') < $lastBlock.data('block') || $endStack.children().length === 0) {
         $endStack.append($block);
         $block = null;

         //Track the number of moves made
         movesCount++;
         $('#moves-made').text('Moves: ' + movesCount);
       }
     } else { //This is the first stack: detach the block
       $block = $(this).children().last().detach();
     }
     //Check for a win after every move
     checkForWin();
   });
   function checkForWin() {
     var middleLength = $('[data-stack="2"]').children().length;
     var lastLength = $('[data-stack="3"]').children().length;

     //Display winning message if middle or last stack is four blocks long
     if (middleLength === 4 || lastLength === 4) {
       $('#announce-game-won').text('You Won!');
     }
   }
  */
  function checkForWin() {
    // checking legnth of data-stack's 2 and 3 for a win
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text("You Won!");
    } else {
      return false;
    }
  }

});
