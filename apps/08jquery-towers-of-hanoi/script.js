'use strict';

$(document).ready(function() {
    // Put app logic here
    var $datastack = $('[data-stack]');
    var block = null;
    var $oldStack = null;

    // On click() of a [data-stack], detach() the last() of the children() and set it equal to a variable called block. Then, when another [data-stack] is click()ed, check if the block variable is assigned, if so, append the block to the stack and set block to null.

    $datastack.click(function() {

        if (block === null) {

            var $child = $(this).children();
            $oldStack = $(this);
            var $lastBlock = $child.last();
            block = $lastBlock.detach();

        }
       else {

            var blockValue = parseInt(block.data("block"));
            var movingStackBlocks = parseInt($(this).children().last().data("block"));

            if ($(this).children().last().data("block") === undefined) {
                $(this).append(block);
                block = null;

            }
            else {

                if (blockValue < movingStackBlocks) {
                    $(this).append(block);
                    var $this = $(this);
                    checkForWin($this);
                  }
                    else {
                      $oldStack.append(block);
                    }

                    block = null;

            }
        }
    });


    function checkForWin($this){
      if ($this.children().length === 4) {
        $("#announce-game-won").text('You Won!')
      }
    }
});

// var blockweareputtingonsomething = blockwearetryingtogetdata.data("block"); .data only returns strings NOT numbers
// var numberofblock = block.data("block");
//var reallyanumber = Number("110") //use this to change strings into actual numbers
