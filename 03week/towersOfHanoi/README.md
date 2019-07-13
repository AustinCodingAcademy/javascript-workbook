-get the user input (startStack, endStack) and then check the rules of the game based on the current stack obhect.

-to move a piece, we need to update the stacks object using our user input that we get (startStack, endStack)


-instead of using arrays we're using object in arrays?
-when we move a piece, we need to check the size of the piece.
-if the piece has no piece above it, it can be moved.
-if the piece has a larger piece above it, it cannot be moved. 
-if the piece has a smaller piece above it, both pieces can be moved. 

-if the piece is being moved to an empty tower, it can work. 
-if the piece is being moved onto a piece that is smaller, it cannot work. 
-if the piece is moved onto a piece that is bigger, it can work.

-do not check for wins on tower A
-check for wins on tower B or C

-wins defined by largest piece on bottom, meduim piece in middle, smallest piece on top. 

-should only be able to remove a piece from the end of an array.
-should only be able to place a piece on the end of an array. 

-if you choose from an empty stack or one that doesnt exist, the stacks will not be updated and a message will be console logged out saying "choose a valid stack"


