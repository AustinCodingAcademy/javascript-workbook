'use strict'

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  const tie = "It's a tie!";
  const hand1Wins = "Hand one wins!";
  const hand2Wins = "Hand two wins!";
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  if (!hand1 || !hand2) {
    return "Pick Rock Paper or Scissors....only";
  }
  if (hand1 != "rock" && hand1 != "scissors" && hand1 != "paper") {
    return "please enter a valid hand for hand 1";
  }
  if (hand2 != "rock" && hand2 != "scissors" && hand2 != "paper") {
    return "please enter a valid hand for hand 2";
  }
  if (hand1 === hand2) {
    return tie;
  }
  const hand1WinConditions = ["rock/scissors", "paper/rock", "scissors/paper"];
  const hand2WinConditions = ["scissors/rock", "rock/paper", "paper/scissors"];
  for (let i = 0; i < hand1WinConditions.length; i++) {
    if (hand1.toString() + "/" + hand2.toString() === hand1WinConditions[i]) {
      return hand1Wins;
    } else if (hand1.tostring() + "/" + hand2.tostring() === hand2WinConditions[i]) {
      return hand2Wins;
    }

  }
}

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    })
  })
}
//Updated testing 
if (typeof describe === "function") {
  describe("rockPaperScissors()", () => {
    // Tie conditions
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!")
    });
    // Hand one winning conditions
    it("should detect when hand 1 wins", () => {
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
      assert.equal(rockPaperScissors("paper", "rock"), "Hand one wins!");
      assert.equal(rockPaperScissors("scissors", "paper"), "Hand one wins!")
    })
    it("should detect when hand 2 wins", () => {
      assert.equal(rockPaperScissors("scissors", "rock"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!")
    });
    // Hand 2 winning conditions

  });
} else {
  getPrompt();
}