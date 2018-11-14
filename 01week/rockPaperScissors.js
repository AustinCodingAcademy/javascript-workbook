"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// game elements
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// win messages
const result_error = "Invalid input.";
const result_tie = "It's a tie!";
const result_hand1Win = "Hand one wins!";
const result_hand2Win = "Hand two wins!";

/**
 * Function: rockPaperScissors(hand1, hand2)
 * Description: takes in two values and calls determineWinner() if we like the values, otherwise return error message
 */
function rockPaperScissors(hand1, hand2) {
  // Write code here

  // ensure valid input
  if (hand1 && hand2) {
    // ensure we have strings
    if (typeof hand1 === "string" && typeof hand2 === "string") {
      // clean up input strings
      hand1 = scrubADubDub(hand1);
      hand2 = scrubADubDub(hand2);

      //ensure hand1 and hand2 are specifically "rock", "paper", or "scissors"
      if (
        (hand1 === rock || hand1 === paper || hand1 === scissors) &&
        (hand2 === rock || hand2 === paper || hand2 === scissors)
      ) {
        let winner = determineWinner(hand1, hand2);
        return winner;
      } else return result_error;
    } else return result_error;
  } else return result_error;
}

/**
 * Function: determineWinner(hand1, hand2)
 * Description: takes two strings of "rock", "paper", or "scissors" and applies logic to determine the result
 */
function determineWinner(hand1, hand2) {
  // tie condition
  if (hand1 === hand2) return result_tie;

  switch (hand1) {
    case rock: {
      if (hand2 === scissors) return result_hand1Win;
      else return result_hand2Win;
    }

    case paper: {
      if (hand2 === rock) return result_hand1Win;
      else return result_hand2Win;
    }

    case scissors: {
      if (hand2 === paper) return result_hand1Win;
      else return result_hand2Win;
    }
  }
}

/**
 * Function: scrubADubDub(str)
 * Description: applies string methods to ensure the returned string is all lowercase and contains no whitespace
 */
function scrubADubDub(str) {
  str = str.toLowerCase();
  str = str.trim();
  return str;
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
