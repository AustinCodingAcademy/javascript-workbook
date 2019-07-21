# Towers of Hanoi Game

1. 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code

2. 20pts - Move Blocks - User can move "blocks" from column to column

3. 20pts - Illegal Moves - Prevents larger blocks from stacking on smaller blocks

4. 20pts - Notifies winner - When all the blocks are stacked into column 2 or 1 the user is told they won!

5. 20pts - Minimum 3 Unit Tests - Should be attached to your file the same way Tic, Tac, Toe, PigLatin or Rock Paper Scissors is done.

## Code Plan

* Create three Unit Tests:

    1. Check to make sure blocks can be moved from one column to another

    2. Check to see if it prevents the user from putting larger blocks on top of smaller blocks

    3. Notify the winner when all of the blocks are stacked correclty on either column 1 or 2.

* Solve for unit tests by creating functions:

    1. `movePiece()`: This function will give the pieces the ability to be reassigned to their new locations
        * Create a variable for each of the blocks to be assigned to
        * Create a variable for each of the columns to be assigned
        * Create a way to assign blocks to columns

    2. `function isLegal()`: This function will check to make sure bigger blocks can't be put on top of smaller blocks
        * Create a way for the program to assign a size to each block
        * Create a conditional to say that if a block that's larger can't sit on a smaller block

    3. `function checkForWin()`: This function will alert user of a win
        * Create two winning possibilities: One for column 1 and one for column 2. 
        * Can be a conditional that checks for either win, else it calls upon an alert to tell the user to refresh the game and start over if they're stuck.

## Not graded portion:

* Once it passes tests in the `toh-tests.js` file, put the functions into `toh.js` and hook that file up with the DOM

* Style HTML file by using `style.css`