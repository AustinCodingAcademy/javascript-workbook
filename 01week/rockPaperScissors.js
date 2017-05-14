'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  if(hand1 === 'rock' && hand2 === 'paper'){
    return 'Hand Two Wins';
  }
  if(hand1 === 'rock' && hand2 === 'scissors'){
    return 'Hand One Wins';
    //asdf//
  }
  if(hand1 === 'scissors' && hand2 === 'rock'){
    return 'Hand Two Wins';
  }
  if(hand1 === 'scissors' && hand2 === 'paper'){
    return 'Hand One Wins';
    //asdf//
  }
  if(hand1 === 'paper' && hand2 === 'rock'){
    return 'Hand One Wins';
  }
  if(hand1 === 'paper' && hand2 === 'scissors'){
    return 'Hand Two Wins';
  }

    //asdf//
  if(hand1 === 'paper' && hand2 === 'paper'){
    return 'Its a tie!';
  }
  if(hand1 === 'rock' && hand2 === 'rock'){
    return 'Its a tie!';
  }
  if(hand1 === 'scissors' && hand2 === 'scissors'){
    return 'Its a tie!';
  }

}

    // Write code here



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
  });
} else {

  getPrompt();

}
