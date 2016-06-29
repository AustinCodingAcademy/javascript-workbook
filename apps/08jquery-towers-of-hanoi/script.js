'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  var blockSize1 = 0;
  var blockSize2 = 0;
  $('[data-stack]').click(function(){
    var $children = $(this).children();
    if ($block === null) {
      if ($children.length > 0) {
        $block = $children.last();
        $block.detach();
      }
    } else {
      var $topBlock = $children.last();
      if ($children.length > 0) {
        if (parseInt($block.data('block')) < parseInt($topBlock.data('block'))) {
          $(this).append($block);
          $block = null;
        }
       } else {
         $(this).append($block);
         $block = null;
       }
    }
    checkForWin();
  });

  function checkForWin() {
    $('[data-stack]').each(function() {
      if (($(this).data('stack') > 1) && ($(this).children().length > 3))
      {
        $('#announce-game-won').text('You Won!');
      } else {
        console.log("Eat my nuts!");
      }
    });
  };

  // window.checkForWin = checkForWin;

  function fuckYou() {
    console.log("Fuck you!");
  }

});
