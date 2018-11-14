"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  hand1 = hand1.trim().toLowerCase();
  hand2 = hand2.trim().toLowerCase();

  const tie = "It's a tie!";
  const hand1win = "Hand one wins!";
  const hand2win = "Hand two wins!";
  let display = "Invalid input";

  switch (hand1) {
    case "rock":
      switch (hand2) {
        case "rock":
          display = tie;
          break;
        case "paper":
          display = hand2win;
          break;
        case "scissors":
          display = hand1win;
          break;
      }
      break;
    case "paper":
      switch (hand2) {
        case "rock":
          display = hand1win;
          break;
        case "paper":
          display = tie;
          break;
        case "scissors":
          display = hand2win;
          break;
      }
      break;
    case "scissors":
      switch (hand2) {
        case "rock":
          display = hand2win;
          break;
        case "paper":
          display = hand1win;
          break;
        case "scissors":
          display = tie;
          break;
      }
      break;
  }
  return display;
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
