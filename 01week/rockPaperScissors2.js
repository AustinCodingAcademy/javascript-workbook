"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand3, hand4) {
  const tie = "It's a tie!";
  const hand3wins = "Hand three wins!";
  const hand4wins = "Hand four wins!";
  // Write a switch program as well to run the function
  switch (hand3 + "/" + hand4) {
    case 0:
      "rock/scissors";
      return hand3wins;
    case 1:
      "paper/rock";
      return hand3wins;
    case 2:
      "scissors/paper";
  }
}

function getPrompt() {
  rl.question("hand3: ", answer1 => {
    rl.question("hand4: ", answer2 => {
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
      assert.equal(rockPaperScissors("rock", "paper"), "Hand four wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand four wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand three wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand four wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand four wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand three wins!");
    });
  });
} else {
  getPrompt();
}