'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  hand1=hand1.toLowerCase();
  hand2=hand2.toLowerCase();

  if (hand1===hand2){
    return 'TIE';
  }else if (hand1 === 'rock' && hand2 === 'scissors')  {
    return 'Hand 1 won the Electoral College (but not the popular vote)';
  }else if (hand1 === 'rock' && hand2 === 'paper'){
    return 'Hand 2 has the UPPER Hand (is it 2020 yet?)';
  }else if (hand1 === 'paper' && hand2 === 'rock'){
    return 'Hand 1 has the EEEEU-gest Hands';
  }else if (hand1 === 'paper' && hand2 === 'scissors'){
    return 'Hand 2 has a MUCH bigger nuclear button than Hand 1';
  }else if (hand1 === 'scissors' && hand2 === 'paper'){
    return 'Hand 1 is making Rock, Paper, Scissors GREAT Again! (with hats made in Indonesia)';
  }else if (hand1 === 'scissors' && hand2 === 'rock'){
    return 'With a little help form the Russians, Hand 2 Wins (but Hand 1 wrote a bestselling book)';
  }else {
    return 'BUT HER EMAILS! Give me some good input!';
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
