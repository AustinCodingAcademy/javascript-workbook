'use strict'

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  const tie = "It's a tie!";
  const hand1Wins = "Player wins!";
  const hand2Wins = "AI wins!";
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  if (!hand1 || !hand2) {
    return "Rock Paper or Scissors....only";
  }
  if (hand1 != "rock" && hand1 != "scissors" && hand1 != "paper") {
    return "please enter a valid hand Player";
  }
  if (hand2 != "rock" && hand2 != "scissors" && hand2 != "paper") {

    return "please enter a valid hand";
  }
  if (hand1 === hand2) {
    return tie;
  }
  const hand1WinConditions = ["rock/scissors", "paper/rock", "scissors/paper"];
  const hand2WinConditions = ["scissors/rock", "rock/paper", "paper/scissors"];
  for (let i = 0; i < hand1WinConditions.length; i++) {
    if (hand1.toString() + "/" + hand2.toString() === hand1WinConditions[i]) {
      return hand1Wins;
    } else if (hand1.toString() + "/" + hand2.toString() === hand2WinConditions[i]) {
      return hand2Wins;
    }

  }
}

function playerTwoAI() {
  let hands = ["rock", "paper", "scissors"];
  let chosen2 = hands[Math.floor(Math.random() * hands.length)];
  console.log("AI player 2 " + chosen2);
  return chosen2;

}

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    console.log(rockPaperScissors(answer1, playerTwoAI()));
    getPrompt();
  })
}
//Updated testing 
if (typeof describe === "function") {
  describe("rockPaperScissors()", () => {
    // Tie conditions
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!")
    });
    // Detect when nothing has been entered
    it("detect when nothing has been entered", () => {
      assert.equal(rockPaperScissors("", ""), "Rock Paper or Scissors....only");
    });
    // Player winning conditions
    it("should detect when Player wins", () => {
      assert.equal(rockPaperScissors("rock", "scissors"), "Player wins!");
      assert.equal(rockPaperScissors("paper", "rock"), "Player wins!");
      assert.equal(rockPaperScissors("scissors", "paper"), "Player wins!");
    });
    // Hand 2 winning conditions
    it("should detect when AI wins", () => {
      assert.equal(rockPaperScissors("scissors", "rock"), "AI wins!");
      assert.equal(rockPaperScissors("rock", "paper"), "AI wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "AI wins!")
    });
    //valid hand
    it("must be a valid hand selection", () => {
      assert.equal(rockPaperScissors("sscires", "rrck"), "please enter a valid hand");
      assert.equal(rockPaperScissors("rick", "popeR"), "please enter a valid hand");
      assert.equal(rockPaperScissors("pipER", "Slissors"), "please enter a valid hand");
    });
  });
} else {
  getPrompt();
}