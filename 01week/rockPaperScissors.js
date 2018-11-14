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

  //normalize inputs
  let hand1norm = hand1.toLowerCase().trim();
  let hand2norm = hand2.toLowerCase().trim();

  //detect a tie
  if (hand1norm === hand2norm) {
    return tie;
  }

  //detect win conditions
  //rock > scissors
  //scissors > paper
  //paper > rock
  let win = ["rock", "paper", "scissors"];
  let lose = ["scissors", "rock", "paper"];

  let h1win = win.indexOf(hand1norm);
  let h2win = win.indexOf(hand2norm);
  let h1lose = lose.indexOf(hand1norm);
  let h2lose = lose.indexOf(hand2norm);

  if (h1win === h2lose) {
    return hand1wins;
  }

  if (h2win === h1lose) {
    return hand2wins;
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
