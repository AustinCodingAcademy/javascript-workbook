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
