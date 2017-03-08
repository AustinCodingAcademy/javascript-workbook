'use strict';

$(document).ready(function() {

  var $dataStack = $("[data-stack]");
  var block = null;

  // When the player manipulates the stack by clicking on a block, remove the last block(child) from the stack. Then, drop the block on a seperate line or stack, that is clicked.
  $dataStack.click(function() {

    if (block === null) {

      var child = $(this).children();

      var last = child.last();

      block = last.detach();

      return true;
    } else {
      // Checks to see if the block you are moving is smaller than the block you are moving it to. If not, It ain't gonna work!
      var $lastBlock = $(this).children().last().data('block');

      var $blockToPlace = block.data('block');

      if (Number($lastBlock) < Number($blockToPlace)) {

        return false;
      }
    }

    $(this).append(block);
    checkForWin();
    block = null;

  });

  function checkForWin() {

    // this checks the stack for a length of 4, and that it is on a seperate line.
    if ($('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4) {

      $("#announce-game-won").text("You Won!");
      return true;
    }
  };

});
