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
  const notValid = "Please enter a valid input";

  //trim turn all sting inputs to lower case
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  // detect win conditions ("for loop" statement)
  const hand1WinCombo = ["rockscissors", "paperrock", "scissorspaper"];
  const hand2WinCombo = ["rockpaper", "paperscissors", "scissorsrock"];
  // detect tie
  if (hand1 === hand2) {
    return tie;
  }
  // check for win
  for (let i = 0; i < hand1WinCombo.length; i++) {
    if (hand1 + hand2 === hand1WinCombo[i]) {
      return hand1Wins;
    } else if (hand1 + hand2 === hand2WinCombo[i]) {
      return hand2Wins;
    }
  }
  // if anything other than rock, paper or scissors is entered - return error message
  if (hand1 + hand2 != hand1WinCombo || hand2WinCombo) {
    return notValid;
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
    //write test code here
    it("should tell you if hand one is the winner", () => {
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
      assert.equal(rockPaperScissors("paper", "rock"), "Hand one wins!");
      assert.equal(rockPaperScissors("scissors", "paper"), "Hand one wins!");
    });
    it("should tell you if hand two is the winner", () => {
      assert.equal(rockPaperScissors("scissors", "rock"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
    });
    it("should tell you if there is a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!");
    });
    it("should convert entry to lower case", () => {
      assert.equal(rockPaperScissors("RoCk", "sCisSors"), "Hand one wins!");
      assert.equal(rockPaperScissors("PAPER", "ROCK"), "Hand one wins!");
      assert.equal(rockPaperScissors("ScISsOrS", "paPer"), "Hand one wins!");
    });
    it("should return an invalid input if not rock paper or scissors", () => {
      assert.equal(
        rockPaperScissors("r0ck", "scAss0rs"),
        "Please enter a valid input"
      );
      assert.equal(
        rockPaperScissors("squirrel", "panther"),
        "Please enter a valid input"
      );
      assert.equal(
        rockPaperScissors("stone", "clipper"),
        "Please enter a valid input"
      );
    });
  });
} else {
  getPrompt();
}
