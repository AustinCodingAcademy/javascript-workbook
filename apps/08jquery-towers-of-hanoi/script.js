'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  var lastBlock = $(this).children().last().data('block');

  $('[data-stack]').on('click', function(){
  //   var $dataStack = $('[data-stack]');
      // grabs block
      if(!$block){
        $block = $(this).children().last().detach();
    } else {

        var $children = $(this).children();
        var blockValue = $block.data('block');


        if($children.length === 0 ||
           $children.last().data('block') > blockValue){
             // puts Block down
            $(this).append($block);
            $block = null;
        } else {
          console.log("invalid move!!" );
        }

        function checkForWin(){
          if($('[data-stack="2"]').children().length === 4 ||
             $('[data-stack="3"]').children().length === 4){
               console.log("YOU WIN!!");
               $('#announce-game-won').text('You Won!');
             }
        }
        checkForWin();


    }
  });

  // if block
  // put it down
  // else pick it up


});
