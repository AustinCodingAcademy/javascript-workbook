'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});





function rockPaperScissors(hand1, hand2) {

  // Write code here
  if (hand1 == "rock" && hand2 == "scissors") {
    return "User1 wins"
  } else if (hand1 == "rock" && hand2 == "paper") {
    return "User2 wins"
  } else if (hand1 == "rock" && hand2 == "rock") {
    return "It's a tie"
  } else if (hand1 == "paper" && hand2 == "rock") {
    return "User1 wins"
  } else if (hand1 == "paper" && hand2 == "scissors") {
    return "User2 wins"
  } else if (hand1 == "paper" && hand2 == "paper") {
    return "It's a tie"
  } else if (hand1 == "scissors" && hand2 == "paper") {
    return "User1 wins"
  } else if (hand1 == "scissors" && hand2 == "rock") {
    return "User2 wins"
  } else {
    return "It's a tie"
  }
  
// var result;

//  switch(hand1 , hand2) {
//    case (hand1 === "rock" && hand2 == "scissors"):
//    case (hand1 == "scissors" && hand2 == "paper"):
//    case (hand1 == "paper" && hand2 == "rock"):
//    result = "User 1 Wins";
//    break;
//    case (hand2 == "rock" && hand1 == "scissors"):
//    case (hand2 == "scissors" && hand1 == "paper"):
//    case (hand2 == "paper" && hand1 == "rock"):
//    result = "User 2 Wins"; 
//    break;
//    case (hand2 == "rock" && hand1 == "rock"):
//    case (hand2 == "scissors" && hand1 == "scissors"):
//    case (hand2 == "paper" && hand1 == "paper"):
//    result = "It's a Tie"; 
//    break;
//  }

//  return result;

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
