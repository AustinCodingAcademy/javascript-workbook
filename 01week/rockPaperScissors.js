'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// formatHand takes one string argument and either returns 1 of 3 possble hands for rock paper scissors or undefined
// Uses first letter of hand to determine if its rock || paper || scissors
// Must trim() whitespace and toLowerCase()
// methods: switch, charAt(), trim(), toLowerCase()
const formatHand = (hand) => {
  let setHand;
  switch(hand.trim().toLowerCase().charAt(0)){
    case 'r':
      setHand = 'rock';
      break;
    case 'p':
      setHand = 'paper';
       break;
    case 's':
      setHand = 'scissors';
      break;
    default:
      break;
  }
  return setHand;
}

// Create rockPaperScissors Parent function that takes two string arguments and returns 1 winner
// if hand1 is the same as hand2,       return 'It's a tie!'
// if hand1 = rock & hand2 = paper,     return 'Hand two wins!'
// if hand1 = paper & hand2 = scissors, return 'Hand two wins!'
// if hand1 = scissors & hand2 = rock,  return 'Hand two wins!' 
// if hand2 = rock & hand1 = paper,     return 'Hand one wins!' 
// if hand2 = paper & hand1 = scissors, return 'Hand one wins!'
// if hand2 = scissors & hand1 = rock,  return 'Hand one wins!' 
// methods: if statements
function rockPaperScissors(hand1, hand2) {

  // Write code here
  
  if(hand1 && hand2){
    const handOne = formatHand(hand1);
    const handTwo = formatHand(hand2);
    if(handOne && handTwo){
      if(handOne === handTwo){
        return 'It\'s a tie!'
      }
      if(handOne == 'rock'){
        return handTwo == 'paper' ? 'Hand two wins!' : 'Hand one wins!';
      } 
      if(handOne == 'paper'){
        return handTwo == 'scissors' ? 'Hand two wins!' : 'Hand one wins!';
      } 
      if(handOne == 'scissors'){
        return handTwo == 'rock' ? 'Hand two wins!' : 'Hand one wins!';
      } 
    }
  } 
  // One or more arguments are invalid
  return 'Invalid input';
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
