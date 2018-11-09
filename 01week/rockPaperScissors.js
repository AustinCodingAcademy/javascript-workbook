"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here

  // ensure valid input
  if (hand1 && hand2) {
    console.log("received input of: ", hand1, hand2);

    // ensure we have strings
    if (typeof hand1 === "string" && typeof hand2 === "string") {
      // clean up input strings
      hand1 = scrubADubDub(hand1);
      hand2 = scrubADubDub(hand2);
    } else return "Invalid input.";

    console.log("comparing", hand1, "to", hand2);

    // tie condition
    if (hand1 === hand2) return "It's a tie!";

    // rock vs x
    if (hand1 === "rock") {
      if (hand2 === "paper") return "Hand two wins!";
      if (hand2 === "scissors") return "Hand one wins!";
    }
    // paper vs x
    else if (hand1 === "paper") {
      if (hand2 === "rock") return "Hand one wins!";
      if (hand2 === "scissors") return "Hand two wins!";
    }
    // scissors vs x
    else if (hand1 === "scissors") {
      if (hand2 === "rock") return "Hand two wins!";
      if (hand2 === "paper") return "Hand one wins!";
    } else return "Invalid input.";
  } else return "Invalid input.";
}

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

function scrubADubDub(str) {
  str = str.toLowerCase();
  str = str.trim();
  return str;
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
    it("should scrub input to ensure lowercase with trimmed whitepace", () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!");
    });
    it("should detect when user inputs something other than rock, paper, or scissors", () => {
      assert.equal(rockPaperScissors("test1", "test2"), "Invalid input.");
      assert.equal(rockPaperScissors(123, 456), "Invalid input.");
      assert.equal(rockPaperScissors(undefined, null), "Invalid input.");
    });
  });
} else {
  getPrompt();
}
