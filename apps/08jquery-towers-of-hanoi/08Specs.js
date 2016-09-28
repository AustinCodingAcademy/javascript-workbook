Spec 1 - Moving the blocks

On click() of a [data-stack], detach() the last() of the children() and set it equal to a variable called block.

Then, when another [data-stack] is click()ed, check if the block variable is assigned, if so, append the block to the stack and set block to null.

Step 2 - Verify move

Only move the block if the value of the data- block attribute is less than the last block of the stack, or if the stack is empty.

Step 3 - Check for win

Create a function checkForWin() that checks .each() stack and determines if one of the last two stacks has four [data-block]s. Run this function after every move. If you won, put the .text 'You Won! inside the div#announce-game-won element.
