'use strict';

$(document).ready(function() {
  var $dataStacks = $('[data-stack]');
  var $block;
  var movesCount = 0;

  $dataStacks.click(function() {
    if ($block) { //This is the end stack
      var $endStack = $(this);
      var $lastBlock = $(this).children().last();

      //Check if the move is legal: append the block if true
      if ($block.data('block') < $lastBlock.data('block') || $endStack.children().length === 0) {
        $endStack.append($block);
        $block = null;

        //Track the number of moves made
        movesCount++;
        $('#moves-made').text('Moves: ' + movesCount);
      }
    } else { //This is the first stack: detach the block
      $block = $(this).children().last().detach();
    }
    //Check for a win after every move
    checkForWin();
  });

  function checkForWin() {
    var middleLength = $('[data-stack="2"]').children().length;
    var lastLength = $('[data-stack="3"]').children().length;

    //Display winning message if middle or last stack is four blocks long
    if (middleLength === 4 || lastLength === 4) {
      $('#announce-game-won').text('You Won!');
    }
  }

});
