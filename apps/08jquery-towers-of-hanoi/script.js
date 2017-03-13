'use strict';

var $block = null;


$(document).ready(function() {
  // Put app logic here
  

  $('[data-stack]').click(function () {
    // $block = $(this).children().last().detach();
      // The above variable and methods were moved to the else statement below
    
    if($block) {
      var $lastBlock = $(this).children().last();
      var $lastBlockValue = $lastBlock.data("block");
      var $blockToBePlaced = $block.data("block");


      if($blockToBePlaced < $lastBlockValue || !$lastBlockValue) {
        //comparing the block that was clicked on to the last block in a stack
        
        $(this).append($block);
        $block = null;
        checkForWin();
      }
              
    } else {
      $block = $(this).children().last().detach();
    }
  

  });

  function checkForWin(){
      // I decided to try the train of .children() and .size() to determine the value of the individual data-stack divs.
      // if( $('[data-stack="2"]').children().size() === 4 || $('[data-stack="3"]').children().size() === 4 )
      // After reading some threads on stack overflow I decided to use the children method combined with the length property.
      // There were numerous reasons listed for not using the .size() method.
    if( $('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4 ){
      // announce-game-won here
      $('#announce-game-won').text('you won!');
    }
  }

});





