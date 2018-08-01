'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  console.log("user entered", hand1 ,'for hand1 and ', hand2, 'for hand2')
  const regex = /^\s*(?:rock|paper|scissors)\s*$/;
  if (regex.test(hand1) === true && regex.test(hand2) === true){
    console.log("Valid Entry")
    if (hand1 === "rock" && hand2 === "scissors"){
      console.log("Hand one wins!")
    }
    if (hand1 === "rock" && hand2 === "paper"){
      console.log("Hand two wins!")
    }
    if (hand1 === "rock" && hand2 === "rock"){
      console.log("It's a tie!")
    }
    if (hand1 === "paper" && hand2 === "rock"){
      console.log("Hand one wins!")
    }
    if (hand1 === "paper" && hand2 === "scissors"){
      console.log("Hand 2 wins!")
    }
    if (hand1 === "paper" && hand2 === "paper"){
      console.log("It's a tie!")
    }
    if (hand1 === "scissors" && hand2 === "paper"){
      console.log("Hand one wins!")
    }
    if (hand1 === "scissors" && hand2 === "rock"){
      console.log("Hand 2 wins!")
    }
    if (hand1 === "scissors" && hand2 === "scissors"){
      console.log("It's a tie!")
    }

  // Write code here
  console.log(hand1, hand2, 'in my function');
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
  });
} else {

  getPrompt();

}
