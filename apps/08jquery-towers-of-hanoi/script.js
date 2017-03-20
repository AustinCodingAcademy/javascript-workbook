'use strict';
var flag = 1;
var $block = null;
$(document).ready(function() {
  // Put app logic here

  jQuery('[data-stack]').click(

    function () {

        if(flag === 1){
          console.log('picking up block');
          //this is the data stack that was clicked on
      $block = $(this)
        .children()
        .last()
        .detach();
      flag = 0;
    } else {
      console.log('putting down block', $block);
    //here we are putting it back down
        $(this).append($block);
        flag = 1;
      }
    }
  );

  function checkForWin(){
    //checking length of data stacks 2 and 3
  if(
    $('[data-stack="2"]').children().length === 4 ||
    $('[data-stack="3"]').children().length === 4
  ) {
     $('#announce-game-won').text('You Won!');
  }

  }
});
