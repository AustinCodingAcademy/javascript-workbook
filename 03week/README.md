I accidentlly left my pseudocode and code plan on a peice of paper at home but I'll do the best I can to try and remember my process from my code. 

Starting Strat - I wanted to move values from stacks a, b, and c if the value was less than the existing value or if the destination is empty or victory condition is met. I just used pop and push. I was fairly easy to figure out. (and by fiarly easy, I mean it look like an hour to sort out all the bugs)

isLegal Strat - I just made it so that the only way the move was possible was if the value of the peice moved was less than the value of the existing item in that stack's array. I was originally going to loop where peices are moved until the player had [4, 3, 2, 1] on the desired stack, but then decided to just have the function checkout if there where 4 items in the array of that stack, it just seemed simpler.

checkForWin Strat - From the start i knew that I just need to to check if stacks b or c had 4 items in the array.

towersOfHanoi - Just set it up so that items from the starting stack could move to the specified ending stack, but only if the move was legal.