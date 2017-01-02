'use strict';

function checkForWin(){
  if($('[data-stack= "2"]').children().length === 4){

  }
}


$(document).ready(setup);

  var block = null;

 function setup (){

  $('[data-stack]').click(doSomething);
}


  function doSomething(){

    if(!block){
      var children = $(this).children();
      var last = children.last();
      last.detach();
      block = last.detach();
    }
    else{

      var destinationblock = $(this).children().last();
      var value1 = block.data('block');
      var value2 = destinationblock.data('block');

    if(value1 < value2 || $(this).children.length ===0 ){

      $(this).append(block);
      block = null;
    }
  }
}
