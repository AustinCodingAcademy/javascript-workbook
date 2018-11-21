"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here
  //trim
  //turn strings lowercase
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  const tie = "It's a tie!";
  const hand1wins = "Hand one wins!";
  const hand2wins = "Hand two wins!";
  if (hand1 === hand2) {
    return tie;
  }
  if (hand1 === "rock" && hand2 === "scissors") {
    return hand1wins;
  }
  if (hand1 === "rock" && hand2 === "paper") {
    return hand2wins;
  }
  if (hand1 === "paper" && hand2 === "scissors") {
    return hand2wins;
  }
  if (hand1 === "paper" && hand2 === "rock") {
    return hand1wins;
  }
}
var str = " ";
var strLower = str.toLowerCase();

strLower.replace(/\s/g, "");

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
