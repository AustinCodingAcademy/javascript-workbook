"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1,hand2) {
  
  
  if (hand1.toLowerCase().trim() === hand2.toLowerCase().trim()) {
    return "It's a tie!";
  } else if (hand1.toLowerCase().trim() === "rock" && hand2.toLowerCase().trim() === "paper") {
    return "Hand two wins!";
  } else if (hand1.toLowerCase().trim() === "rock" && hand2.toLowerCase().trim() === "scissors") {
    return "Hand one wins!";
  } else if (hand1.toLowerCase().trim() === "paper" && hand2.toLowerCase().trim() === "rock") {
    return"Hand one wins!";
  } else if (hand1.toLowerCase().trim() === "paper" && hand2.toLowerCase().trim() === "scissors") {
    return"Hand two wins!";
  } else if (hand1.toLowerCase().trim() === "scissors" && hand2.toLowerCase().trim() === "rock") {
    return"Hand two wins!";
  } else if (hand1.toLowerCase().trim() === "scissors" && hand2.toLowerCase().trim() === "paper") {
    return "Hand one wins!";
  }
}

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

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
