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


        if($children.length === 0 || $children.last().data('block') > blockValue){
            $(this).append($block);
            $block = null;
        } else {
          console.log("invalid move!!" );
        }




      // if(lastBlock.data('block') >= block.data('block')){
      //   console.log("invalid move!!");
      // }
    //  lastBlock = $(this).children().last().data('block');
    //  $lastBlock = $lastStack.data('block');
      // console.log(lastBlock);

// this.lastblock >= l


    //  }
    }
  });

  // if block
  // put it down
  // else pick it up


});
