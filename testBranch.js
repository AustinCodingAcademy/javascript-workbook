'use strict';
if (hand1.toLowerCase() === "paper") {
  if (hand2 === "rock") {
      return "Hand one wins";
  } else {
      if (hand2.toLowerCase() === "scissors") {
          return "Hand two wins!";
      } else if(hand1 === hand1){
        return "It's a tie!";
      }
   }
}

// Create code for scissors as first hand to execute win, loss, or tie.
if (hand1 === "scissors") {
   if (hand2 === "rock") {
       return "Hand two wins!!!";
   } else {
       if (hand2 === "paper") {
        return "Hand one wins";
       } else if (hand1 === hand1){
          return "It's a tie!";
       }
   }
}
