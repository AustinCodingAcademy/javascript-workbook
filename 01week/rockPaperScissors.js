'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Get user input for hand1 and hand2
// Check that inputs are truthy
// Remove whitespace from user inputs and convert toLowerCase
// Create an array that holds ['rock', 'paper', 'scissors']
// Check that user input is either rock || paper || scissors
// if hand1 is the same as hand2,       return 'It's a tie!'
// if hand1 = rock & hand2 = paper,     return 'Hand two wins!'
// if hand1 = paper & hand2 = scissors, return 'Hand two wins!'
// if hand1 = scissors & hand2 = rock,  return 'Hand two wins!' 
// if hand2 = rock & hand1 = paper,     return 'Hand one wins!' 
// if hand2 = paper & hand1 = scissors, return 'Hand one wins!'
// if hand2 = scissors & hand1 = rock,  return 'Hand one wins!' 
// add else statements to each if statement that returns other hand wins
// methods: if/else statement, toLowerCase(), trim(), indexOf()
function rockPaperScissors(hand1, hand2) {

  // Write code here
  
  if(hand1 && hand2){
    const handOne = hand1.trim().toLowerCase();
    const handTwo = hand2.trim().toLowerCase();
    const possibleHands = ['rock', 'paper', 'scissors'];

    if(possibleHands.indexOf(handOne) > -1 && possibleHands.indexOf(handTwo) > -1 ){
      if(handOne === handTwo){
        return 'It\'s a tie!'
      }
      if(handOne == 'rock'){
        return handTwo == 'paper' ? 'Hand two wins!' : 'Hand one wins!';
      } else if(handOne == 'paper'){
        return handTwo == 'scissors' ? 'Hand two wins!' : 'Hand one wins!';
      } else if(handOne == 'scissors'){
        return handTwo == 'rock' ? 'Hand two wins!' : 'Hand one wins!';
      } 
    } else {
      return 'Invalid input'
    }
  } else {
    return 'Invalid input'
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
  });
} else {

  getPrompt();

}
