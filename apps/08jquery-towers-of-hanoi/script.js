'use strict';

$(document).ready(function() {
  var block
  function checkForWin() {
    $('[data-stack]').each(function(){
      if ($(this).children().length > 3) {
          $('#announce-game-won').text('you won!');

        }
      });

    }

  $('[data-stack]').click(function(){


    if (block){
      // finds block in hand size
      var blockSize = Number(block.attr('data-block'));


      // finds block on stack size
      var stackBlockSize =Number($(this).children().last().attr('data-block'));


      if(Number.isNaN(stackBlockSize)|| blockSize < stackBlockSize ){
     // sets down block
        $(this).append(block);
        block = null;
      }
    }
    else {
      // picks up block
      block = $(this).children().last().detach();
    }

  checkForWin();



  });
});
