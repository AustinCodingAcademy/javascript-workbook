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

  // ensure input exists
  if (hand1 && hand2) {
    // clean up input strings
    hand1 = scrubADubDub(hand1);
    hand2 = scrubADubDub(hand2);

    //ensure hand1 and hand2 are specifically "rock", "paper", or "scissors"
    if (
      (hand1 === rock || hand1 === paper || hand1 === scissors) &&
      (hand2 === rock || hand2 === paper || hand2 === scissors)
    ) {
      return determineWinner(hand1, hand2);
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
  case rock:
    if (hand2 === scissors) return result_hand1Win;
    else return result_hand2Win;

  case paper:
    if (hand2 === rock) return result_hand1Win;
    else return result_hand2Win;

  case scissors:
    if (hand2 === paper) return result_hand1Win;
    else return result_hand2Win;
  }
}

/**
 * Function: scrubADubDub(str)
 * Description: applies string methods to ensure the returned string is all lowercase and contains no whitespace
 */
function scrubADubDub(str) {
  return str.toLowerCase().trim();
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
  // write tests here
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), result_tie);
      assert.equal(rockPaperScissors("paper", "paper"), result_tie);
    });
    it("should detect when each hand wins", () => {
      assert.equal(rockPaperScissors("rock", "scissors"), result_hand1Win);
      assert.equal(rockPaperScissors("scissors", "paper"), result_hand1Win);
      assert.equal(rockPaperScissors("rock", "paper"), result_hand2Win);
      assert.equal(rockPaperScissors("scissors", "rock"), result_hand2Win);
    });
    it("should handle whitespace and capitilized letters", () => {
      assert.equal(rockPaperScissors(" SCIssorS", "paPer "), result_hand1Win);
      assert.equal(rockPaperScissors("PAPER", "SCISSORS"), result_hand2Win);
      assert.equal(rockPaperScissors("paper", "rOck      "), result_hand1Win);
    });
    it("should handle if the user inputs something that is not 'rock', 'paper', or 'scissors'", () => {
      assert.equal(rockPaperScissors("NotRock", "NotScissors"), result_error);
      assert.equal(rockPaperScissors("rawk", "papper"), result_error);
      assert.equal(rockPaperScissors(undefined, 123), result_error);
      assert.equal(rockPaperScissors("rock", ""), result_error);
      assert.equal(rockPaperScissors(".paper", "rock_"), result_error);
    });
  });
} else {
  getPrompt();
}
