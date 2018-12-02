"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here
  const tie = "It's a tie!";
  const hand1wins = "Hand one wins!";
  const hand2wins = "Hand two wins!";
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  if (!hand1 || !hand2) {
    return "Pick Rock Paper or Scissors";
  }
  if (hand1 != "rock" && hand1 != "scissors" && hand1 != "paper") {
    return "please enter valid hand for hand 1";
  }
  if (hand2 != "rock" && hand2 != "scissors" && hand2 != "paper") {
    return "please enter valid hand for hand 2";
  }
  if (hand1 === hand2) {
    return tie;
  }

  // if (hand1 === "rock" && hand2 === "scissors") {
  //   return hand1wins
  // } else if (hand1 === "scissors" && hand2 === "paper") {
  //   return hand1wins
  // } else if (hand1 === "paper" && hand2 === "rock") {
  //   return hand1wins
  // } else if (hand2 === "rock" && hand1 === "scissors") {
  //   return hand2wins
  // } else if (hand2 === "scissors" && hand1 === "paper") {
  //   return hand2wins
  // } else if (hand2 === "paper" && hand1 === "rock") {
  //   return hand2wins
  // }

  const hand1WinConditions = ["rock/scissors", "paper/rock", "scissors/paper"];
  const hand2WinConditions = ["scissors/rock", "rock/paper", "paper/scissors"];
  for (let i = 0; i < hand1WinConditions.length; i++) {
    if (hand1.toString() + "/" + hand2.toString() === hand1WinConditions[i]) {
      return hand1wins;
    } else if (
      hand1.toString() + "/" + hand2.toString() ===
      hand2WinConditions[i]
    ) {
      return hand2wins;
    }
  }
}

// trim function
// how to turn strings lowercase get rid of extra whitespace

// Tests

// winning conditions
// rock > scissors
// paper > rock
// scissor > paper

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

if (typeof describe === "function") {
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!");
    });
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!");
    });
  });
} else {
  getPrompt();
}