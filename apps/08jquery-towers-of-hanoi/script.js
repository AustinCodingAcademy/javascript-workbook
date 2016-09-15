'use strict';

$(document).ready(function() {
  // Put app logic here
  var block = null;

  $('[data-stack]').on('click', function(){
  //   var $dataStack = $('[data-stack]');

      if(!block){
      block = $(this).children().last().detach();
    } else {
      console.log(block);
      $(this).append(block);
        block = null;
    }
  });

  // if block
  // put it down
  // else pick it up


});
