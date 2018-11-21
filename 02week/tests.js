"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here

  //set the win strings as variables so I don't have to type them over and over and to make sure they are always spelled right
  const tie = "It's a tie!";
  const hand1wins = "Hand one wins!";
  const hand2wins = "Hand two wins!";

  //normalize inputs, make any input lowr case, and get rid of trailing and leading spaces
  let hand1norm = hand1.toLowerCase().trim();
  let hand2norm = hand2.toLowerCase().trim();

  //detect a tie
  if (hand1norm === hand2norm) {
    return tie;
  }

  // line up two arrys where if the indexes are the same the winner is the win array and the loser is the lose array
  let win = ["rock", "paper", "scissors"];
  let lose = ["scissors", "rock", "paper"];

  //get the index of the hand thrown in each array
  let h1win = win.indexOf(hand1norm);
  let h2win = win.indexOf(hand2norm);
  let h1lose = lose.indexOf(hand1norm);
  let h2lose = lose.indexOf(hand2norm);

  //if hand 1 index from the win array is the same as hand 2 index from the lose array I know hand 1 is the winner
  if (h1win === h2lose) {
    return hand1wins;
  }

  //and vice versa
  if (h2win === h1lose) {
    return hand2wins;
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
  //write tests here
} else {
  getPrompt();
}
