'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(computerChoice, hand2) {



  if (computerChoice === hand2) {
    return 'It\'s a tie!';}
  if (computerChoice === 'rock' && hand2 === 'scissors') {
    return 'Hand one wins!';
  }
  else {
    return 'Hand two wins!';
  }
  if (computerChoice === 'scissors' && hand2 === 'paper') {
    return 'Hand one wins!';
  }
  else {
    return 'Hand two wins!';
  }
  if (computerChoice === 'paper' && hand2 === 'scissors') {
    return 'Hand two wins!';
  }
  else {
    return 'Hand one wins!';
  }

}




//prompt cycles each time this is why computer choice is here
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    // rl.question('hand2: ', (answer2) => {
    var computerChoices = ['rock', 'paper', 'scissors']
    var randomNumber = Math.floor(Math.random()*computerChoices.length);
    const computerChoice = computerChoices[randomNumber];
    console.log(computerChoice);
    console.log( rockPaperScissors(answer1, computerChoice) );
    getPrompt();
    // });
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
