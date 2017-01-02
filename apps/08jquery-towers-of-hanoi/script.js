'use strict';

$(document).ready(function() {
    // when the user clicks on a block then remove the last
    // child from the webpage, then make it reappear when the
    // user clicks on another stack
    var $dataStack = $("[data-stack]");
    var block = null;





    $dataStack.click(function() {
        // if the user doesnt have a block in their "hand" then run the code.
        if (block === null) {
            // finds all the children of 'this' stack that the user clicks on.
            var child = $(this).children();
            // finds the last of the children
            var last = child.last();
            // then removes and saves the data of the last child.
            block = last.detach();


            return true;
        } else {

            // finds the number in string form of the last child of the stack
            // you are wanting to place the block on
            var $lastBlock = $(this).children().last().data('block');

            // finds the number in string form of the block you have in your 'hand'
            var $blockToPlace = block.data('block');

            // Number() turns the string into a number
            // finds to see if the block you are trying to palce is smaller than
            // the block that is already placed.
            if (Number($lastBlock) < Number($blockToPlace)) {
                //alert('Invalid move!');
                return false;
            }
        }

        // puts the last child that the computer saved on another stack.
        $(this).append(block);

        checkForWin();

        // then removes the block from the users "hand".
        block = null;


    });

    function checkForWin() {

        // this checks to see if the children in stack 2 or stack 3 have a length of 4
        if ($('[data-stack="2"]').children().length === 4 ||
            $('[data-stack="3"]').children().length === 4) {

            $("#announce-game-won").text("You Won!");
            return true;
        }
    };


});
