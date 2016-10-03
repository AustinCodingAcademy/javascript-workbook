'use strict';

$(document).ready(function() {
  var $block = null;


  $('[data-stack]').click(function() {
    var $stackable = $(this).children();
    var $lastBlock = $stackable.last();

    function checkForWin () {
    var $stackTwo = $('[data-stack="2"]').children();
    var $stackThree = $('[data-stack="3"]').children();

      if (($stackTwo.length === 4)||($stackThree.length === 4)) {
        $('#announce-game-won').text('You Won!');
      }
    }




    if (!$block) {
      $block = $lastBlock.detach();
    }
    else {
      if (($lastBlock.data('block') > $block.data('block')) || $stackable.length === 0) {
      $(this).append($block);
      $block = null;
    }
   }
   checkForWin();
  });
 });
