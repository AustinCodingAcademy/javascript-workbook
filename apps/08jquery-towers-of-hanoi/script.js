'use strict';

$(document).ready(function() {
  // Put app logic here
  var block = null;

  function checkForWin(){
    $('[data-stack]').each( function(){
      var children = $(this).children();
      if ($(this).data('stack') === 2 && children.length === 4){
        $('#announce-game-won').text('You won!');
      }
      else if ($(this).data('stack') === 3 && children.length === 4){
        $('#announce-game-won').text('You won!');
      }
    });
  };

  //Click Functions
  $('[data-stack]').click(function() {
    //First Click
    var children = $(this).children();
    if (block === null) {
      if (children.length > 0){
        block = children.last();
        block.detach();
      }
    }
    //Second Click
    else {
      if (children.length === 0){
        $(this).append(block);
        block = null;
      }
      else if(parseInt(block.data('block')) < parseInt(children.last().data('block')) ){
        $(this).append(block);
        block = null;
      }

    }
    checkForWin();
  });
});
