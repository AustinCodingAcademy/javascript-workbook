'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code herehand
  hand1 = hand1.trim().toLowerCase();
  hand2 = hand2.trim().toLowerCase();

  if (hand1 === hand2){
  return "Tie Game";}
  else if (hand1 === "rock" && hand2 === "paper"){
    return "Hand2 Wins!";}
  if (hand1 === "paper" && hand2 === "scissors"){
    return "Hand2 Wins!";}
  else if (hand1 === "scissors" && hand2 === "rock"){
    return "Hand2 Wins!";}
  if (hand1 === "paper" && hand2 === "rock"){
    return "Hand1 Wins!";}  
  else if (hand1 === "scissors" && hand2 === "paper"){
    return "Hand1 Wins!";}
  if (hand1 === "rock" && hand2 === "scissors"){
    return "Hand1 Wins!";}  
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "Tie Game");
      assert.equal(rockPaperScissors('paper', 'paper'), "Tie Game");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "Tie Game");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand2 Wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand2 Wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand1 Wins!");
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand2 Wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand1 Wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand1 Wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand2 Wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand2 Wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand2 Wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand1 Wins!");
    });
    it('should detect valid entry', () => {
      assert.notEqual(rockPaperScissors('rock', 'rock'));
      assert.notEqual(rockPaperScissors('paper', 'paper'));
      assert.notEqual(rockPaperScissors('scissors', 'scissors'));
    });
  });
} else {

  getPrompt();

}
