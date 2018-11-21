"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  let display = "Invalid input";
  if (typeof hand1 != "string" || typeof hand2 != "string") {
    return display;
  }
  hand1 = hand1.trim().toLowerCase();
  hand2 = hand2.trim().toLowerCase();

  const tie = "It's a tie!";
  const hand1win = "Hand one wins!";
  const hand2win = "Hand two wins!";

  const hands = ["rock", "paper", "scissors"];
  const outcomes = [hand1win, hand2win, tie];

  // Assigns values of 0, 1, and 2 to rock, paper, and scissors, respectively. -1 Assigned to invalid inputs.
  const hand1Index = hands.indexOf(hand1);
  const hand2Index = hands.indexOf(hand2);
  if (hand1Index === -1 || hand2Index === -1) {
    // Returns "invalid input" and ends function
    return display;
  }
  // (hand1Index - Hand2Index) maps to outcomes thusly:
  // [-2, -1, 0, 1, 2]
  // [hand1win, hand2win, tie, hand1win, hand2win]
  //
  // By adding 2, all the indexes are now positive:
  // [0, 1, 2, 3, 4]
  // [hand1win, hand2win, tie, hand1win, hand2win]
  //
  // By taking the remainder of a division of three, each outcomes is mapped to only one index:
  // [0, 1, 2, 0, 1]
  // [hand1win, hand2win, tie, hand1win, hand2win]
  const outcomeIndex = (hand1Index - hand2Index + 2) % 3;
  return outcomes[outcomeIndex];
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
  describe("rockPaperScissors()", () => {
    it("should return 'Invalid input' if the inputs cannot be resolved to rock, paper, or scissors", () => {
      assert.equal(rockPaperScissors(4, "paper"), "Invalid input");
      assert.equal(rockPaperScissors("cat", "dog"), "Invalid input");
      assert.equal(rockPaperScissors("scissors"), "Invalid input");
    });
    it("should resolve inputs with whitespace and uppercase to their appropriate hand values", () => {
      assert.equal(rockPaperScissors("Rock", "Paper"), "Hand two wins!");
      assert.equal(
        rockPaperScissors(" scissors ", " paper "),
        "Hand one wins!"
      );
      assert.equal(rockPaperScissors("  ROck  ", "ROCK "), "It's a tie!");
    });
    it("should detect a tie and return 'It's a tie!'", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
    });
    it("should detect a win and return a string saying which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("scissors", "paper"), "Hand one wins!");
    });
  });
} else {
  getPrompt();
}
