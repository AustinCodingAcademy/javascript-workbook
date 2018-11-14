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
  const hand1Wins = "Hand one wins!";
  const hand2Wins = "Hand two wins!";

  //trim turn all sting inputs to lower case
  let hand1norm = hand1.toLowerCase().trim();
  let hand2norm = hand2.toLowerCase().trim();

  // detect win conditions ("if" statements) - this works and passes
  //   if (
  //     (hand1norm === "rock" && hand2norm === "scissors") ||
  //     (hand1norm === "paper" && hand2norm === "rock") ||
  //     (hand1norm === "scissors" && hand2norm === "paper")
  //   ) {
  //     return hand1Wins;
  //   } else if (
  //     (hand2norm === "rock" && hand1norm === "scissors") ||
  //     (hand2norm === "paper" && hand1norm === "rock") ||
  //     (hand2norm === "scissors" && hand1norm === "paper")
  //   ) {
  //     return hand2Wins;
  //   } else if (hand1norm === hand2norm) {
  //     return tie;
  //   } else {
  //     return "you can only enter rock, paper or scissors";
  //   }
  // }

  // detect win conditions ("switch" statements) - this works and passes

  switch (hand1norm + hand2norm) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return hand1Wins;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return hand2Wins;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return tie;
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
