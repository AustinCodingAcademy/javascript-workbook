'use strict';
var $block = null;

$(document).ready(function() {
  // Put app logic here
  $('div[data-stack]').on('click', function() {
    
//     function dataStackWasClicked(){
// var $theChildren = $(this).children();
// var $theLastChild = theChildren.last();
// var $theDetatchedLastChild = theLastChild.detatch();


// var block = $(this).children.last().detatch();
// var blockLength = $(this).children().length;
	
// 	if(block){
// 	var lastblockofhtestack = $(this).children.last();
// 	var datablockattribute = lastblockofhtestack.data(“block”);
// 	var blockdataattribute = block.data(“block”);
	
// 	if(lastblockofthestack === 0 || datablockattribute < blockdataattribute){
// 	  $(this).append(block);
// 	  block = null;
// 	}
//       }
//  	else{
// 	block = $(this).children().last().deatch();
// 	}
// }
   /*I kept the original code here below*/
    if ($block === null) {
      //the data stack that was clicked on and you are picking it up
      //console.log('picking it up')
      $block = $(this).children().last().detach();
    } else {
      //put it back down
      if ($(this).children().length === 0 || $(this).children().last().data('block') > $block.data('block')) {
        //console.log('putting it down')
        $(this).append($block);
        $block = null;

      } else {
        //console.log('wrong') test checker
      }
    }
     checkForWin();
  });

  function checkForWin() {
    //checking length of data stacks 2 and 3
    if ($('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4){
    //update text to you won
    
      console.log('winner winner')
      $('#announce-game-won').text('You Won!')
    }

  }
});

