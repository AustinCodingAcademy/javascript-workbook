function rockPaperScissors(hand1, hand2){
   if(hand1 == 'rock' && hand2 == 'paper'){
     console.log("hand 2 wins");
   }
   if(hand1 == 'paper' && hand2 == 'rock'){
     console.log("hand 1 wins");
   }
   if(hand1 == 'rock' && hand2 == 'scissors'){
     console.log("hand 1 wins");
   }
   if(hand1 == 'scissors' && hand2 == 'rock'){
     console.log("hand 2 wins");
   }
   if(hand1 == 'scissors' && hand2 == 'paper'){
     console.log("hand 1 wins");
   }
   if(hand1 == 'paper' && hand2 == 'scissors'){
     console.log(" hand 2 wins");
   }
  }
     rockPaperScissors("rock", "paper")
     rockPaperScissors("paper", "rock")
     rockPaperScissors("rock", "scissors")
     rockPaperScissors("scissors", "rock")
     rockPaperScissors("scissors", "paper")
     rockPaperScissors("paper", "scissors")
