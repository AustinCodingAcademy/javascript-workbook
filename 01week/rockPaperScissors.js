'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// player one enters hand, player two enters hand
// if either player hand is not a rock, paper, or scissor, fail
// if both hands are the same, tie
// if hand1 is a rock and the other is scissor, rock wins, else hand2 paper wins
// if hand1 is paper and other is rock, hand1 paper wins, else hand2 scissors wins
// if hand1 is a scissors and other is paper hand1 scissors wins, else hand2 rock wins
//
function rockPaperScissors(hand1, hand2) {
  // set our valid param values
  const hands = ['rock', 'paper', 'scissors'];
  // check for not a string
  if (typeof hand1 != 'string' || typeof hand2 != 'string') {
    console.log('One of these hands is not a string!');
    return false;
  }
  // we have strings, normalize them
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  // check both hands for valid values
  if (hands.indexOf(hand1) === -1) {
    console.log('Hand one is not one of rock, papers, scissors!');
    return false;
  } else if (hands.indexOf(hand2) === -1) {
    console.log('Hand two is not one of rock, papers, scissors!');
    return false;
  }

  // check for ties
  if (hand1 === hand2) {
    console.log("It's a tie!");
    return true;
  }

  // check first hand for all values, and do appropriate comparison for each
  // given that there can be no ties at this point
  switch(hand1) {
    case 'rock':
      if (hand2 === 'scissors') {
        console.log("Hand one wins!");
      } else {
        console.log("Hand two wins!");
      }
      break;
    case 'paper':
      if (hand2 === 'rock') {
        console.log("Hand one wins!");
      } else {
        console.log("Hand two wins!");
      }
      break;
    case 'scissors':
      if (hand2 === 'paper') {
        console.log("Hand one wins!");
      } else {
        console.log("Hand two wins!");
      }
      break;
    default: 
      break;
  }
  return true;
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
