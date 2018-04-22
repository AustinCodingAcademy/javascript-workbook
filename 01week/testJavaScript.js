// Determine the winner for rock as first hand and add the toLowerCase()
// and trim() methods to pass the tests.
if (hand1.toLowerCase().trim() === "rock") {
  if (hand2.toLowerCase() === "scissors") {
      return "Hand one wins!";
  } else {
      if (hand2.trim() === "paper") {
        return "Hand two wins!";
      } else if (hand1 === hand1){
         return "It's a tie!";
      }
  }
}
