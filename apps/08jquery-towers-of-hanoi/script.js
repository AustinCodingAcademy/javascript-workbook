'use strict';

var $block = null;


$(document).ready(function() {
  // Put app logic here
  

  $('[data-stack]').click(function () {
    
    if($block) {
      var $lastBlock = $(this).children().last();
      var $lastBlockValue = $lastBlock.data("block");
      var $blockToBePlaced = $block.data("block");
      //define variables for clean code throughout


      if($blockToBePlaced < $lastBlockValue || !$lastBlockValue) {
        //comparing the block that was selected, to the last block.
        
        $(this).append($block);
        $block = null;
        checkForWin();
      }
              
    } else {
      $block = $(this).children().last().detach();
    }
  

  });

  function checkForWin(){
      //check for win
      if( $('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4 ){
      //check the 2 divs that are correct for winning if they are equal to 4.
      $('#announce-game-won').text('you won!');
      //
    }
  }

});