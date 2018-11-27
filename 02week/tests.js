"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  //module write bash things
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here
  const tie = "It's a tie!";
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  //detect the tie
  if (hand1 === hand2) {
    return tie;
  }
  //Hands one win
  else if (
    (hand1 === "rock" && hand2 === "scissors") ||
    (hand1 === "paper" && hand2 === "rock") ||
    (hand1 === "scissors" && hand2 === "paper")
  ) {
    return "Hand one wins!";
  } else if (
    (hand2 === "rock" && hand1 === "scissors") ||
    (hand2 === "paper" && hand1 === "rock") ||
    (hand2 === "scissors" && hand1 === "paper")
  ) {
    return "Hand two wins!";
  } else if (
    (hand1 === "rock" && hand2 === "") ||
    (hand1 === "paper" && hand2 === "") ||
    (hand1 === "scissors" && hand2 === "")
  ) {
    return "No winner!";
  } else if (
    (hand1 === "rock" && hand2 === "scissors") ||
    (hand1 === "paper" && hand2 === "scissors")
  ) {
    return "Matrix";
  }

  function rockPaperScissors(rock) {
    return rock;
  }
  console.log(hand1, hand2);
  console.log(hand1norm, hand2norm);
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
    it("should lowercase and trim word before showing it", () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!");
    });
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
    it("what happen when there is only one hand", () => {
      assert.equal(rockPaperScissors("rock", ""), "No winner!");
      assert.equal(rockPaperScissors("paper", ""), "No winner!");
      assert.equal(rockPaperScissors("scissors", ""), "No winner!");
    });
    it("what happen when hand2 can't use rock or paper", () => {
      assert.equal(rockPaperScissors("rock", "scissors"), "Matrix");
      assert.equal(rockPaperScissors("paper", "scissors"), "Matrix");
    });
  });
  it("should take any different datatypes and print out as string", () => {
    assert.equal(typeof rockPaperScissors("rock"), "string");
  });
} else {
  getPrompt();
}
