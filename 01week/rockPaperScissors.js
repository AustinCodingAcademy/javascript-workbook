"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  if (hand1 === hand2) return "It's a tie!";
  else if (hand1 === "rock" && hand2 === "scissors") return "Hand one wins!";
  else if (hand1 === "rock" && hand2 === "paper") return "Hand two wins!";
  else if (hand1 === "scissor" && hand2 === "rock") return "Hand two wins!";
  else if (hand1 === "scissors" && hand2 === "paper") return "Hand one wins!";
  else if (hand1 === "paper" && hand2 === "rock") return "Hand one wins!";
  else if (hand1 === "paper" && hand2 === "scissors") return "Hand two wins!";
  else return "Type: rock, paper or scissors";
}

//new function for new unit test
function checkInput(hand1, hand2) {
  if (hand1 === "rock" && hand2 === "scissors") return true;
  else if (hand1 === "rock" && hand2 === "paper") return true;
  else if (hand1 === "rock" && hand2 === "rock") return true;
  else if (hand1 === "paper" && hand2 === "scissors") return true;
  else if (hand1 === "paper" && hand2 === "rock") return true;
  else if (hand1 === "paper" && hand2 === "paper") return true;
  else if (hand1 === "scissors" && hand2 === "scissors") return true;
  else if (hand1 === "scissors" && hand2 === "rock") return true;
  else if (hand1 === "scissors" && hand2 === "paper") return true;
  else return false;
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
    //added test for assignment week 2 day 2.
    it("should check input for rock paper or scissors", () => {
      rockPaperScissors("rock", "bowl");
      assert.equal(checkInput("rock", "bowl"), false);
    });
  });
} else {
  getPrompt();
}
