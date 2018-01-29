'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const possibleHands = ["rock", "paper", "scissors"];

function rockPaperScissors(hand1, hand2) {
  hand1 += hand1.toLowerCase().trim()
  hand2 += hand2.toLowerCase().trim()
  if(possibleHands.includes(Hand1) === true && possibleHands.includes(Hand2) === true){
    if (hand1 === hand2){
      return "It's a tie!"}
    else if(hand1 === "rock" && hand2=== "scissors" || hand1 === "paper" && hand2 === "rock" ||
     hand1 === "scissors" && hand2=== "paper"){
      return "Hand one wins!"}
    else if(hand1 === "rock" && hand2=== "paper" || hand1 === "paper" && hand2=== "scissors"){
      return "Hand two wins!"}
    else {return "Hand two wins!"}
    }
  }else {return "please enter either rock, paper or scissors."}


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

//Tests

if (typeof describe === 'function') {

  describe(rockPaperScissors(), () => {
    it('should detect when hand1 wins', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), true);
      assert.equal(rockPaperScissors('paper', 'rock'), true);
      assert.equal(rockPaperScissors('scissors', 'paper'), true);
    });
    it('should detect when hand1 wins', () => {
      assert.equal(rockPaperScissors('scissors', 'rock'), true);
      assert.equal(rockPaperScissors('rock', 'paper'), true);
      assert.equal(rockPaperScissors('paper', 'scissors'), true);
    });
    it('should detect when the input is valid', () => {
      assert.equal(rockPaperScissors('stone', 'book'),false );
      assert.equal(rockPaperScissors('hello', 'knives'), false);
      assert.equal(rockPaperScissors('stone ', 'knives'), false);
    });
  });
}
