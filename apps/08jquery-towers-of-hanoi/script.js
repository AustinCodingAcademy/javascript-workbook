'use strict';

var $block = null;


$(document).ready(function() {
  // Put app logic here
  

  $('[data-stack]').click(function () {
    // $block = $(this).children().last().detach();
    
    if($block) {
      var $lastBlock = $(this).children().last();
      var $lastBlockValue = $lastBlock.data("block");
      var $blockToBePlaced = $block.data("block");


      if($blockToBePlaced < $lastBlockValue || !$lastBlockValue) {
        //comparing the block that was clicked on to the last block in a stack
        
        $(this).append($block);
        $block = null;
      }
              
    } else {
      $block = $(this).children().last().detach();
    }
  

  });

});


// $(document).ready(function() {
//   // Put app logic here
   
//   $('[data-stack]').click(function () {
//     $block = $(this).children().last().detach();
                      //the above technique is called a train or training
    
//   });

// });


