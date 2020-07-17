1. Get the current starttstak and end Stack Vaues (either through user input or test values ) - pass those values to islegal funtion
Check that a piece us allowed to move - Use the startStack and endStack values inside of the isLegal function 
Pass those values to islegal to movePiece function
Pass those values to movePiece function

2. Check that a piece is allowed to move(isLegal function)- 
use the startStack and endSatck values to determine if it would be a legal move based off the rules of the game 

-startStack and endStack should be different letters. 
- A bigger number can not be moved into a placed on top of a smaller number
  -Any number can be placed onto an empty stack( array inside the stacks object)
-Nice to have ; return an error message (string) telling the user if their input is invalid ( should be 'a', 'b', or 'c') 
-Nice to have: further input validation like making sure the startStack/endStack values are 1 character long (there are a lot of toher cases to think about too:) )
3. Move a piece from one stack to another
-Update the stacks object inside of the movePiece function using the startStack and endStack values 
Take the value from the end of startStack array and add to the end of the endStack array
-maybe use .pop?, shift? or different array methods 

.4 check to see if the game is won (CheckForWin function) 
-When all the blocks are stacked into column 2 or 1 return true otherwise false 
-Nice to have: console log a winning message 