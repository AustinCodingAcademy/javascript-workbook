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
  const notNumber = "This game doesn't use numbers!";

  //trim turn all sting inputs to lower case
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  // detect win conditions ("if" statements) - ***this works and passes***
  //   if (
  //     (hand1 === "rock" && hand2 === "scissors") ||
  //     (hand1 === "paper" && hand2 === "rock") ||
  //     (hand1 === "scissors" && hand2 === "paper")
  //   ) {
  //     return hand1Wins;
  //   } else if (
  //     (hand2 === "rock" && hand1 === "scissors") ||
  //     (hand2 === "paper" && hand1 === "rock") ||
  //     (hand2 === "scissors" && hand1 === "paper")
  //   ) {
  //     return hand2Wins;
  //   } else if (hand1 === hand2) {
  //     return tie;
  //   } else {
  //     return "you can only enter rock, paper or scissors";
  //   }
  // }

  // detect win conditions ("switch" statements) - ***this works and passes too***
  //   switch (hand1 + hand2) {
  //     case "rockscissors":
  //     case "paperrock":
  //     case "scissorspaper":
  //       return hand1Wins;
  //     case "rockpaper":
  //     case "paperscissors":
  //     case "scissorsrock":
  //       return hand2Wins;
  //     case "rockrock":
  //     case "paperpaper":
  //     case "scissorsscissors":
  //       return tie;
  //   }
  // }

  // detect win conditions ("for loop" statement) - ***this workds and passes too***
  const hand1WinCombo = ["rockscissors", "paperrock", "scissorspaper"];
  const hand2WinCombo = ["rockpaper", "paperscissors", "scissorsrock"];

  if (hand1 === hand2) {
    return tie;
  }

  for (let i = 0; i < hand1WinCombo.length; i++) {
    if (hand1 + hand2 === hand1WinCombo[i]) {
      return hand1Wins;
    } else if (hand1 + hand2 === hand2WinCombo[i]) {
      return hand2Wins;
    }
  }

  // if (hand1 || hand2 === typeof 12345) {
  //   return notNumber;
  // } else

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
    // it("should return error message if user inputs numbers", () => {
    //   assert.equal(
    //     typeof rockPaperScissors(12345, 12345),
    //     "This game doesn't use numbers!"
    //   );
    //   assert.equal(
    //     typeof rockPaperScissors("PAPER", 123),
    //     "This game doesn't use numbers!"
    //   );
    //   assert.equal(
    //     typeof rockPaperScissors(5783, "scissors"),
    //     "This game doesn't use numbers!"
    //   );
    // });
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
