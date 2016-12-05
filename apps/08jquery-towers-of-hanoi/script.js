'use strict';
//uses strict mode
$(document).ready(function() {
    //makes sure the document is ready, before any of the following code is executed
    //Spec 1 - Moving the blocks
    //On click() of a [data-stack], detach() the last() of the children()
    // and set it equal to a variable called block.
    //Then, when another [data-stack] is click()ed, check if the block variable is assigned,
    // if so, append the block to the stack and set block to null.

    var block = null;
    //sets a variable of block to null
    var $dataStack = $('[data-stack]');
    //sets a variable $datastack to "select" all of the elements in the DOM with the data-stack attribute
    var $oldStack = null;
    //sets variable $oldstack to null
    // var setblock = $(this).children().last().data("block");
    // var handblock = block.data("block");

    $dataStack.click(function() {
        //click function that is attatched to the variable $datastack- which selecs divs of stacks - 3 towers
        if (block === null) {
            //if block === null, which it is at his point then execute this code
            var $children = $(this).children();
            //grab THIS dataStacks children -store it in $children
            $oldStack = $(this);
            //set variable oldStack to $this datastack
            var $last = $children.last();
            //get the last element of the children of this datastack
            block = $last.detach();
            //detach the last child div from the div datastack
        } else {
            //if block is not null- or if you have picked up a block and it is in your hand
            var setblock = parseInt($(this).children().last().data("block"));
            //set variable for last block on the stack and get the value of the data number from the last child of this specific div stack
            var handblock = parseInt(block.data("block"));
            //set variable for handblock and get the value of the data number from the block in your hand currently
            if ($(this).children().last().data("block") === undefined) {
                //if the last child on this specific div stacks data "block" is equal to undefined -or if there is nothing there
                //then execude this code-
                $(this).append(block);
                //add the block to this specific stack
                block = null;
                //set block black to null and go back go top
            } else {
                //unless! (the specific stack is not empty)- execute this code
                if (handblock < setblock) {
                    //if the block in your hands data value number is less than the current block at
                    //the end of this specific divs data number value then execute the following code
                    $(this).append(block);
                    //append block to this specfiic div stack
                    var $this = $(this);
                    //this is equal to this specfific div
                    checkForWin($this);
                    //run a function called check for win, with the pparameter of $this, to check this specific div stack
                    //function is below
                } else {
                    //unless - (block in hands data value number is biger than the current block at the end of the div stacks data value number)
                    $oldStack.append(block);
                    //append this block to the old stack, which is declared above in a variable, called $(this), to establish that this is the older div stack that you want the block to return to.
                }
                block = null;
                //set block back to null so you can go through the function again and try to move a block
            }
        }
    });
    // Only move the block if the value of the data- block attribute is less than the
    //last block of the stack, or if the stack is empty.

    //Create a function checkForWin() that checks .forEach() stack and determines if one of the last two stacks has four [data-block]s.
    //Run this function after every move. If you won, put the .text 'You Won! inside the div#announce-game-won element.
    function checkForWin($this) {
        //check for win function with the paremeter variable this, which is $(this) datastack div
        if ($this.children().length === 4) {
            //if this div stacks length is equal to 4-- or if there are 4 divs currently on this stack execute code below
            $('#announce-game-won').text("You Won!");
            //select the div from the dom with tthe ID announce game one and change its text to you won!
            //only if the length of this specific stacks lenght is 4
        }
    }
    // Put app logic here
});
