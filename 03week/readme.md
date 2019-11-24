1. Get the current startStack and endstack values (either through user input or test values) inside the towersOfHanoi function
  -Pass those values to isLegal function
  -Pass those values to movePiece function

2. Check that a piece is allowed to move (isLegal function)
  -Use the startStack and endStack values inside of the isLegal function
    -Access the numbers inside the arrays that correspond to the startStack/endStack values ('a', 'b', 'c',), these are the keys of the stacks object
    -startStack and endStack should be different letters
    -A bigger number can not be placed on top of a smaller number
  -Nice to Have: return an error message (string) telling the user if their input is invalid (should be 'a', 'b', or 'c')
  -Any number can be placed on an empty stack
  Nice to have: futher input validation like making sure startStack and endStack values are one character long

3.  Move a piece from one stack to another
  -Update the stacks object inside of the movePiece function using the startStack and endStack values
  -Take the value from the end of the startStack array and add it to the end of the endstack array. pop? push?

4. Check to see if the game is won (checkForWin function)
  -When all the blocks are stacked into column 2 or 1 return true, otherwise false
  -Nice ot have: console log a winning message