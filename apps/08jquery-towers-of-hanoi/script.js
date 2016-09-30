'use strict';
var block = null;

$(document).ready(function() {

function checkForWin(){
  // var dataStack2 = $('[data-stack="2"]')
  // if(dataStack2.children().length === 0)){
  //   console.log('you win');
  // }
  console.log($('[data-stack="2"]').children().length);
  if($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4){
    $('#announce-game-won').html('you win!');
  };
}

  var block = null;
  $('[data-stack]').click(function(){
    $('#announce-game-won').html('');
    if(block){
      //store value if null
        //block data = 25 or 50 or 75 or 100
      var blockData = block.data('block');
      console.log(blockData);
      var $children = $(this).children();
      if($children.last().data('block') < blockData){
        $('#announce-game-won').text('illegal move');
      }
      if (($children.length === 0) || $children.last().data('block') > blockData) {
        $(this).append(block);
        block = null;
      }

    }
    else{
      console.log('outer else');
      if($(this).children().length > 0){
        console.log('outer else - if');
        block = $(this).children().last().detach();
        console.log(block);
      }
      else{
        console.log('outer else - else');
        $('#announce-game-won').text('please click on a stack that has blocks');
      }
    }
    checkForWin();
  })
});
