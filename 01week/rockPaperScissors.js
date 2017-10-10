'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var hands = 'rock, paper, scissors';


function rockPaperScissors(hand1, hand2) {
// tests for null value
  if (hand1 === null) {
    return "hand1 is null";
  } else if (hand2 === null) {
    return "hand2 is null";
  }
// check to see if inputs are correct after trimming and lowercase
  let lHand1 = hand1.toLowerCase().trim();
  let lHand2 = hand2.toLowerCase().trim();
// checks for falsey values
  if (!lHand1) {
    return "hand1 is falsey";
  } else if (!lHand2) {
    return "hand2 is falsey";
  }
  // checks if rock, paper or scissors are selected
  if (hands.indexOf(lHand1) == -1){
    return "invalid input for hand1";
    }
  else if (hands.indexOf(lHand2) == -1){
    return "invalid input for hand2";
    }
  // else if (lHand1.indexOf('scissors') == -1){
  //   return "invalid input for hand1";
  //   }
  // if (lHand2.indexOf('rock') == -1){
  //   return "invalid input for hand1";
  //   }
  // else if (lHand2.indexOf('paper') == -1){
  //   return "invalid input for hand1";
  //   }
  // else if (lHand2.indexOf('scissors') == -1){
  //   return "invalid input for hand1";
  //   }
// tests for a tie
  if (lHand1 === lHand2) {
    return "It's a tie!";
// tests for each scenario other than a tie
  }else if (lHand1 == 'rock') {
    if (lHand2 == 'paper'){
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }
  }else if (lHand1 == 'paper') {
    if (lHand2 == 'scissors'){
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }
  }else if (lHand1 == 'scissors') {
    if (lHand2 == 'rock'){
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }
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
    it('should detect when the hand is null', () => {
      assert.equal(rockPaperScissors('rOcK', null), "hand2 is null");
      assert.equal(rockPaperScissors(null, 'SCISSORS'), "hand1 is null");
    });
    it('should detect when the input is not rock, paper or scissors', () => {
      assert.equal(rockPaperScissors('peanut', 'rock'), "invalid input for hand1");
      assert.equal(rockPaperScissors('paper', 'gun'), "invalid input for hand2");
    });
    it('should detect when the input is falsey', () => {
      assert.equal(rockPaperScissors( '', 'rock'), "hand1 is falsey");
      assert.equal(rockPaperScissors('paper', ''), "hand2 is falsey");
    });
    it('should NOT detect when the input incomplete word ex: pape', () => {
      assert.notEqual(rockPaperScissors( 'pape', 'rock'), "invalid input for hand1");
      assert.notEqual(rockPaperScissors('paper', 'ock'), "invalid input for hand2");
    });
  });
} else {

  getPrompt();

}
