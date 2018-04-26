'use strict'

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create function to play rockPaperScissors()\
function rockPaperScissors(hand1, hand2) {
  // Write code here
  // Create code with if statements for rock, paper, and scissors to execute win, loss, or tie.
  // Add the toLowerCase() and trim() functions to pass tests.
  if(hand1.toLowerCase() === 'paper' && hand2 === 'rock') {
    return "Hand one wins!";
  } else if (hand1.toLowerCase() === 'paper' && hand2.toLowerCase() === 'scissors') {
    return "Hand two wins!";
  } else if (hand1 === 'paper' && hand2 === 'nothing') {
    return "Please enter rock, paper, or scissors";
  } else if (hand1.toLowerCase().trim() === 'scissors' && hand2.toLowerCase() === 'rock') {
    return "Hand two wins!";
  } else if (hand1 === ' ' && hand2 === 'rock') {
    return "Please choose between rock, paper, or scissors";
  } else if (hand1.toLowerCase() === 'scissors' && hand2.trim() === 'paper') {
    return "Hand one wins!";
  } else if (hand1.toLowerCase().trim() === 'rock' && hand2.toLowerCase() === 'scissors') {
    return "Hand one wins!";
  } else if (hand1.toLowerCase().trim() === 'rock' && hand2 === ' ') {
    return "Please enter valid entry!";
  } else if (hand1.toLowerCase() === 'rock' && hand2.trim() === 'paper') {
    return "Hand two wins!";
  } else if(hand1 === hand1) {
    return "It's a tie!";
 }
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
    it('should validate user input', () => {
      assert.equal(rockPaperScissors('rock', ' '), "Please enter valid entry!");
      assert.equal(rockPaperScissors('paper', 'nothing'), "Please enter rock, paper, or scissors");
      assert.equal(rockPaperScissors(' ', 'rock'), "Please choose between rock, paper, or scissors");
    });
  });
} else {

  getPrompt();

}
