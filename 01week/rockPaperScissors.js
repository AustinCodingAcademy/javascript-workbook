"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  const tie = "It's a tie!";
  const hand1wins = "Player wins!";
  const hand2wins = "AI wins!";
  let i = 0;

  //Check if any hands have a value
  if (!hand1 || !hand2) {
    return "You must enter valid hand!";
  }

  //Check if hand one has entered rock, paper, or scissors
  if (hand1 != "rock" && hand1 != "paper" && hand1 != "scissors") {
    return "You must enter a valid hand!";
  }
  // //Check if hand two has entered rock, paper, or scissors
  // if (hand2 != "rock" && hand2 != "paper" && hand2 != "scissors") {
  //   return "You must enter a valid play for hand 2!";
  // }

  //Check for tie condition
  if (hand1 === hand2) {
    return tie;
  }

  //Possible win conditions
  const hand1winConditions = ["rock/scissors", "scissors/paper", "paper/rock"];
  const hand2winConditions = ["scissors/rock", "paper/scissors", "rock/paper"];

  //Check hand1 wins
  for (i = 0; i < hand1winConditions.length; i++) {
    if (hand1.toString() + "/" + hand2.toString() === hand1winConditions[i]) {
      return hand1wins;
    }
  }
  //Check hand2 wins
  for (i = 0; i < hand2winConditions.length; i++) {
    if (hand1.toString() + "/" + hand2.toString() === hand2winConditions[i]) {
      return hand2wins;
    }
  }
}

function playerTwoAI() {
  var hands = ["rock", "paper", "scissors"];
  let chosen = hands[Math.floor(Math.random() * hands.length)];
  console.log("AI chose " + chosen);
  return chosen;
}

// function getPrompt() {
//   rl.question("hand1: ", answer1 => {
//     rl.question("hand2: ", answer2 => {
//       console.log(rockPaperScissors(answer1, answer2));
//       getPrompt();
//     });
//   });
// }

function getPrompt() {
  rl.question("Player's Hand: ", answer1 => {
    console.log(rockPaperScissors(answer1, playerTwoAI()));
    getPrompt();
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
      assert.equal(rockPaperScissors("rock", "paper"), "AI wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "AI wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Player wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "AI wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "AI wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Player wins!");
    });
  });
} else {
  getPrompt();
}
