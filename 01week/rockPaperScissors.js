'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here


  if(hand1.toLowerCase() === hand2.toLowerCase()){
    return "It's a tie!";
  }else if((hand1.toLowerCase() === 'rock' && hand2.toLowerCase() === 'paper') || (hand1.toLowerCase() === 'paper' && hand2.toLowerCase() === 'scissors') || (hand1.toLowerCase() === 'scissors' && hand2.toLowerCase() === 'rock')){
    return 'Hand two wins!';
  }else if((hand1.toLowerCase() === 'paper' && hand2.toLowerCase() === 'rock') || (hand1.toLowerCase() === 'scissors' && hand2.toLowerCase() ==='paper') || (hand1.toLowerCase() === 'rock' && hand2.toLowerCase() === 'scissors'))
    return 'Hand one wins!';
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    var number = Math.random();
    var computer = null;
    if(number <= 0.33){
      computer = 'rock';
    }else if(number <= 0.66){
      computer = 'paper';
    }else{
      computer = 'scissors';
    }
    console.log('hand2:', (computer));
    console.log( rockPaperScissors(answer1, computer) );

    getPrompt();

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
