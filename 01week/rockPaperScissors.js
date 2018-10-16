'use strict';

/*
hand1 enters rock, paper, or scissors.
hand2 enters  rock, paper, or scissors.
if hand1 and hand2 enter same thing, return "its a tie"
if hand1 enters rock and hand2 enters scissors, hand1 wins.
if hand1 enters rock and hand2 enters paper, hand2 wins.
if hand1 enters paper and hand2 enters rock, hand1 wins.
if hand1 enters paper and hand2 enters scissors, hand2 wins.
if hand1 enters scissors and hand2 enters paper, hand1 wins.
if hand1 enters scissors and hand2 enters rock, hand2 wins.
*/

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here
  
  if (hand1 === 'rock' && hand2 === 'paper') {     
    return "Hand two wins!"
  } else if (hand1 === 'rock' && hand2 === 'scissors') {
    return "Hand one wins!"}
   
  if (hand1 === 'paper' && hand2 === 'rock') {
    return "Hand one wins!"
  } else if (hand1 === 'paper' && hand2 === 'scissors') {
    return "Hand two wins!"}
  
  if (hand1 === 'scissors' && hand2 === 'rock') {
    return "Hand two wins!"
  } else if (hand1 === 'scissors' && hand2 === 'paper') {
    return "Hand one wins!"}
   
  
  if (hand1 === hand2) {
    return "It's a tie!"
  } 
  
  if  (hand1 && hand2 != 'rock'||'paper'||'scissors') {
    return "please enter rock, paper, or scissors"
  }
}



function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1.trim().toLowerCase(), answer2.trim().toLowerCase()));
      

      getPrompt();

    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}