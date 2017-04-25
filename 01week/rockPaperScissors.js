'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, computerChoice) {



  if (hand1 === computerChoice) {
    return 'It\'s a tie!';}
  if (hand1 === 'rock' && computerChoice === 'scissors') {
    return 'Hand one wins!';
  }
  else {
    return 'Hand two wins!';
  }
  if (hand1 === 'scissors' && computerChoice === 'paper') {
    return 'Hand one wins!';
  }
  else {
    return 'Hand two wins!';
  }
  if (hand1 === 'paper' && computerChoice === 'scissors') {
    return 'Hand two wins!';
  }
  else {
    return 'Hand one wins!';
  }

}




//prompt cycles each time this is why computer choice is here
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
  //rl.prompt('computer: ') [randomNumber] => {
    var computerChoices = ['rock', 'paper', 'scissors']
    var randomNumber = Math.floor(Math.random()*computerChoices.length);

    const computerChoice = computerChoices[randomNumber];
    console.log('hand2:', computerChoice);
    console.log(rockPaperScissors(answer1, computerChoice));
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
