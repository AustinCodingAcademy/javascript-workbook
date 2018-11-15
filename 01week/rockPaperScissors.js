"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Scubs input
  hand1 = hand1.trim().toLowerCase();
  hand2 = hand2.trim().toLowerCase();

  const tie = "It's a tie!";
  const hand1win = "Hand one wins!";
  const hand2win = "Hand two wins!";
  let display = "Invalid input";

  // First attempt (37 ms)
  /*
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
*/

  // Second attempt (11 ms)

  const hands = ["rock", "paper", "scissors"];
  const outcomes = [hand1win, hand2win, tie];

  // Assigns values of 0, 1, and 2 to rock, paper, and scissors, respectively. -1 Assigned to invalid inputs.
  const hand1Index = hands.indexOf(hand1);
  const hand2Index = hands.indexOf(hand2);
  if (hand1Index === -1 || hand2Index === -1) {
    // Returns "invalid input" and ends function
    return display;
  } else {
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
    it('should display "Invalid input" if the input cannot be resolved to rock, paper, or scissors', () => {
      assert.equal(rockPaperScissors("hello", "world"), "Invalid input");
    });
  });
} else {
  getPrompt();
}
