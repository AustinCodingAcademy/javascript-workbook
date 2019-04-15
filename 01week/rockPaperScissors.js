'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});





function rockPaperScissors(hand1, hand2) {
  const words = ["rock", "paper", "scissors"];
  let trimHand1 = hand1.trim().toLowerCase();
  let trimHand2 = hand2.trim().toLowerCase();

  
  if (words.includes(trimHand1) || words.includes(trimHand2)) {
    
    return funcCheck(trimHand1, trimHand2);
  } else {
    return "try again"
  }
}

function funcCheck(trimHand1, trimHand2) {
 
  if (trimHand1 == "rock" && trimHand2 == "scissors") {
    return "Hand one wins!"
  } else if (trimHand1 == "rock" && trimHand2 == "paper") {
    return "Hand two wins!"
  } else if (trimHand1 == "rock" && trimHand2 == "rock") {
    return "It's a tie!"
  } else if (trimHand1 == "paper" && trimHand2 == "rock") {
    return "Hand one wins!"
  } else if (trimHand1 == "paper" && trimHand2 == "scissors") {
    return "Hand two wins!"
  } else if (trimHand1 == "paper" && trimHand2 == "paper") {
    return "It's a tie!"
  } else if (trimHand1 == "scissors" && trimHand2 == "paper") {
    return "Hand one wins!"
  } else if (trimHand1 == "scissors" && trimHand2 == "rock") {
    return "Hand two wins!"
  } else {
    return "It's a tie!"
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
      assert.equal(funcCheck('rock', 'rock'), "It's a tie!");
      assert.equal(funcCheck('paper', 'paper'), "It's a tie!");
      assert.equal(funcCheck('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(funcCheck('rock', 'paper'), "Hand two wins!");
      assert.equal(funcCheck('paper', 'scissors'), "Hand two wins!");
      assert.equal(funcCheck('scissors', 'rock'), "Hand two wins!");
      assert.equal(funcCheck('rock', 'scissors'), "Hand one wins!");
      assert.equal(funcCheck('paper', 'rock'), "Hand one wins!");
      assert.equal(funcCheck('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should input a valid entry', () => {
      assert.equal(rockPaperScissors('taco', 'book'), "try again");
    });
  
  });
} else {

  getPrompt();

}
