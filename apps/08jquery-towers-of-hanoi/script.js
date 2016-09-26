'use strict';

var block = null;

//jquery function/wrapper starts below//

$(document).ready(function() {
    checkForWin();
    function checkForWin() {
        if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
            alert('Holy Shit, You Win!!!!!. Reload the page!!!!');
            console.log('you won');
        }
    }

    checkForWin();

    $('[data-stack]').on('click', function() {
        var $this = $(this); // very important NOT to create this variable globally.
        var $children = $this.children();
        var $lastChild = $children.last();
        var $stack1 = $('[data-stack="1"]');
        var $stack2 = $('[data-stack="2"]');
        var $stack3 = $('[data-stack="3"]');
        console.log($this);


        if (block === null) {
            block = $lastChild.detach(); //block stores the block we removed
            console.log($stack1.data('stack'))
            console.log($stack2.data('stack'))
            console.log($stack3.data('stack'))
            console.log(block.data('block')) //this logs the jquery object data value as a number we can use for comparison

        }

        else {

            if ($children.length === 0 || $lastChild.data('block') > block.data('block')) {
              $(this).append(block);
              block = null; // this resets the stored value back to null so we can pick up anbother block
              checkForWin();

            }
            else {
            alert('You can not move a block here. Please make a legal move');
            }
        }
    })

}); //end of document ready
